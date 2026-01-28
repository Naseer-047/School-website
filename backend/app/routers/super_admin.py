from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from app.dependencies import get_current_super_admin
from app.db.mongodb import db
from app.models.user import UserInDB
from bson import ObjectId

router = APIRouter()

@router.get("/pending-institutes", response_model=List[dict])
def get_pending_institutes(current_user = Depends(get_current_super_admin)):
    users = list(db.db.users.find({"role": "admin", "verification_status": "pending"}).limit(100))
    results = []
    for user in users:
        user["_id"] = str(user["_id"])
        user.pop("hashed_password", None) 
        results.append(user)
    return results

@router.post("/approve-institute/{admin_id}")
def approve_institute(admin_id: str, current_user = Depends(get_current_super_admin)):
    result = db.db.users.update_one(
        {"admin_id": admin_id},
        {"$set": {"verification_status": "active"}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Institute not found or already active")
    return {"message": f"Institute {admin_id} verified and fully activated."}

@router.post("/reject-institute/{admin_id}")
def reject_institute(admin_id: str, current_user = Depends(get_current_super_admin)):
    result = db.db.users.update_one(
        {"admin_id": admin_id},
        {"$set": {"verification_status": "rejected"}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Institute not found")
    return {"message": f"Institute {admin_id} has been rejected."}
