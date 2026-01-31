import requests
from pymongo import MongoClient
import os

# Configuration
API_BASE_URL = "http://localhost:8000"
MONGO_URL = os.getenv("MONGODB_URL", "mongodb+srv://naseer:naseer047@cluster0.kl7w2.mongodb.net/school_db?retryWrites=true&w=majority&appName=Cluster0")

def verify_login():
    # Connect to DB to get a real student
    client = MongoClient(MONGO_URL)
    db = client.school_db
    student = db.users.find_one({"role": "student"})
    
    if not student:
        print("❌ No students found in database to test with.")
        return

    email = student['email']
    reg_no = student.get('reg_no')
    # Use a knwon password if possible, or we can just verify the user exists
    # Since we can't reverse hash, we will just simulate the query logic
    print(f"Testing Student: {student['full_name']}")
    print(f"Email: {email}")
    print(f"Reg No (USN): {reg_no}")

    # Test Query Logic directly
    print("\n--- Testing Query Logic ---")
    
    # query by email
    user_by_email = db.users.find_one({
        "$or": [
            {"email": email},
            {"reg_no": email},
            {"admin_id": email}
        ]
    })
    print(f"Find by Email ('{email}'): {'✅ Found' if user_by_email else '❌ Not Found'}")

    # query by reg_no
    if reg_no:
        user_by_reg_no = db.users.find_one({
            "$or": [
                {"email": reg_no},
                {"reg_no": reg_no},
                {"admin_id": reg_no}
            ]
        })
        print(f"Find by USN ('{reg_no}'): {'✅ Found' if user_by_reg_no else '❌ Not Found'}")
    else:
        print("⚠️ Student has no Reg No (USN)")

if __name__ == "__main__":
    verify_login()
