from fastapi import FastAPI
from app.core.config import settings
from app.db.mongodb import db
from app.routers import auth, students, teachers
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title=settings.PROJECT_NAME, debug=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, verify this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_db_client():
    db.connect()

@app.on_event("shutdown")
def shutdown_db_client():
    db.close()

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(students.router, prefix="/api/students", tags=["students"])
app.include_router(teachers.router, prefix="/api/teachers", tags=["teachers"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the School Management System API"}
