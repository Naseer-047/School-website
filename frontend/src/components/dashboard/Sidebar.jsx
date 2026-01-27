import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, FileText, Settings, LogOut, BookOpen, CreditCard } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin" },
        { icon: <Users size={20} />, label: "Students", path: "/admin/students" },
        { icon: <GraduationCap size={20} />, label: "Teachers", path: "/admin/teachers" },
        { icon: <BookOpen size={20} />, label: "Academics", path: "/admin/academics" },
        { icon: <CreditCard size={20} />, label: "Fees", path: "/admin/fees" },
        { icon: <FileText size={20} />, label: "Reports", path: "/admin/reports" },
        { icon: <Settings size={20} />, label: "Settings", path: "/admin/settings" },
    ];

    return (
        <aside className="w-64 bg-surface border-r border-white/5 h-screen fixed left-0 top-0 flex flex-col z-40">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b border-white/5 gap-3">
                 <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                 <span className="text-xl font-bold tracking-tight text-white">EduPrime</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path}
                        className={({ isActive }) => 
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                isActive 
                                ? "bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5" 
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

            {/* User Profile / Logout */}
            <div className="p-4 border-t border-white/5">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
