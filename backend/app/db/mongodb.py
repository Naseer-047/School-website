from pymongo import MongoClient
from app.core.config import settings

class MongoDB:
    client: MongoClient = None
    _db = None

    def connect(self):
        if self.client is None:
            try:
                self.client = MongoClient(settings.MONGODB_URL, serverSelectionTimeoutMS=5000)
                # Test connection
                self.client.admin.command('ismaster')
                self._db = self.client[settings.DATABASE_NAME]
                print("Connected to MongoDB Atlas")
            except Exception as e:
                print(f"MongoDB Connection Error: {str(e)}")
                raise

    @property
    def db(self):
        if self._db is None:
            self.connect()
        return self._db

    def close(self):
        if self.client:
            self.client.close()
            self.client = None
            self._db = None
            print("Closed MongoDB connection")

db = MongoDB()
