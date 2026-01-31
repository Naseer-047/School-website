// Full page component for adding a student with detailed information
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, BookOpen, GraduationCap, Lock, Building2, Calendar, MapPin, Phone, Droplet, Users } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import api from '../../api/axios';

const AddStudent = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        // Personal Details
        full_name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        blood_group: '',
        
        // Academic Details
        grade: '',
        section: '',
        school_code: '',
        reg_no: '', // Custom USN
        admission_date: new Date().toISOString().split('T')[0],

        // Address
        address: '',
        city: '',
        state: '',
        zip_code: '',

        // Parent Details
        parent_name: '',
        parent_email: '',
        parent_phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Filter out empty fields to ensure optional ones are handled correctly
            // Filter out empty fields to ensure optional ones are handled correctly
            const payload = {
                ...Object.fromEntries(
                    Object.entries(formData).filter(([_, v]) => v !== '')
                ),
                role: 'student'
            };
            
            await api.post('/students/', payload);
            navigate('/admin/students');
        } catch (err) {
            console.error("Submission Error:", err);
            const detail = err.response?.data?.detail;
            const errorMessage = Array.isArray(detail) 
                ? detail.map(d => `${d.loc.slice(-1)}: ${d.msg}`).join(', ')
                : (detail || 'Failed to create student profile');
            
            setError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
            window.scrollTo(0, 0);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">New Student Admission</h1>
                    <p className="text-gray-400">Complete the form below to enroll a new student.</p>
                </div>
                <button 
                    onClick={() => navigate('/admin/students')}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Cancel
                </button>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Personal Information */}
                <div className="bg-surface border border-white/5 rounded-2xl p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <User className="text-primary" size={20} />
                        Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Full Name *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="full_name" type="text" required value={formData.full_name} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="First Last" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Email Address *</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="email" type="email" required value={formData.email} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="student@school.com" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Date of Birth</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="dob" type="date" value={formData.dob} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none appearance-none">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Blood Group</label>
                            <div className="relative">
                                <Droplet className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <select name="blood_group" value={formData.blood_group} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none appearance-none">
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Password *</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="password" type="password" required value={formData.password} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="••••••••" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Academic Details */}
                <div className="bg-surface border border-white/5 rounded-2xl p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <GraduationCap className="text-primary" size={20} />
                        Academic Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Previous/Current Grade *</label>
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="grade" type="text" required value={formData.grade} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="e.g. 10th" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Section</label>
                             <div className="relative">
                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="section" type="text" value={formData.section} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="e.g. A" />
                             </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">School Code *</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="school_code" type="text" required value={formData.school_code} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="e.g. SCH-001" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">Custom USN / Reg No (Optional)</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                                <input name="reg_no" type="text" value={formData.reg_no} onChange={handleChange}
                                    className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-purple-500 focus:outline-none placeholder-purple-300/30" placeholder="Auto-generated if empty" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Admission Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="admission_date" type="date" value={formData.admission_date} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Parent & Address Info */}
                <div className="bg-surface border border-white/5 rounded-2xl p-6 md:p-8">
                    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <Users className="text-primary" size={20} />
                        Parent & Contact Details
                    </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Parent/Guardian Name</label>
                             <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="parent_name" type="text" value={formData.parent_name} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="Parent Name" />
                             </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Parent Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="parent_email" type="email" value={formData.parent_email} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="parent@example.com" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="parent_phone" type="tel" value={formData.parent_phone} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="+91..." />
                            </div>
                        </div>
                         <div className="space-y-1 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Full Address</label>
                             <div className="relative">
                                <MapPin className="absolute left-3 top-4 text-gray-500 w-4 h-4" />
                                <textarea name="address" rows="1" value={formData.address} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none min-h-[50px]" placeholder="Street Address, Area" />
                             </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">City</label>
                            <input name="city" type="text" value={formData.city} onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="City" />
                        </div>
                     </div>
                </div>

                <div className="flex justify-end pt-4 pb-12">
                    <MagneticButton 
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        {loading ? 'Registering Student...' : 'Complete Admission'}
                    </MagneticButton>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
