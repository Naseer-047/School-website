import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 800));

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
                setError('Invalid credentials. Try: admin@school.in, student@school.in, or teacher@school.in');
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0d0d12] flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">EduPrime</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to access your dashboard</p>
                </div>

                {/* Login Form */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@school.in"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-6 text-center space-y-3">
                        <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                            Forgot password?
                        </a>
                        <div className="text-sm text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary hover:underline">
                                Register Institute
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Demo Credentials */}
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                    <p className="text-xs text-blue-400 font-semibold mb-2">Demo Credentials:</p>
                    <div className="text-xs text-gray-400 space-y-1">
                        <p>Admin: admin@school.in</p>
                        <p>Student: student@school.in</p>
                        <p>Teacher: teacher@school.in</p>
                        <p className="text-gray-500 italic mt-2">Password: any</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
