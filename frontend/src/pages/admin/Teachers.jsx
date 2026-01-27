import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Mail, BookOpen } from 'lucide-react';
import api from '../../api/axios';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data for demonstration
        setTimeout(() => {
            setTeachers([
                { id: 1, name: "Dr. Robert Chen", subjects: ["Mathematics", "Physics"], email: "robert.chen@school.com", phone: "+1 234 567 890", experience: "15 years" },
                { id: 2, name: "Sarah Williams", subjects: ["English", "Literature"], email: "sarah.w@school.com", phone: "+1 987 654 321", experience: "8 years" },
                { id: 3, name: "James Anderson", subjects: ["Chemistry", "Biology"], email: "james.a@school.com", phone: "+1 555 123 456", experience: "12 years" },
                { id: 4, name: "Emily Martinez", subjects: ["History", "Geography"], email: "emily.m@school.com", phone: "+1 444 777 888", experience: "6 years" },
                { id: 5, name: "Michael Brown", subjects: ["Computer Science"], email: "michael.b@school.com", phone: "+1 222 333 444", experience: "10 years" },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Teachers</h1>
                    <p className="text-gray-400">Manage teacher profiles, assignments, and schedules.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20">
                    <Plus size={20} />
                    <span className="font-medium">Add Teacher</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-surface border border-white/5 p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="Search teachers..." 
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors">
                        Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Teacher Name</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Subjects</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Contact</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Experience</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-gray-500">Loading teachers...</td>
                                </tr>
                            ) : (
                                teachers.map((teacher) => (
                                    <tr key={teacher.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-sm font-medium text-white border border-white/10">
                                                    {teacher.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white">{teacher.name}</p>
                                                    <p className="text-xs text-gray-500">{teacher.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-wrap gap-1">
                                                {teacher.subjects.map((subject, idx) => (
                                                    <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-400">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <Mail size={12} /> {teacher.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-300">
                                            {teacher.experience}
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                 {/* Pagination */}
                 <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing 1 to 5 of 5 entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
