from pymongo import MongoClient
import sys
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("MONGODB_URL")
print(f"Testing connection to: {url}")

try:
    client = MongoClient(url, serverSelectionTimeoutMS=5000)
    # The ismaster command is cheap and does not require auth.
    client.admin.command('ismaster')
    print("MongoDB Connection: SUCCESS")
except Exception as e:
    print(f"MongoDB Connection: FAILED - {str(e)}")
    sys.exit(1)
