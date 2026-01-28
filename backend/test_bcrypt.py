import bcrypt
import sys

password = "test_password".encode('utf-8')
try:
    hashed = bcrypt.hashpw(password, bcrypt.gensalt())
    print(f"Hashed: {hashed}")
    
    if bcrypt.checkpw(password, hashed):
        print("Bcrypt Verification: SUCCESS")
    else:
        print("Bcrypt Verification: FAILED")
except Exception as e:
    print(f"Bcrypt Error: {str(e)}")
    sys.exit(1)
