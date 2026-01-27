import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, ShieldCheck, ChevronRight } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';

const Register = () => {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('student');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
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
            // Mock registration for demo
            localStorage.setItem('userRole', role);
            localStorage.setItem('userName', formData.fullName);
            
            // Redirect based on role
            if (role === 'admin') navigate('/admin');
            else if (role === 'student') navigate('/student');
            else if (role === 'teacher') navigate('/teacher');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-xl relative z-10">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white uppercase tracking-tighter">EduPrime</span>
                    </div>
                    <h1 className="text-3xl font-black text-white mb-2 italic">Get Started with EduPrime</h1>
                    <p className="text-gray-400">Join thousands of students and teachers today.</p>
                </div>

                <div className="bg-surface border border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden">
                    <div className="p-8">
                        {step === 1 ? (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <ShieldCheck className="text-primary" /> Select Your Role
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { id: 'student', label: 'Student', desc: 'Access courses & grades', icon: <GraduationCap size={24} /> },
                                        { id: 'teacher', label: 'Teacher', desc: 'Manage classes & marks', icon: <User size={24} /> },
                                        { id: 'admin', label: 'Admin', desc: 'School operations', icon: <ShieldCheck size={24} /> },
                                    ].map((r) => (
                                        <button
                                            key={r.id}
                                            onClick={() => setRole(r.id)}
                                            className={`p-6 rounded-2xl border transition-all text-left flex flex-col gap-3 ${
                                                role === r.id 
                                                ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20 scale-105' 
                                                : 'bg-white/5 border-white/10 hover:border-white/30'
                                            }`}
                                        >
                                            <div className={`${role === r.id ? 'text-primary' : 'text-gray-500'}`}>{r.icon}</div>
                                            <div>
                                                <p className={`font-bold text-sm ${role === r.id ? 'text-white' : 'text-gray-300'}`}>{r.label}</p>
                                                <p className="text-[10px] text-gray-500 leading-tight mt-1">{r.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <MagneticButton 
                                    onClick={() => setStep(2)}
                                    className="w-full mt-8 py-4 bg-primary text-white font-black rounded-xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group uppercase tracking-widest"
                                >
                                    Continue <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </MagneticButton>
                            </div>
                        ) : (
                            <form onSubmit={handleRegister} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="flex items-center justify-between mb-4">
                                     <h2 className="text-xl font-bold text-white">Create Account</h2>
                                     <button type="button" onClick={() => setStep(1)} className="text-xs text-primary font-bold hover:underline underline-offset-4">Change Role ({role})</button>
                                </div>
                                
                                <FormGroup 
                                    label="Full Name" 
                                    icon={<User size={18} />} 
                                    type="text" 
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                    placeholder="Enter your name" 
                                />
                                <FormGroup 
                                    label="Email Address" 
                                    icon={<Mail size={18} />} 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="you@example.com" 
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormGroup 
                                        label="Password" 
                                        icon={<Lock size={18} />} 
                                        type="password" 
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        placeholder="••••••••" 
                                    />
                                    <FormGroup 
                                        label="Confirm" 
                                        icon={<Lock size={18} />} 
                                        type="password" 
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                        placeholder="••••••••" 
                                    />
                                </div>

                                {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

                                <MagneticButton 
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-4 py-4 bg-gradient-to-r from-primary to-accent text-white font-black rounded-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 uppercase tracking-widest"
                                >
                                    {loading ? 'Processing...' : 'Complete Signup'}
                                </MagneticButton>
                            </form>
                        )}
                    </div>
                    
                    <div className="bg-white/5 p-6 border-t border-white/5 text-center">
                         <p className="text-sm text-gray-400">
                             Already have an account? <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4">Sign In</Link>
                         </p>
                    </div>
                </div>
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
