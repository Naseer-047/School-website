import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, FileText, Settings, LogOut, BookOpen, CreditCard, Lock } from 'lucide-react';

const Sidebar = () => {
    const navigate = useNavigate();
    const verificationStatus = localStorage.getItem('verificationStatus');
    const isPending = verificationStatus === 'pending';

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const menuItems = [
        { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/admin", lockable: false },
        { icon: <Users size={18} />, label: "Students", path: "/admin/students", lockable: true },
        { icon: <GraduationCap size={18} />, label: "Teachers", path: "/admin/teachers", lockable: true },
        { icon: <BookOpen size={18} />, label: "Academics", path: "/admin/academics", lockable: true },
        { icon: <CreditCard size={18} />, label: "Fees", path: "/admin/fees", lockable: true },
        { icon: <FileText size={18} />, label: "Reports", path: "/admin/reports", lockable: true },
        { icon: <Settings size={18} />, label: "Settings", path: "/admin/settings", lockable: false },
    ];

    return (
        <aside className="w-56 bg-surface border-r border-white/5 h-screen fixed left-0 top-0 flex flex-col z-40">
            {/* Logo */}
            <div className="h-14 flex items-center px-4 border-b border-white/5 gap-2">
                 <div className="w-7 h-7 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                 <span className="text-lg font-bold tracking-tight text-white italic">EduPrime</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-3 space-y-0.5">
                {menuItems.map((item) => {
                    const locked = isPending && item.lockable;
                    
                    if (locked) {
                        return (
                            <div 
                                key={item.path}
                                className="flex items-center justify-between px-3 py-2 rounded-lg opacity-40 cursor-not-allowed group border border-transparent"
                                title="Verification Required"
                            >
                                <div className="flex items-center gap-2.5">
                                    <span className="text-gray-500">{item.icon}</span>
                                    <span className="font-medium text-sm text-gray-500">{item.label}</span>
                                </div>
                                <Lock size={12} className="text-gray-600 group-hover:text-primary transition-colors" />
                            </div>
                        );
                    }

                    return (
                        <NavLink 
                            key={item.path} 
                            to={item.path}
                            className={({ isActive }) => 
                                `flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 border ${
                                    isActive 
                                    ? "bg-primary/10 text-primary border-primary/20" 
                                    : "text-gray-400 hover:bg-white/5 hover:text-white border-transparent"
                                }`
                            }
                            end={item.path === "/admin"}
                        >
                            {item.icon}
                            <span className="font-medium text-sm">{item.label}</span>
                        </NavLink>
                    );
                })}
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
