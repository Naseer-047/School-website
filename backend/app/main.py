from fastapi import FastAPI
from app.core.config import settings
from app.db.mongodb import db
from app.routers import auth, students, teachers, super_admin, dashboard
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title=settings.PROJECT_NAME, debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, verify this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Uploads Mount
upload_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "uploads")
if not os.path.exists(upload_path):
    os.makedirs(upload_path)
app.mount("/uploads", StaticFiles(directory=upload_path), name="uploads")

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(students.router, prefix="/api/students", tags=["students"])
app.include_router(teachers.router, prefix="/api/teachers", tags=["teachers"])
app.include_router(super_admin.router, prefix="/api/super-admin", tags=["super_admin"])
app.include_router(dashboard.router, prefix="/api/dashboard", tags=["dashboard"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the School Management System API"}
