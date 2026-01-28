import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, FileText, Settings, LogOut, BookOpen, CreditCard } from 'lucide-react';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const menuItems = [
        { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/admin" },
        { icon: <Users size={18} />, label: "Students", path: "/admin/students" },
        { icon: <GraduationCap size={18} />, label: "Teachers", path: "/admin/teachers" },
        { icon: <BookOpen size={18} />, label: "Academics", path: "/admin/academics" },
        { icon: <CreditCard size={18} />, label: "Fees", path: "/admin/fees" },
        { icon: <FileText size={18} />, label: "Reports", path: "/admin/reports" },
        { icon: <Settings size={18} />, label: "Settings", path: "/admin/settings" },
    ];

    return (
        <aside className="w-56 bg-surface border-r border-white/5 h-screen fixed left-0 top-0 flex flex-col z-40">
            {/* Logo */}
            <div className="h-14 flex items-center px-4 border-b border-white/5 gap-2">
                 <div className="w-7 h-7 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                 <span className="text-lg font-bold tracking-tight text-white">EduPrime</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-3 space-y-0.5">
                {menuItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path}
                        className={({ isActive }) => 
                            `flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 ${
                                isActive 
                                ? "bg-primary/10 text-primary border border-primary/20" 
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`
                        }
                        end={item.path === "/admin"}
                    >
                        {item.icon}
                        <span className="font-medium text-sm">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Logout */}
            <div className="p-3 border-t border-white/5">
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
                >
                    <LogOut size={18} />
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
