import React from 'react';
import { Users, UserCheck, DollarSign, GraduationCap, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Mon', income: 4000, expense: 2400 },
  { name: 'Tue', income: 3000, expense: 1398 },
  { name: 'Wed', income: 2000, expense: 9800 },
  { name: 'Thu', income: 2780, expense: 3908 },
  { name: 'Fri', income: 1890, expense: 4800 },
  { name: 'Sat', income: 2390, expense: 3800 },
  { name: 'Sun', income: 3490, expense: 4300 },
];

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
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white mb-1">Dashboard Overview</h1>
                <p className="text-sm text-gray-400">Welcome back, here's what's happening at your school today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                    title="Total Students" 
                    value="2,543" 
                    icon={<Users size={20} />} 
                    trend="up" 
                    trendValue="+12%" 
                    color="blue"
                />
                <StatCard 
                    title="Total Teachers" 
                    value="128" 
                    icon={<GraduationCap size={20} />} 
                    trend="up" 
                    trendValue="+4%" 
                    color="purple"
                />
                <StatCard 
                    title="Revenue" 
                    value="₹14,25,000" 
                    icon={<DollarSign size={20} />} 
                    trend="up" 
                    trendValue="+8%" 
                    color="green" 
                />
                 <StatCard 
                    title="Attendance" 
                    value="94.2%" 
                    icon={<UserCheck size={20} />} 
                    trend="down" 
                    trendValue="-1.2%" 
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
                            <BarChart data={data}>
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
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-1.5">
                                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/20 text-primary">Academic</span>
                                    <span className="text-[10px] text-gray-500">2h ago</span>
                                </div>
                                <h4 className="font-medium text-xs text-gray-200 group-hover:text-primary transition-colors">Mid-term exam schedule released</h4>
                                <p className="text-[10px] text-gray-500 mt-1 line-clamp-2">The schedule for the upcoming mid-term examinations has been finalized and published...</p>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-2 rounded-lg border border-white/10 text-xs font-medium hover:bg-white/5 transition-colors">
                        View All Notices
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
