import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, TrendingUp, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const statsRef = useRef([]);

    const stats = [
        { label: "Schools Transformed", value: 500, suffix: "+", icon: <Award className="w-6 h-6" /> },
        { label: "Active Students", value: 2, suffix: "M+", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Admin Hours Saved", value: 45, suffix: "%", icon: <Zap className="w-6 h-6" /> },
        { label: "Data Security", value: 100, suffix: "%", icon: <Shield className="w-6 h-6" /> }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards entry
            gsap.from(".stat-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Count animations
            statsRef.current.forEach((el, i) => {
                const targetValue = stats[i].value;
                const obj = { val: 0 };
                
                gsap.to(obj, {
                    val: targetValue,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    onUpdate: () => {
                        el.innerText = Math.floor(obj.val);
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0f] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Measurable Impact</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                            The Numbers Speak for <span className="text-gradient">Themselves.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            We don't just provide software; we provide a platform for institutional transformation. 
                            From small private academies up to massive state educational boards, we're redefining the standard of excellence.
                        </p>
                        
                        <div className="flex items-center gap-6">
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-primary/50 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-white uppercase tracking-wider">CBSE Verified</span>
                            </div>
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-secondary/50 transition-colors">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">ISO 27001</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats Grid */}
                    <div ref={containerRef} className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="stat-card p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 group"
                            >
                                <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span 
                                        ref={el => statsRef.current[index] = el}
                                        className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                                    >
                                        0
                                    </span>
                                    <span className="text-3xl font-black text-primary">{stat.suffix}</span>
                                </div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
