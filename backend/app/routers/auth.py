from datetime import timedelta, datetime
from fastapi import APIRouter, Depends, HTTPException, status, File, UploadFile, Form
from fastapi.security import OAuth2PasswordRequestForm
from app.core.security import create_access_token, verify_password, get_password_hash
from app.core.config import settings
from app.models.user import Token, UserCreate, UserInDB
from app.db.mongodb import db
from pydantic import EmailStr
import os
import shutil
import random
import string

import logging

router = APIRouter()
logger = logging.getLogger(__name__)

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

def generate_school_code(length=6):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

def generate_random_password(length=10):
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    return ''.join(random.choices(chars, k=length))

def generate_admin_id():
    return f"ADM-{random.randint(1000, 9999)}"

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    users_collection = db.db.users
    # Search by email, reg_no, or admin_id
    user = users_collection.find_one({
        "$or": [
            {"email": form_data.username},
            {"reg_no": form_data.username},
            {"admin_id": form_data.username}
        ]
    })
    
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["email"], "role": user["role"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/register-institute")
async def register_institute(
    email: str = Form(...), 
    full_name: str = Form(...),
    school_name: str = Form(...),
    phone: str = Form(...),
    document: UploadFile = File(...)
):
    logger.info(f"Register attempt for: {email}")
    try:
        users_collection = db.db.users
        
        # Check if email exists
        if users_collection.find_one({"email": email}):
            raise HTTPException(status_code=400, detail="Email already registered")
            
        # Save document
        file_extension = os.path.splitext(document.filename)[1]
        file_name = f"{email.replace('@', '_').replace('.', '_')}{file_extension}"
        file_path = os.path.join(UPLOAD_DIR, file_name)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(document.file, buffer)
            
        # Generate Credentials
        generated_password = generate_random_password()
        admin_id = generate_admin_id()
        
        while True:
            school_code = generate_school_code()
            if not users_collection.find_one({"school_code": school_code}):
                break
                
        hashed_password = get_password_hash(generated_password)
        
        user_dict = {
            "email": email,
            "full_name": full_name,
            "role": "admin",
            "school_name": school_name,
            "phone": phone,
            "school_code": school_code,
            "admin_id": admin_id,
            "hashed_password": hashed_password,
            "verification_status": "pending",
            "document_url": file_path,
            "is_active": True,
            "created_at": datetime.now()
        }
        
        users_collection.insert_one(user_dict)
        
        return {
            "message": "Institute registered successfully. Please save your credentials.",
            "credentials": {
                "school_code": school_code,
                "admin_id": admin_id,
                "password": generated_password
            }
        }
    except Exception as e:
        logger.error(f"Error in register_institute: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
