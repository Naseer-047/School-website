import React, { useState } from 'react';
import { X, User, Mail, BookOpen, GraduationCap, Lock, Building2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import api from '../../api/axios';

const AddStudentModal = ({ isOpen, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        grade: '',
        parent_email: '',
        school_code: '' // Ideally fetched from context, but manual for now if needed
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Retrieve school_code from logged in admin if not manually entered (or force manual for flexibility)
            // For now, let's try to get it from local storage context if available, else require it.
            // Assuming the admin knows their school code.
            
            await api.post('/students/', formData);
            onSuccess();
            onClose();
        } catch (err) {
            setError(err.response?.data?.detail || 'Failed to add student');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-md flex flex-col max-h-[90vh] shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <GraduationCap className="text-primary" size={20} />
                        Add New Student
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    name="full_name"
                                    type="text" 
                                    required
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                    placeholder="e.g. Rahul Sharma"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Grade/Class</label>
                                <div className="relative">
                                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                    <input 
                                        name="grade"
                                        type="text" 
                                        required
                                        value={formData.grade}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                        placeholder="e.g. 10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">School Code</label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                    <input 
                                        name="school_code"
                                        type="text" 
                                        required
                                        value={formData.school_code}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                        placeholder="DSC-..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                    placeholder="student@school.com"
                                />
                            </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Parent Email (Optional)</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    name="parent_email"
                                    type="email" 
                                    value={formData.parent_email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                    placeholder="parent@gmail.com"
                                />
                            </div>
                        </div>

                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    name="password"
                                    type="password" 
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-primary/50 focus:outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <MagneticButton 
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            {loading ? 'Creating Profile...' : 'Create Student Profile'}
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudentModal;
