import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';
import LoginVisual from '../components/auth/LoginVisual';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(formRef.current.children, 
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Mock authentication logic preserved
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

            if (email.includes('admin')) {
                localStorage.setItem('userRole', 'admin');
                navigate('/admin');
            } else if (email.includes('student')) {
                localStorage.setItem('userRole', 'student');
                localStorage.setItem('userName', 'Aryan Sharma'); 
                navigate('/student');
            } else if (email.includes('teacher')) {
                localStorage.setItem('userRole', 'teacher');
                navigate('/teacher');
            } else {
                setError('Invalid credentials. Try: admin@school.in');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0d0d12] flex overflow-hidden">
            
            {/* LEFT SIDE: Login Form (40%) */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-16 relative z-10">
                
                {/* Mobile Background Elements */}
                <div className="lg:hidden absolute top-[-20%] right-[-20%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>

                <div ref={formRef} className="max-w-md w-full mx-auto space-y-8">
                    {/* Header */}
                    <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">EduPrime</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Welcome Back</h1>
                        <p className="text-gray-400 text-lg">Enter your details to access your dashboard.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@school.in"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Forgot password?</a>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center font-medium animate-pulse">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <MagneticButton
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-xl shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="animate-pulse">Verifying...</span>
                            ) : (
                                <>Sign In <ArrowRight className="w-4 h-4" /></>
                            )}
                        </MagneticButton>
                    </form>

                    {/* Footer */}
                    <div className="text-center">
                        <p className="text-gray-500 text-sm">
                            Don't have an account? <Link to="/register" className="text-white hover:underline underline-offset-4 font-bold transition-colors">Register Institute</Link>
                        </p>
                    </div>

                    {/* Demo Warning */}
                    <div className="border-t border-white/10 pt-6 mt-8">
                         <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center mb-4">Demo Access</p>
                         <div className="flex justify-center gap-4 text-xs text-gray-400 font-mono">
                            <span className="bg-white/5 px-2 py-1 rounded">admin@school.in</span>
                            <span className="bg-white/5 px-2 py-1 rounded">student@school.in</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Visual/3D (60%) - Hidden on Mobile */}
            <div className="hidden lg:block w-[60%] relative">
                <LoginVisual />
            </div>

        </div>
    );
};

export default Login;
