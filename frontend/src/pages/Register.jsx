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
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        
        setLoading(true);
        setError('');

        try {
            // Mock institution registration
            localStorage.setItem('userRole', 'admin');
            localStorage.setItem('userName', formData.directorName);
            localStorage.setItem('schoolName', formData.schoolName);
            
            setSuccess(true);
            setTimeout(() => {
                navigate('/admin');
            }, 2000);
        } catch (err) {
            setError('Registration failed. Please try again.');
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
                    <h1 className="text-3xl font-black text-white">Institute Registered!</h1>
                    <p className="text-gray-400">Welcome to the future of education management. Redirecting you to your Admin Dashboard...</p>
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
                                    placeholder="e.g. Oakridge Global" 
                                />
                                <FormGroup 
                                    label="Director/Principal Name" 
                                    icon={<User size={18} />} 
                                    type="text" 
                                    value={formData.directorName}
                                    onChange={(e) => setFormData({...formData, directorName: e.target.value})}
                                    placeholder="Full Name" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup 
                                    label="Official Email" 
                                    icon={<Mail size={18} />} 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="contact@school.com" 
                                />
                                <FormGroup 
                                    label="Contact Number" 
                                    icon={<Phone size={18} />} 
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder="+1 (555) 000-0000" 
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup 
                                    label="Admin Password" 
                                    icon={<Lock size={18} />} 
                                    type="password" 
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    placeholder="••••••••" 
                                />
                                <FormGroup 
                                    label="Confirm Password" 
                                    icon={<Lock size={18} />} 
                                    type="password" 
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    placeholder="••••••••" 
                                />
                            </div>

                            {error && <p className="text-red-500 text-xs font-bold text-center mt-2">{error}</p>}

                            <MagneticButton 
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 py-4 bg-gradient-to-r from-primary to-accent text-white font-black rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                            >
                                {loading ? 'Registering Campus...' : 'Launch Your Campus'}
                                <ChevronRight size={18} />
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

export default Register;
