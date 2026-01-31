import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';
import api from '../../api/axios';
import AddStudentModal from '../../components/modals/AddStudentModal';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await api.get('/students/');
            setStudents(response.data);
        } catch (error) {
            console.error("Failed to fetch students:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Students</h1>
                    <p className="text-gray-400">Manage student profiles, enrollments, and academic records.</p>
                </div>
                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20"
                >
                    <Plus size={20} />
                    <span className="font-medium">Add Student</span>
                </button>
            </div>

            <AddStudentModal 
                isOpen={isAddModalOpen} 
                onClose={() => setIsAddModalOpen(false)} 
                onSuccess={fetchStudents}
            />

            {/* Filters & Search */}
            <div className="bg-surface border border-white/5 p-4 rounded-xl mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="Search students..." 
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
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Student Name</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Class</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Contact</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">Parent Name</th>
                                <th className="p-4 text-xs font-semibold uppercase text-gray-400 tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-gray-500">Loading students...</td>
                                </tr>
                            ) : students.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-gray-500">No students found. Click "Add Student" to create one.</td>
                                </tr>
                            ) : (
                                students.map((student) => (
                                    <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-medium text-white border border-white/10">
                                                    {student.full_name?.charAt(0) || '?'}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white">{student.full_name}</p>
                                                    <p className="text-xs text-gray-500">{student.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                                {student.grade || 'N/A'} - {student.section || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-400">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <Mail size={12} /> {student.email}
                                                </div>
                                                {student.phone && (
                                                     <div className="flex items-center gap-2">
                                                        <Phone size={12} /> {student.phone}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-300">
                                            {student.parent_email || 'N/A'}
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
                 {/* Pagination Mockup */}
                 <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-500">
                    <span>Showing {students.length} entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 rounded bg-white/5 border border-white/5 hover:bg-white/10">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;
