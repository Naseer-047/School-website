from pymongo import MongoClient
from app.core.config import settings

class MongoDB:
    client: MongoClient = None
    db = None

    def connect(self):
        self.client = MongoClient(settings.MONGODB_URL)
        self.db = self.client[settings.DATABASE_NAME]
        print("Connected to MongoDB")

    def close(self):
        if self.client:
            self.client.close()
            print("Closed MongoDB connection")

# Create a singleton instance
db = MongoDB()
