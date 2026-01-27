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
    <div className="bg-surface border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-gray-400 text-sm mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-white">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500`}>
                {icon}
            </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
            {trend === 'up' ? (
                <div className="flex items-center text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                    <TrendingUp size={14} className="mr-1" /> {trendValue}
                </div>
            ) : (
                <div className="flex items-center text-red-500 bg-red-500/10 px-2 py-0.5 rounded">
                    <TrendingDown size={14} className="mr-1" /> {trendValue}
                </div>
            )}
            <span className="text-gray-500">vs last month</span>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-gray-400">Welcome back, here's what's happening at your school today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Students" 
                    value="2,543" 
                    icon={<Users size={24} />} 
                    trend="up" 
                    trendValue="+12%" 
                    color="blue"
                />
                <StatCard 
                    title="Total Teachers" 
                    value="128" 
                    icon={<GraduationCap size={24} />} 
                    trend="up" 
                    trendValue="+4%" 
                    color="purple"
                />
                <StatCard 
                    title="Revenue" 
                    value="₹14,25,000" 
                    icon={<DollarSign size={24} />} 
                    trend="up" 
                    trendValue="+8%" 
                    color="green" 
                />
                 <StatCard 
                    title="Attendance" 
                    value="94.2%" 
                    icon={<UserCheck size={24} />} 
                    trend="down" 
                    trendValue="-1.2%" 
                    color="orange"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Main Activity Chart */}
                <div className="bg-surface border border-white/5 p-6 rounded-2xl lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Financial Overview</h3>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#1f2937', border: 'none', borderRadius: '8px'}} 
                                    labelStyle={{color: '#9ca3af'}}
                                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                />
                                <Bar dataKey="income" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expense" fill="#374151" radius={[4, 4, 0, 0]} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity / Side Panel */}
                <div className="bg-surface border border-white/5 p-6 rounded-2xl">
                    <h3 className="font-bold text-lg mb-6">Recent Notices</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/20 text-primary">Academic</span>
                                    <span className="text-xs text-gray-500">2h ago</span>
                                </div>
                                <h4 className="font-medium text-sm text-gray-200 group-hover:text-primary transition-colors">Mid-term exam schedule released</h4>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">The schedule for the upcoming mid-term examinations has been finalized and published...</p>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 rounded-lg border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
                        View All Notices
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
