import React, { useState } from 'react';
import { X, User, Mail, BookOpen, GraduationCap, Lock, Briefcase } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import api from '../../api/axios';

const AddTeacherModal = ({ isOpen, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        password: '',
        subjects: '' 
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
            // Convert comma separated subjects to array/list if needed by backend, 
            // but for now Pydantic might expect list of strings.
            const payload = {
                ...formData,
                subjects: formData.subjects.split(',').map(s => s.trim()).filter(s => s)
            };
            
            await api.post('/teachers/', payload);
            onSuccess();
            onClose();
        } catch (err) {
            setError(err.response?.data?.detail || 'Failed to add teacher');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <Briefcase className="text-purple-500" size={20} />
                        Add New Teacher
                    </h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                                    placeholder="e.g. Dr. Vikram Seth"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Subjects (Comma Separated)</label>
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input 
                                    name="subjects"
                                    type="text" 
                                    required
                                    value={formData.subjects}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                                    placeholder="Math, Physics, Chemistry"
                                />
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
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                                    placeholder="teacher@school.com"
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
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <MagneticButton 
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-colors"
                        >
                            {loading ? 'Creating Profile...' : 'Create Teacher Profile'}
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeacherModal;
