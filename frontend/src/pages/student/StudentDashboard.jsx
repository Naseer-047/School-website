import React from 'react';
import { BookOpen, Calendar, DollarSign, Award, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const performanceData = [
    { month: 'Jan', score: 75 },
    { month: 'Feb', score: 82 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 88 },
    { month: 'May', score: 92 },
    { month: 'Jun', score: 85 },
];

const attendanceData = [
    { name: 'Present', value: 92, fill: '#10b981' },
    { name: 'Absent', value: 8, fill: '#ef4444' },
];

const StudentDashboard = () => {
    const studentData = {
        name: "John Doe",
        grade: "10th Grade",
        section: "A",
        rollNumber: "2024-STU-1234",
        currentGPA: "3.8",
        attendance: "92%",
        pendingFees: "$450",
        upcomingExams: 3,
    };

    const recentGrades = [
        { subject: "Mathematics", grade: "A", score: "92/100", color: "text-green-500" },
        { subject: "Physics", grade: "A-", score: "88/100", color: "text-green-400" },
        { subject: "Chemistry", grade: "B+", score: "85/100", color: "text-blue-500" },
        { subject: "English", grade: "A", score: "90/100", color: "text-green-500" },
    ];

    const upcomingClasses = [
        { subject: "Mathematics", time: "09:00 AM - 10:00 AM", teacher: "Dr. Robert Chen", room: "Room 201" },
        { subject: "Physics", time: "10:15 AM - 11:15 AM", teacher: "Sarah Williams", room: "Lab 3" },
        { subject: "Chemistry", time: "11:30 AM - 12:30 PM", teacher: "James Anderson", room: "Lab 2" },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {studentData.name}! 👋</h1>
                <p className="text-white/80">Here's what's happening with your studies today.</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{studentData.grade} - Section {studentData.section}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Roll No: {studentData.rollNumber}</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <Award className="w-6 h-6 text-green-500" />
                        </div>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Current GPA</p>
                    <h3 className="text-3xl font-bold text-white">{studentData.currentGPA}</h3>
                    <p className="text-xs text-green-500 mt-2">+0.2 from last semester</p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <Calendar className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Attendance</p>
                    <h3 className="text-3xl font-bold text-white">{studentData.attendance}</h3>
                    <p className="text-xs text-gray-500 mt-2">This semester</p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-500/10 rounded-lg">
                            <DollarSign className="w-6 h-6 text-orange-500" />
                        </div>
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Pending Fees</p>
                    <h3 className="text-3xl font-bold text-white">{studentData.pendingFees}</h3>
                    <p className="text-xs text-orange-500 mt-2">Due: Jan 31, 2024</p>
                </div>

                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg">
                            <BookOpen className="w-6 h-6 text-purple-500" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">Upcoming Exams</p>
                    <h3 className="text-3xl font-bold text-white">{studentData.upcomingExams}</h3>
                    <p className="text-xs text-gray-500 mt-2">Next week</p>
                </div>
            </div>

            {/* Charts & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Performance Chart */}
                <div className="lg:col-span-2 bg-surface border border-white/5 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-6">Academic Performance</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performanceData}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="month" stroke="#9ca3af" tick={{fontSize: 12}} />
                                <YAxis stroke="#9ca3af" tick={{fontSize: 12}} />
                                <Tooltip contentStyle={{backgroundColor: '#1f2937', border: 'none', borderRadius: '8px'}} />
                                <Area type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Grades */}
                <div className="bg-surface border border-white/5 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-6">Recent Grades</h3>
                    <div className="space-y-4">
                        {recentGrades.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                <div>
                                    <p className="font-medium text-white text-sm">{item.subject}</p>
                                    <p className="text-xs text-gray-500">{item.score}</p>
                                </div>
                                <span className={`text-xl font-bold ${item.color}`}>{item.grade}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-surface border border-white/5 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-6">Today's Schedule</h3>
                <div className="space-y-4">
                    {upcomingClasses.map((cls, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-white">{cls.subject}</h4>
                                <p className="text-sm text-gray-400">{cls.time}</p>
                            </div>
                            <div className="text-right hidden md:block">
                                <p className="text-sm text-gray-300">{cls.teacher}</p>
                                <p className="text-xs text-gray-500">{cls.room}</p>
                            </div>
                            <CheckCircle className="w-5 h-5 text-gray-600" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
