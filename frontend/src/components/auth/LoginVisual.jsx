import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Shield, Globe, Zap, Users, BarChart3 } from 'lucide-react';

const LoginVisual = () => {
    const containerRef = useRef(null);
    const orbitRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for orbit items
            gsap.to(".orbit-item", {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.2,
                    from: "random"
                }
            });

            // Rotate the entire orbit container slowly
            gsap.to(orbitRef.current, {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none"
            });

            // Pulse effect for the central core
            gsap.to(".core-glow", {
                scale: 1.2,
                opacity: 0.4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20" 
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }}>
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            {/* Central Visual System */}
            <div className="relative z-10 w-[600px] h-[600px] flex items-center justify-center">
                
                {/* Orbital Ring 1 (Large) */}
                <div ref={orbitRef} className="absolute inset-0 border border-white/5 rounded-full">
                    {/* Orbit Items */}
                    <div className="orbit-item absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d12] border border-white/10 p-3 rounded-xl shadow-2xl shadow-primary/20 backdrop-blur-md">
                        <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="orbit-item absolute bottom-1/4 right-[10%] bg-[#0d0d12] border border-white/10 p-3 rounded-xl shadow-2xl shadow-secondary/20 backdrop-blur-md">
                        <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="orbit-item absolute bottom-1/4 left-[10%] bg-[#0d0d12] border border-white/10 p-3 rounded-xl shadow-2xl shadow-accent/20 backdrop-blur-md">
                        <Users className="w-6 h-6 text-pink-400" />
                    </div>
                </div>

                {/* Orbital Ring 2 (Medium) */}
                <div className="absolute inset-[15%] border border-white/5 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]">
                     <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]"></div>
                </div>

                {/* Central Core */}
                <div className="relative">
                    <div className="core-glow absolute inset-[-20px] bg-primary/30 rounded-full blur-xl"></div>
                    <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                        <Zap className="w-12 h-12 text-white fill-white animate-pulse" />
                    </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="orbit-item absolute top-[20%] right-[10%] bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl max-w-[150px]">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-secondary" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Growth</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-secondary"></div>
                    </div>
                </div>

                <div className="orbit-item absolute bottom-[20%] left-[10%] bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl max-w-[150px]">
                    <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Students</span>
                    </div>
                    <div className="text-xl font-bold text-white">5,000+</div>
                </div>

            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-12 text-center z-20">
                <p className="text-gray-500 text-xs font-mono uppercase tracking-[0.3em]">System Operational</p>
                <div className="flex gap-1 justify-center mt-2">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-75"></div>
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-150"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginVisual;
