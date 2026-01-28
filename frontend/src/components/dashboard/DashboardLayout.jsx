import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

const DashboardLayout = () => {
    const status = localStorage.getItem('verificationStatus');
    const fullName = localStorage.getItem('userFullName') || 'Administrator';
    const initials = fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            <Sidebar />
            
            <main className="flex-1 ml-56 flex flex-col">
                {/* Header */}
                <header className="h-14 border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-surface border border-white/5 rounded-full px-3 py-1.5 w-80">
                            <Search className="w-4 h-4 text-gray-400 mr-2" />
                            <input 
                                type="text" 
                                placeholder="Search anything..." 
                                className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder-gray-500"
                            />
                        </div>
                        {status === 'pending' && (
                            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full animate-pulse">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Verification Pending</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative cursor-pointer">
                            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-white">{fullName}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-tighter font-bold">{status === 'pending' ? 'Institute Applicant' : 'Super Administrator'}</p>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold border border-white/10 text-sm">
                                {initials}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-6 flex-1 overflow-x-hidden">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
