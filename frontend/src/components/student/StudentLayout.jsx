import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Home, BookOpen, DollarSign, Calendar, Award, Bell, LogOut, User } from 'lucide-react';

const StudentLayout = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userFullName') || 'Student';

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const menuItems = [
        { icon: <Home size={20} />, label: "Dashboard", path: "/student" },
        { icon: <User size={20} />, label: "Profile", path: "/student/profile" },
        { icon: <BookOpen size={20} />, label: "My Courses", path: "/student/courses" },
        { icon: <Award size={20} />, label: "Grades", path: "/student/grades" },
        { icon: <Calendar size={20} />, label: "Attendance", path: "/student/attendance" },
        { icon: <DollarSign size={20} />, label: "Fees", path: "/student/fees" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Top Header */}
            <header className="h-16 border-b border-white/5 bg-surface/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                    <span className="text-xl font-bold">EduPrime</span>
                </div>

                <div className="flex items-center gap-6">
                    <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-medium text-white">{userName}</p>
                            <p className="text-xs text-gray-500">{localStorage.getItem('userRegNo') || localStorage.getItem('userEmail') || 'Student'}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold border border-white/10">
                            {userName.charAt(0)}
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="bg-surface border-b border-white/5 px-6 overflow-x-auto">
                <div className="flex gap-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                                window.location.pathname === item.path
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-400 hover:text-white'
                            }`}
                        >
                            {item.icon}
                            <span className="hidden sm:inline">{item.label}</span>
                        </button>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="ml-auto flex items-center gap-2 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </nav>

            {/* Content Area */}
            <main className="flex-1 p-6 md:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default StudentLayout;
