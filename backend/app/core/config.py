from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "School Management System"
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "school_system"
    SECRET_KEY: str = "your_secret_key_change_in_production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"
        extra = "ignore" # Ignore extra env vars

settings = Settings()
