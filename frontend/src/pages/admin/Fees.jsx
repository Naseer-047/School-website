import React from 'react';
import { DollarSign, CreditCard, Activity, TrendingUp, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import MagneticButton from '../../components/ui/MagneticButton';

const feeStats = [
    { name: 'July', value: 450000 },
    { name: 'Aug', value: 520000 },
    { name: 'Sept', value: 480000 },
    { name: 'Oct', value: 610000 },
    { name: 'Nov', value: 550000 },
    { name: 'Dec', value: 670000 },
];

const AdminFees = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Fees & Revenue</h1>
                    <p className="text-gray-400">Track collections, manage fee structures, and handle financial operations.</p>
                </div>
                <div className="flex gap-3">
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                        <Download size={18} /> Export Report
                    </MagneticButton>
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                        Collect payment
                    </MagneticButton>
                </div>
            </div>

            {/* Financial Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Collection", value: "₹42,50,000", delta: "+12.5%", color: "text-green-500", icon: <DollarSign size={24} /> },
                    { label: "Outstanding Amount", value: "₹1,82,250", delta: "-2.4%", color: "text-orange-500", icon: <Activity size={24} /> },
                    { label: "Collection Rate", value: "94.2%", delta: "+1.2%", color: "text-blue-500", icon: <TrendingUp size={24} /> },
                    { label: "Online Payments", value: "82.5%", delta: "+5.8%", color: "text-purple-500", icon: <CreditCard size={24} /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-surface border border-white/5 p-6 rounded-2xl">
                         <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-bold ${stat.delta.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {stat.delta}
                            </span>
                         </div>
                         <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                         <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-surface border border-white/5 p-8 rounded-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-bold text-lg">Monthly Revenue Trends</h3>
                        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none">
                            <option>2024 Academic Year</option>
                            <option>2023 Academic Year</option>
                        </select>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={feeStats}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="name" stroke="#9ca3af" tick={{fontSize: 12}} />
                                <YAxis stroke="#9ca3af" tick={{fontSize: 12}} />
                                <Tooltip 
                                    cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
                                    contentStyle={{backgroundColor: '#111116', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}} 
                                />
                                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                                    {feeStats.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === feeStats.length - 1 ? '#8b5cf6' : 'rgba(139, 92, 246, 0.3)'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Actions & Filters */}
                <div className="space-y-6">
                    <div className="bg-surface border border-white/5 p-6 rounded-2xl h-full">
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                             <Filter className="text-primary" size={20} /> Advanced Filters
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">Category</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white transition-all focus:border-primary">
                                    <option>All Fee Types</option>
                                    <option>Tuition Fee</option>
                                    <option>Transportation</option>
                                    <option>Registration</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">Status</label>
                                <div className="space-y-2">
                                    {['Completely Paid', 'Partially Paid', 'Pending'].map((status, i) => (
                                        <label key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 hover:border-primary/50 rounded-xl cursor-pointer transition-all">
                                            <input type="checkbox" className="w-4 h-4 accent-primary" />
                                            <span className="text-sm text-gray-300">{status}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <MagneticButton className="w-full mt-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:opacity-90 transition-all uppercase tracking-widest text-xs">
                            Apply Analysis
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminFees;
