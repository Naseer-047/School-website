from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.core.security import create_access_token, verify_password, get_password_hash
from app.core.config import settings
from app.models.user import Token, UserCreate, UserInDB
from app.db.mongodb import db

import random
import string

router = APIRouter()

def generate_school_code(length=6):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    users_collection = db.db.users
    # Search by email or reg_no
    user = users_collection.find_one({
        "$or": [
            {"email": form_data.username},
            {"reg_no": form_data.username}
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

@router.post("/register")
async def register_user(user: UserCreate):
    users_collection = db.db.users
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    hashed_password = get_password_hash(user.password)
    user_dict = user.dict()
    
    # Generate unique school code for admins (institutes)
    if user.role == "admin":
        while True:
            code = generate_school_code()
            if not users_collection.find_one({"school_code": code}):
                user_dict["school_code"] = code
                break
                
    user_in_db = UserInDB(**user_dict, hashed_password=hashed_password)
    users_collection.insert_one(user_in_db.dict())
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email, "role": user.role}, expires_delta=access_token_expires
    )
    
    response = {"access_token": access_token, "token_type": "bearer"}
    if user.role == "admin":
        response["school_code"] = user_dict["school_code"]
        
    return response
