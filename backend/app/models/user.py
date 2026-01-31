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
    section: Optional[str] = None
    dob: Optional[datetime] = None
    gender: Optional[str] = None
    blood_group: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    zip_code: Optional[str] = None
    parent_name: Optional[str] = None
    parent_email: Optional[EmailStr] = None
    parent_phone: Optional[str] = None
    admission_date: Optional[datetime] = None
    reg_no: Optional[str] = None  # Custom USN preference

class TeacherCreate(UserCreate):
    subjects: List[str] = []
