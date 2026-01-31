import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import MagneticButton from '../components/ui/MagneticButton';
import API_BASE_URL from '../config';

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
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);

            const response = await fetch(`${API_BASE_URL}/auth/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || 'Login failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            
            // Deciding role from token/session or separate call
            // For now, we'll decode the JWT or use a dummy check if not available
            // In a real app, you'd fetch user profile here
            const base64Url = data.access_token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(window.atob(base64));
            
            localStorage.setItem('userRole', payload.role);
            localStorage.setItem('userEmail', payload.sub);
            localStorage.setItem('userFullName', payload.full_name);
            localStorage.setItem('verificationStatus', payload.verification_status);
            
            if (payload.role === 'admin') navigate('/admin');
            else if (payload.role === 'super_admin') navigate('/super-admin');
            else if (payload.role === 'student') navigate('/student');
            else if (payload.role === 'teacher') navigate('/teacher');
            
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">EduPrime</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Sign in to access your dashboard</p>
                </div>

                {/* Login Form */}
                <div className="bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email or USN or Admin ID */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email, USN or Admin ID</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. ADM-1234 or EP-2026-0001"
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
                        <MagneticButton
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-primary to-accent text-white font-black py-4 rounded-2xl shadow-2xl shadow-primary/30 uppercase tracking-[0.2em] text-sm"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </MagneticButton>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">Forgot password?</a>
                        <span className="mx-2">•</span>
                        <a href="/" className="hover:text-primary transition-colors">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
