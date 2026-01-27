import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FileText, Printer, Share2, ClipboardList, CheckCircle } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const enrollmentData = [
  { name: 'Class 9', value: 120, fill: '#8b5cf6' },
  { name: 'Class 10', value: 150, fill: '#ec4899' },
  { name: 'Class 11', value: 110, fill: '#3b82f6' },
  { name: 'Class 12', value: 100, fill: '#10b981' },
];

const Reports = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Reports & Analytics</h1>
                    <p className="text-gray-400">Generate comprehensive academic, attendance, and administrative reports.</p>
                </div>
                <div className="flex gap-3">
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                        <Share2 size={16} /> Share
                    </MagneticButton>
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                        <Printer size={16} /> Print
                    </MagneticButton>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Reports List */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs px-2 mb-4">Report Categories</h3>
                    {[
                        { icon: <ClipboardList size={18} />, label: "Academic results", desc: "Term-wise grades analysis" },
                        { icon: <ClipboardList size={18} />, label: "Attendance Summary", desc: "Daily & monthly patterns" },
                        { icon: <ClipboardList size={18} />, label: "Financial Accounts", desc: "Revenue & expense breakdown" },
                        { icon: <ClipboardList size={18} />, label: "Staff Performance", desc: "Teacher evaluations" },
                        { icon: <ClipboardList size={18} />, label: "Library usage", desc: "Book circulation stats" },
                    ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-2xl border transition-all cursor-pointer group ${i === 0 ? 'bg-primary/10 border-primary/30' : 'bg-surface border-white/5 hover:border-white/20'}`}>
                            <div className="flex items-center gap-3 mb-1">
                                <div className={`${i === 0 ? 'text-primary' : 'text-gray-500 group-hover:text-white'}`}>{item.icon}</div>
                                <p className={`font-bold text-sm ${i === 0 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{item.label}</p>
                            </div>
                            <p className="text-[10px] text-gray-500 ml-7">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Report Preview / Dashboard */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="bg-surface border border-white/5 p-8 rounded-3xl">
                        <div className="flex items-center justify-between mb-8">
                             <div>
                                <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">Enrollment Statistics</h3>
                                <p className="text-xs text-gray-500">Current academic year distribution across grades</p>
                             </div>
                             <div className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                                 <CheckCircle size={14} /> Live View
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={enrollmentData}
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {enrollmentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                            ))}
                                        </Pie>
                                        <Tooltip 
                                            contentStyle={{backgroundColor: '#111116', border: 'none', borderRadius: '12px', color: '#fff'}} 
                                        />
                                        <Legend verticalAlign="bottom" height={36}/>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">Quick Breakdown</h4>
                                {enrollmentData.map((grade, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full" style={{backgroundColor: grade.fill}}></div>
                                            <span className="text-sm font-medium text-white">{grade.name}</span>
                                        </div>
                                        <span className="font-bold text-white">{grade.value} Students</span>
                                    </div>
                                ))}
                                <div className="pt-4 flex justify-between items-center bg-primary/10 p-4 rounded-2xl border border-primary/20">
                                     <span className="text-sm font-black text-white uppercase tracking-tighter">Total Students</span>
                                     <span className="text-xl font-black text-primary underline decoration-primary underline-offset-4">480</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Template Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 rounded-2xl flex items-center justify-between group transition-all hover:-translate-y-1">
                             <div className="flex items-center gap-4">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Full Academic Report</h4>
                                    <p className="text-[10px] text-gray-500">A detailed PDF of all students grades</p>
                                </div>
                             </div>
                             <div className="text-gray-700 font-black text-xl italic uppercase">PDF</div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 rounded-2xl flex items-center justify-between group transition-all hover:-translate-y-1">
                             <div className="flex items-center gap-4">
                                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                                    <ClipboardList size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Attendance Analytics</h4>
                                    <p className="text-[10px] text-gray-500">Excel sheet with attendance data</p>
                                </div>
                             </div>
                             <div className="text-gray-700 font-black text-xl italic uppercase">XLS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
