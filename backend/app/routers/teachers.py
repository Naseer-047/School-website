from typing import List
from fastapi import APIRouter, Depends, HTTPException, status, Body
from app.db.mongodb import db
from app.models.user import TeacherCreate, UserInDB, UserRole
from app.core.security import get_password_hash
from bson import ObjectId

router = APIRouter()

# Helper to fix ObjectId serialization
def fix_id(doc):
    if doc:
        doc["id"] = str(doc["_id"])
        del doc["_id"]
    return doc

@router.post("/", response_description="Add new teacher")
async def create_teacher(teacher: TeacherCreate = Body(...)):
    users_collection = db.db.users
    
    # Check if email exists
    if users_collection.find_one({"email": teacher.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash password and prepare user dict
    hashed_password = get_password_hash(teacher.password)
    teacher_dict = teacher.dict()
    teacher_dict["hashed_password"] = hashed_password
    teacher_dict["role"] = UserRole.TEACHER
    del teacher_dict["password"]
    
    new_teacher = users_collection.insert_one(teacher_dict)
    created_teacher = users_collection.find_one({"_id": new_teacher.inserted_id})
    return fix_id(created_teacher)

@router.get("/", response_description="List all teachers")
async def list_teachers():
    users_collection = db.db.users
    teachers = []
    cursor = users_collection.find({"role": UserRole.TEACHER})
    for doc in cursor:
        teachers.append(fix_id(doc))
    return teachers

@router.get("/{id}", response_description="Get a single teacher")
async def show_teacher(id: str):
    users_collection = db.db.users
    if (teacher := users_collection.find_one({"_id": ObjectId(id), "role": UserRole.TEACHER})) is not None:
        return fix_id(teacher)
    raise HTTPException(status_code=404, detail=f"Teacher {id} not found")

@router.delete("/{id}", response_description="Delete a teacher")
async def delete_teacher(id: str):
    users_collection = db.db.users
    delete_result = users_collection.delete_one({"_id": ObjectId(id), "role": UserRole.TEACHER})
    if delete_result.deleted_count == 1:
        return {"message": "Teacher deleted successfully"}
    raise HTTPException(status_code=404, detail=f"Teacher {id} not found")

@router.put("/{id}", response_description="Update a teacher")
async def update_teacher(id: str, teacher_data: dict = Body(...)):
    users_collection = db.db.users
    
    teacher_data = {k: v for k, v in teacher_data.items() if v is not None}
    
    if len(teacher_data) >= 1:
        update_result = users_collection.update_one(
            {"_id": ObjectId(id), "role": UserRole.TEACHER}, 
            {"$set": teacher_data}
        )
        if update_result.modified_count == 1:
             if (updated_teacher := users_collection.find_one({"_id": ObjectId(id)})) is not None:
                return fix_id(updated_teacher)
    
    if (existing_teacher := users_collection.find_one({"_id": ObjectId(id)})) is not None:
        return fix_id(existing_teacher)
        
    raise HTTPException(status_code=404, detail=f"Teacher {id} not found")
