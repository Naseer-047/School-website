import React, { useState, useEffect } from 'react';
import { Users, UserCheck, DollarSign, GraduationCap, TrendingUp, TrendingDown, MoreVertical, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import axios from 'axios';
import API_BASE_URL from '../../config';

const StatCard = ({ title, value, icon, trend, trendValue, color }) => (
    <div className="bg-surface border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
        <div className="flex justify-between items-start mb-3">
            <div>
                <p className="text-gray-400 text-xs mb-1">{title}</p>
                <h3 className="text-xl font-bold text-white">{value}</h3>
            </div>
            <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-500`}>
                {icon}
            </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
            {trend === 'up' ? (
                <div className="flex items-center text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">
                    <TrendingUp size={12} className="mr-1" /> {trendValue}
                </div>
            ) : (
                <div className="flex items-center text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">
                    <TrendingDown size={12} className="mr-1" /> {trendValue}
                </div>
            )}
            <span className="text-gray-500">vs last month</span>
        </div>
    </div>
);

const AdminDashboard = () => {
    const status = localStorage.getItem('verificationStatus');
    const email = localStorage.getItem('userEmail');
    
    // State for dashboard data
    const [stats, setStats] = useState(null);
    const [chartData, setChartData] = useState([]);
    const [recentNotices, setRecentNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            if (status === 'pending') {
                setLoading(false);
                return;
            }

            try {
                // Determine API base URL - adjusting for port if needed or using a configured instance
                // const API_URL = 'http://127.0.0.1:8000/api'; 
                
                const response = await axios.get(`${API_BASE_URL}/dashboard/stats`);
                const { stats, chartData, recentNotices } = response.data;
                
                setStats(stats);
                setChartData(chartData);
                setRecentNotices(recentNotices);
            } catch (err) {
                console.error("Failed to fetch dashboard data:", err);
                setError("Failed to load dashboard data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [status]);

    if (status === 'pending') {
        return (
            <div className="min-h-[80vh] flex items-center justify-center p-6 text-center">
                <div className="max-w-md space-y-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative w-32 h-32 bg-surface border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                            <GraduationCap size={64} className="text-primary" />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Verification in Progress</span>
                        </div>
                        <h1 className="text-4xl font-black text-white italic">Almost There!</h1>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your application for <span className="text-white font-bold">{email}</span> is currently being reviewed by our elite verification team. 
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-left">
                        <StatusStep 
                            title="Application Received" 
                            desc="Digital document vault secured" 
                            done 
                        />
                        <StatusStep 
                            title="Document Review" 
                            desc="Verifying institute credentials" 
                            active 
                        />
                        <StatusStep 
                            title="Campus Activation" 
                            desc="Get ready to launch your dashboard" 
                        />
                    </div>

                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        Check back soon. Once approved, you'll be prompted to set your Master Password.
                    </p>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <Loader2 size={48} className="text-primary animate-spin" />
                <p className="text-gray-400 text-sm">Loading dashboard analytics...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <AlertCircle size={48} className="text-red-500" />
                <h3 className="text-xl font-bold text-white">Something went wrong</h3>
                <p className="text-gray-400 text-sm">{error}</p>
                <button 
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white mb-1">Dashboard Overview</h1>
                <p className="text-sm text-gray-400">Welcome back, here's what's happening at your school today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                    title="Total Students" 
                    value={stats?.students?.value || "0"} 
                    icon={<Users size={20} />} 
                    trend={stats?.students?.trend || "up"} 
                    trendValue={stats?.students?.trendValue || "0%"} 
                    color="blue"
                />
                <StatCard 
                    title="Total Teachers" 
                    value={stats?.teachers?.value || "0"} 
                    icon={<GraduationCap size={20} />} 
                    trend={stats?.teachers?.trend || "up"} 
                    trendValue={stats?.teachers?.trendValue || "0%"} 
                    color="purple"
                />
                <StatCard 
                    title="Revenue" 
                    value={stats?.revenue?.value || "₹0"} 
                    icon={<DollarSign size={20} />} 
                    trend={stats?.revenue?.trend || "up"} 
                    trendValue={stats?.revenue?.trendValue || "0%"} 
                    color="green" 
                />
                 <StatCard 
                    title="Attendance" 
                    value={stats?.attendance?.value || "0%"} 
                    icon={<UserCheck size={20} />} 
                    trend={stats?.attendance?.trend || "up"} 
                    trendValue={stats?.attendance?.trendValue || "0%"} 
                    color="orange"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Main Activity Chart */}
                <div className="bg-surface border border-white/5 p-4 rounded-xl lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-base">Financial Overview</h3>
                        <button className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400">
                            <MoreVertical size={18} />
                        </button>
                    </div>
                    <div className="h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', fontSize: '12px'}} 
                                    labelStyle={{color: '#9ca3af'}}
                                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                />
                                <Bar dataKey="income" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expense" fill="#374151" radius={[4, 4, 0, 0]} />
                                <Legend wrapperStyle={{ fontSize: '12px' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity / Side Panel */}
                <div className="bg-surface border border-white/5 p-4 rounded-xl">
                    <h3 className="font-bold text-base mb-4">Recent Notices</h3>
                    <div className="space-y-3">
                        {recentNotices.length > 0 ? (
                            recentNotices.map((notice, i) => (
                                <div key={notice.id || i} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
                                    <div className="flex justify-between items-start mb-1.5">
                                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/20 text-primary">{notice.category}</span>
                                        <span className="text-[10px] text-gray-500">{notice.time}</span>
                                    </div>
                                    <h4 className="font-medium text-xs text-gray-200 group-hover:text-primary transition-colors">{notice.title}</h4>
                                    <p className="text-[10px] text-gray-500 mt-1 line-clamp-2">{notice.description}</p>
                                </div>
                            ))
                        ) : (
                             <div className="text-center py-8 text-gray-500 text-xs">No recent notices</div>
                        )}
                    </div>
                    <button className="w-full mt-4 py-2 rounded-lg border border-white/10 text-xs font-medium hover:bg-white/5 transition-colors">
                        View All Notices
                    </button>
                </div>

            </div>
        </div>
    );
};

const StatusStep = ({ title, desc, done, active }) => (
    <div className={`p-4 rounded-2xl border transition-all ${done ? 'bg-green-500/5 border-green-500/20' : active ? 'bg-primary/5 border-primary/30' : 'bg-white/5 border-white/10 opacity-50'}`}>
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${done ? 'bg-green-500 text-white' : active ? 'bg-primary text-white animate-pulse' : 'bg-white/10 text-gray-500'}`}>
                {done ? <CheckCircle2 size={20} /> : <div className="text-sm font-black">?</div>}
            </div>
            <div>
                <h4 className={`text-sm font-bold ${done ? 'text-green-500' : active ? 'text-primary' : 'text-gray-400'}`}>{title}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">{desc}</p>
            </div>
        </div>
    </div>
);

export default AdminDashboard;
