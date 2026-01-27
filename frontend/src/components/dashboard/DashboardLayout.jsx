import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex">
            <Sidebar />
            
            <main className="flex-1 ml-64 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-white/5 bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
                    <div className="flex items-center bg-surface border border-white/5 rounded-full px-4 py-2 w-96">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input 
                            type="text" 
                            placeholder="Search anything..." 
                            className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder-gray-500"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer">
                            <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-white">Admin User</p>
                                <p className="text-xs text-gray-500">Super Administrator</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold border border-white/10">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-8 flex-1 overflow-x-hidden">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
