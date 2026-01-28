from app.db.mongodb import db
from app.core.security import get_password_hash
from app.models.user import UserRole

def seed_super_admin():
    # Db connection is lazy via property
    print("Connecting to DB...")
    
    email = "owner@eduprime.com"
    password = "admin" 
    
    # Check if exists
    existing = db.db.users.find_one({"email": email})
    if existing:
        print(f"Super Admin {email} already exists.")
        return

    hashed_password = get_password_hash(password)
    
    super_admin = {
        "email": email,
        "full_name": "Platform Owner",
        "hashed_password": hashed_password,
        "role": UserRole.SUPER_ADMIN,
        "verification_status": "active",
        "is_active": True,
        "admin_id": "GOD-MODE"
    }
    
    db.db.users.insert_one(super_admin)
    print(f"\nSUCCESS: Super Admin Created!")
    print(f"Email: {email}")
    print(f"Password: {password}")
    print(f"Login at /login and then go to /super-admin manually (or update login redirect).")

if __name__ == "__main__":
    seed_super_admin()
