import React from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

const monthlyAttendance = [
    { month: "January", total: 22, present: 20, absent: 2, percentage: "90.9%" },
    { month: "February", total: 20, present: 18, absent: 2, percentage: "90.0%" },
    { month: "March", total: 23, present: 23, absent: 0, percentage: "100%" },
    { month: "April", total: 21, present: 19, absent: 2, percentage: "90.4%" },
    { month: "May", total: 22, present: 21, absent: 1, percentage: "95.5%" },
];

const Attendance = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Attendance</h1>
                <p className="text-gray-400">Track your daily presence and check your monthly attendance patterns.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { label: "Overall Presence", value: "92.5%", color: "text-green-500", icon: <CheckCircle2 size={24} /> },
                    { label: "Total Working Days", value: "108", color: "text-blue-500", icon: <CalendarIcon size={24} /> },
                    { label: "Total Leaves", value: "7 Days", color: "text-orange-500", icon: <AlertCircle size={24} /> },
                    { label: "Late Entries", value: "3 Times", color: "text-red-500", icon: <Clock size={24} /> },
                 ].map((stat, i) => (
                    <div key={i} className="bg-surface border border-white/5 p-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
                        </div>
                        <div className={`p-4 rounded-xl bg-white/5 ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </div>
                 ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Monthly Tracking */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-surface border border-white/5 p-6 rounded-2xl">
                         <h3 className="font-bold text-lg mb-6">Monthly Breakdown</h3>
                         <div className="space-y-6">
                            {monthlyAttendance.map((m, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-white font-bold">{m.month}</span>
                                        <span className="text-gray-400 font-medium">
                                            <span className="text-green-500 font-bold">{m.present}</span> / {m.total} Days ({m.percentage})
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                                        <div 
                                            className="h-full bg-green-500" 
                                            style={{ width: `${(m.present/m.total)*100}%` }}
                                        ></div>
                                        <div 
                                            className="h-full bg-red-500" 
                                            style={{ width: `${(m.absent/m.total)*100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>

                {/* Status Legend / Notes */}
                <div className="space-y-6">
                    <div className="bg-surface border border-white/5 p-6 rounded-2xl">
                        <h3 className="font-bold text-lg mb-6">Attendance Legend</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-green-500"></div>
                                <span className="text-sm text-gray-300">Present (School Hours)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-red-500"></div>
                                <span className="text-sm text-gray-300">Absent / Leave</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-4 h-4 rounded bg-orange-500"></div>
                                <span className="text-sm text-gray-300">Late Admission</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-xs text-gray-500 leading-relaxed italic">
                                * Attendance is updated by the class teacher at the beginning of each session. 
                                In case of any discrepancy, please contact the administrative office.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
