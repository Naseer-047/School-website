// Full page component for editing a student profile
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { User, Mail, BookOpen, GraduationCap, Lock, Building2, Calendar, MapPin, Phone, Droplet, Users, ArrowLeft } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import api from '../../api/axios';

const EditStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
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
        reg_no: '',
        admission_date: '',

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

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await api.get(`/students/${id}`);
                const data = response.data;
                
                // Format date for input field (YYYY-MM-DD)
                const formatDate = (dateString) => {
                    if (!dateString) return '';
                    return new Date(dateString).toISOString().split('T')[0];
                };

                setFormData({
                    full_name: data.full_name || '',
                    email: data.email || '',
                    password: '', // Don't pre-fill password
                    dob: formatDate(data.dob),
                    gender: data.gender || '',
                    blood_group: data.blood_group || '',
                    grade: data.grade || '',
                    section: data.section || '',
                    school_code: data.school_code || '',
                    reg_no: data.reg_no || '',
                    admission_date: formatDate(data.admission_date),
                    address: data.address || '',
                    city: data.city || '',
                    state: data.state || '',
                    zip_code: data.zip_code || '',
                    parent_name: data.parent_name || '',
                    parent_email: data.parent_email || '',
                    parent_phone: data.parent_phone || ''
                });
            } catch (err) {
                console.error("Failed to fetch student:", err);
                setError("Failed to load student details.");
            } finally {
                setFetching(false);
            }
        };

        fetchStudent();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
             // Create payload, removing password if it's empty
            const payload = { ...formData };
            if (!payload.password) delete payload.password;
            
            // Clean up empty fields
            Object.keys(payload).forEach(key => {
                if (payload[key] === '' || payload[key] === null) {
                    delete payload[key];
                }
            });

            await api.put(`/students/${id}`, payload);
            navigate('/admin/students');
        } catch (err) {
            console.error("Update Error:", err);
            const detail = err.response?.data?.detail;
            const errorMessage = Array.isArray(detail) 
                ? detail.map(d => `${d.loc.slice(-1)}: ${d.msg}`).join(', ')
                : (detail || 'Failed to update student profile');
            
            setError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
            window.scrollTo(0, 0);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="text-primary animate-pulse">Loading student details...</div>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Edit Student Profile</h1>
                    <p className="text-gray-400">Update the information for {formData.full_name || 'Student'}.</p>
                </div>
                <button 
                    onClick={() => navigate('/admin/students')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to List
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
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Email Address *</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="email" type="email" required value={formData.email} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
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
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Change Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="password" type="password" value={formData.password} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" placeholder="Leave blank to keep current" />
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
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Grade *</label>
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="grade" type="text" required value={formData.grade} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Section</label>
                             <div className="relative">
                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="section" type="text" value={formData.section} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                             </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">School Code</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="school_code" type="text" required value={formData.school_code} onChange={handleChange} disabled
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-400 cursor-not-allowed focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">USN / Reg No</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-4 h-4" />
                                <input name="reg_no" type="text" value={formData.reg_no} onChange={handleChange} disabled
                                    className="w-full bg-purple-500/5 border border-purple-500/20 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-400 cursor-not-allowed focus:outline-none" />
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
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                             </div>
                        </div>
                         <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Parent Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="parent_email" type="email" value={formData.parent_email} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                <input name="parent_phone" type="tel" value={formData.parent_phone} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                            </div>
                        </div>
                         <div className="space-y-1 md:col-span-2">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Full Address</label>
                             <div className="relative">
                                <MapPin className="absolute left-3 top-4 text-gray-500 w-4 h-4" />
                                <textarea name="address" rows="1" value={formData.address} onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none min-h-[50px]" />
                             </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">City</label>
                            <input name="city" type="text" value={formData.city} onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none" />
                        </div>
                     </div>
                </div>

                <div className="flex justify-end pt-4 pb-12">
                    <MagneticButton 
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        {loading ? 'Saving Changes...' : 'Save Changes'}
                    </MagneticButton>
                </div>
            </form>
        </div>
    );
};

export default EditStudent;
