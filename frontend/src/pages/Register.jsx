import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, Building2, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';

const Register = () => {
    const [formData, setFormData] = useState({
        schoolName: '',
        directorName: '',
        email: '',
        phone: '',   
    });
    const [document, setDocument] = useState(null);
    const [credentials, setCredentials] = useState(null);
    const [loading, setLoading] = useState(false);     
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!document) {
            setError('Please upload verification proof');
            return;
        }
        
        setLoading(true);
        setError('');

        try {
            const data = new FormData();
            data.append('email', formData.email);
            data.append('full_name', formData.directorName);
            data.append('school_name', formData.schoolName);
            data.append('phone', formData.phone);
            data.append('document', document);

            const response = await fetch('/api/auth/register-institute', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Registration failed');
            }

            const result = await response.json();
            setCredentials(result.credentials);
            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden text-center">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="max-w-md relative z-10 space-y-6">
                    <div className="flex justify-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 animate-bounce">
                            <CheckCircle2 size={48} />
                        </div>
                    </div>
                    <h1 className="text-3xl font-black text-white">Application Submitted!</h1>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 text-left">
                        <p className="text-gray-400 text-sm mb-4">Your campus is being digitalized. Please **save these tracking keys**. Use the PIN to check your application status and set your master password after approval.</p>
                        
                        <div className="space-y-3">
                            <CredentialItem label="School Code" value={credentials?.school_code} />
                            <CredentialItem label="Admin ID" value={credentials?.admin_id} />
                            <CredentialItem label="6-Digit Tracking PIN" value={credentials?.tracking_pin} />
                        </div>

                        <div className="mt-6 p-3 bg-primary/10 border border-primary/20 rounded-xl">
                            <p className="text-[10px] text-primary uppercase tracking-widest font-bold text-center">
                                VERIFICATION STATUS: PENDING
                            </p>
                        </div>
                    </div>
                    <MagneticButton 
                        onClick={() => navigate('/login')}
                        className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                    >
                        Go to Login
                    </MagneticButton>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-2xl relative z-10">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white uppercase tracking-tighter">EduPrime</span>
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2 italic">Register Your Institute</h1>
                    <p className="text-gray-400">Join the elite network of modern schools and digitalize your campus.</p>
                </div>

                <div className="bg-surface border border-white/10 rounded-3xl p-2 shadow-2xl">
                    <div className="p-8">
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup 
                                    label="Institute/School Name" 
                                    icon={<Building2 size={18} />} 
                                    type="text" 
                                    value={formData.schoolName}
                                    onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                                    placeholder="e.g. Delhi Public School" 
                                />
                                <FormGroup 
                                    label="Director/Principal Name" 
                                    icon={<User size={18} />} 
                                    type="text" 
                                    value={formData.directorName}
                                    onChange={(e) => setFormData({...formData, directorName: e.target.value})}
                                    placeholder="e.g. Dr. Rajesh Sharma" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup 
                                    label="Official Email" 
                                    icon={<Mail size={18} />} 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="contact@school.in" 
                                />
                                <FormGroup 
                                    label="Contact Number" 
                                    icon={<Phone size={18} />} 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder="+91 98765 43210" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] block pl-1">Verification Document (PDF/Photo)</label>
                                <label className="relative group cursor-pointer block">
                                    <div className="w-full bg-white/5 border border-white/10 border-dashed hover:border-primary/50 rounded-xl px-4 py-8 text-center transition-all group-hover:bg-primary/5">
                                        <div className="flex flex-col items-center gap-2">
                                            <Building2 className={`w-8 h-8 ${document ? 'text-primary' : 'text-gray-500'}`} />
                                            <span className="text-sm text-gray-400">
                                                {document ? document.name : 'Click to upload school certificate or ID'}
                                            </span>
                                        </div>
                                    </div>
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        onChange={(e) => setDocument(e.target.files[0])}
                                        accept=".pdf,image/*"
                                    />
                                </label>
                            </div>

                            {error && <p className="text-red-500 text-xs font-bold text-center mt-2">{error}</p>}

                            <MagneticButton 
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 py-5 bg-gradient-to-r from-primary to-accent text-white font-black rounded-2xl shadow-2xl shadow-primary/40 uppercase tracking-[0.2em] text-sm"
                            >
                                {loading ? 'Registering Campus...' : 'Launch Your Campus'}
                                <ChevronRight size={20} />
                            </MagneticButton>
                        </form>
                    </div>
                    
                    <div className="bg-white/5 p-6 border-t border-white/5 text-center">
                         <p className="text-sm text-gray-400">
                             Already using EduPrime? <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4">Log in here</Link>
                         </p>
                    </div>
                </div>

                <p className="text-center text-gray-500 text-[10px] uppercase tracking-widest mt-8 font-bold">
                    By registering, you agree to our Terms of Excellence and Digital Privacy Policy
                </p>
            </div>
        </div>
    );
};

const FormGroup = ({ label, icon, type, placeholder, value, onChange }) => (
    <div className="space-y-2">
        <label className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] block pl-1">{label}</label>
        <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">
                {icon}
            </div>
            <input 
                type={type} 
                required
                value={value}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-sm text-white focus:outline-none focus:border-primary transition-all focus:ring-1 focus:ring-primary/20" 
                placeholder={placeholder}
            />
        </div>
    </div>
);

const CredentialItem = ({ label, value }) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{label}</p>
        <div className="flex items-center justify-between">
            <p className="text-xl font-black text-white tracking-widest">{value}</p>
        </div>
    </div>
);

export default Register;
