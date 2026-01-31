from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status, Body
from app.db.mongodb import db
from app.models.user import StudentCreate, UserInDB, UserRole
from app.core.security import get_password_hash
from bson import ObjectId

router = APIRouter()

# Helper to fix ObjectId serialization (Pydantic <-> MongoDB)
def fix_id(doc):
    if doc:
        doc["id"] = str(doc["_id"])
        del doc["_id"]
    return doc

@router.post("/", response_description="Add new student")
async def create_student(student: StudentCreate = Body(...)):
    users_collection = db.db.users
    
    # Check if email exists
    if users_collection.find_one({"email": student.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    # Custom USN Logic
    if student.reg_no:
        # Check if custom USN already exists
        if users_collection.find_one({"reg_no": student.reg_no, "school_code": student.school_code}):
            raise HTTPException(status_code=400, detail=f"Registration Number '{student.reg_no}' already exists for this school.")
        reg_no = student.reg_no
    else:
        # Generate USN (Registration Number)
        # Format: [SCHOOL_CODE]-[YYYY]-[SERIAL]
        school_code = student.school_code.upper().strip()
        current_year = datetime.now().year
        
        # Count students for this school in the current year
        # We use a regex to match the prefix
        prefix = f"{school_code}-{current_year}-"
        student_count = users_collection.count_documents({
            "role": UserRole.STUDENT,
            "school_code": school_code,
            "reg_no": {"$regex": f"^{prefix}"}
        })
        
        serial = str(student_count + 1).zfill(4)
        reg_no = f"{prefix}{serial}"

    # Hash password and prepare user dict
    hashed_password = get_password_hash(student.password)
    student_dict = student.dict()
    student_dict["hashed_password"] = hashed_password
    student_dict["role"] = UserRole.STUDENT
    student_dict["school_code"] = school_code
    student_dict["reg_no"] = reg_no
    del student_dict["password"] # Remove plain password
    
    new_student = users_collection.insert_one(student_dict)
    created_student = users_collection.find_one({"_id": new_student.inserted_id})
    return fix_id(created_student)

@router.get("/", response_description="List all students")
async def list_students():
    users_collection = db.db.users
    students = []
    # Find all users with role "student"
    cursor = users_collection.find({"role": UserRole.STUDENT})
    for doc in cursor:
        students.append(fix_id(doc))
    return students

@router.get("/{id}", response_description="Get a single student")
async def show_student(id: str):
    users_collection = db.db.users
    if (student := users_collection.find_one({"_id": ObjectId(id), "role": UserRole.STUDENT})) is not None:
        return fix_id(student)
    raise HTTPException(status_code=404, detail=f"Student {id} not found")

@router.delete("/{id}", response_description="Delete a student")
async def delete_student(id: str):
    users_collection = db.db.users
    delete_result = users_collection.delete_one({"_id": ObjectId(id), "role": UserRole.STUDENT})
    if delete_result.deleted_count == 1:
        return {"message": "Student deleted successfully"}
    raise HTTPException(status_code=404, detail=f"Student {id} not found")

@router.put("/{id}", response_description="Update a student")
async def update_student(id: str, student_data: dict = Body(...)):
    users_collection = db.db.users
    
    # Filter out empty fields and password (should be handled separately)
    student_data = {k: v for k, v in student_data.items() if v is not None}
    
    if len(student_data) >= 1:
        update_result = users_collection.update_one(
            {"_id": ObjectId(id), "role": UserRole.STUDENT}, 
            {"$set": student_data}
        )
        if update_result.modified_count == 1:
             if (updated_student := users_collection.find_one({"_id": ObjectId(id)})) is not None:
                return fix_id(updated_student)
    
    if (existing_student := users_collection.find_one({"_id": ObjectId(id)})) is not None:
        return fix_id(existing_student)
        
    raise HTTPException(status_code=404, detail=f"Student {id} not found")
