from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from enum import Enum
from datetime import datetime

class UserRole(str, Enum):
    SUPER_ADMIN = "super_admin"
    ADMIN = "admin"
    TEACHER = "teacher"
    STUDENT = "student"
    PARENT = "parent"

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
    role: Optional[UserRole] = None

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    is_active: bool = True
    role: UserRole
    school_code: Optional[str] = None
    admin_id: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    hashed_password: Optional[str] = None
    reg_no: Optional[str] = None
    verification_status: str = "active" # active, pending, rejected
    document_url: Optional[str] = None
    created_at: datetime = datetime.now()
    
class StudentCreate(UserCreate):
    school_code: str
    grade: str
    parent_email: Optional[EmailStr] = None

class TeacherCreate(UserCreate):
    subjects: List[str] = []
