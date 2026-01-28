import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, CreditCard, MessageSquare, PieChart, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".bento-item", { opacity: 0 }); // Ensure hidden initially
            
            gsap.fromTo(".bento-item", 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%", // Trigger slightly earlier
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Unified Ecosystem</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                        One Platform. <span className="text-gradient">Infinite Control.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Experience the most integrated school management system ever. Every module is built to work in perfect harmony.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[700px]">
                    {/* Big Card: Analytics */}
                    <div className="bento-item md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-10 hover:border-primary/50 transition-all duration-500">
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="p-4 rounded-2xl bg-primary/20 text-primary w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
                                <PieChart className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4 leading-tight">Powerful Real-time <br/>Analytics</h3>
                            <p className="text-gray-400 leading-relaxed mb-auto max-w-sm">
                                Track every KPI across your institution. From individual student grades to school-wide financial health.
                            </p>
                            
                            {/* Mini Chart Visualization */}
                            <div className="mt-10 flex items-end gap-2 h-24 w-full">
                                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-t-lg relative group/bar hover:bg-primary transition-colors" style={{ height: `${h}%`, backgroundColor: 'rgba(109, 40, 217, 0.2)' }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                            {h}% Growth
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">System Live</span>
                                </div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">Last sync: 2m ago</span>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-8 right-8 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <span className="text-[8px] font-black text-primary uppercase tracking-widest">Active nodes</span>
                        </div>
                    </div>

                    {/* Medium Card: Fees */}
                    <div className="bento-item md:col-span-2 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-10 hover:border-secondary/50 transition-all duration-500">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="max-w-[280px]">
                                <h3 className="text-2xl font-black text-white mb-3">Fee Automation</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                                    Recurring billing, integrated payment gateways, and instant receipts.
                                </p>
                                <div className="flex gap-2">
                                    <div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-black uppercase">₹1.2M Paid</div>
                                    <div className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-black uppercase">₹40K Pending</div>
                                </div>
                            </div>
                            <div className="p-5 rounded-3xl bg-secondary/20 text-secondary group-hover:rotate-12 transition-transform duration-500">
                                <CreditCard className="w-10 h-10" />
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Attendance */}
                    <div className="bento-item md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-8 hover:border-accent/50 transition-all duration-500">
                        <div className="relative z-10 text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Rapid Attendance</h3>
                            <div className="mt-2 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                                QR Integrated
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Communication */}
                    <div className="bento-item md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-500">
                        <div className="relative z-10 text-center flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Intelligent Comms</h3>
                            <div className="flex -space-x-3 mt-2">
                                {[1,2,3,4].map(i => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0f0f13] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:border-blue-500/50 transition-colors duration-500`}>
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
