from fastapi import APIRouter, Depends, HTTPException
from typing import List, Dict, Any
from app.db.mongodb import db
from app.models.user import UserRole
import random

router = APIRouter()

@router.get("/stats", response_description="Get dashboard statistics")
async def get_dashboard_stats():
    users_collection = db.db.users
    
    # Real Counts
    total_students = users_collection.count_documents({"role": UserRole.STUDENT})
    total_teachers = users_collection.count_documents({"role": UserRole.TEACHER})
    
    # Simulated Data (to be replaced with real modules later)
    # Revenue simulation
    revenue = 124500 + random.randint(0, 5000)
    attendance_rate = round(94.0 + random.uniform(0, 4.0), 1)
    
    # Chart Data (Mocking a week's data)
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    chart_data = []
    for day in days:
        chart_data.append({
            "name": day,
            "income": random.randint(1500, 4500),
            "expense": random.randint(1000, 4000)
        })

    # Recent Activities (Mocking)
    recent_notices = [
        {
            "id": 1,
            "category": "Academic",
            "time": "2h ago",
            "title": "Mid-term exam schedule released",
            "description": "The schedule for the upcoming mid-term examinations has been finalized and published."
        },
        {
            "id": 2,
            "category": "System",
            "time": "5h ago",
            "title": "System Maintenance Scheduled",
            "description": "The system will undergo scheduled maintenance this Sunday from 2 AM to 4 AM."
        },
        {
            "id": 3,
            "category": "Finance",
            "time": "1d ago",
            "title": "Fee Payment Deadline Extended",
            "description": "The deadline for the second installment of tuition fees has been extended by 3 days."
        },
        {
            "id": 4,
            "category": "Sports",
            "time": "2d ago",
            "title": "Annual Sports Day Registration",
            "description": "Registration for annual sports day events is now open for all students."
        }
    ]

    return {
        "stats": {
            "students": {
                "value": total_students,
                "trend": "up",
                "trendValue": "+12.5%"
            },
            "teachers": {
                "value": total_teachers,
                "trend": "up",
                "trendValue": "+4.2%"
            },
            "revenue": {
                "value": f"₹{revenue:,.0f}",
                "trend": "up",
                "trendValue": "+5.2%"
            },
            "attendance": {
                "value": f"{attendance_rate}%",
                "trend": "down",
                "trendValue": "-0.4%"
            }
        },
        "chartData": chart_data,
        "recentNotices": recent_notices
    }
