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
            gsap.from(".bento-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                }
            });
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

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {/* Big Card: Analytics */}
                    <div className="bento-item md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-10 hover:border-primary/50 transition-all duration-500">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="p-4 rounded-2xl bg-primary/20 text-primary w-fit mb-8 animate-pulse">
                                <PieChart className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4">Powerful Real-time Analytics</h3>
                            <p className="text-gray-400 leading-relaxed mb-auto max-w-sm">
                                Track every KPI across your institution. From individual student grades to school-wide financial health, get the data you need in seconds.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-primary rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">75% Load</span>
                            </div>
                        </div>
                        {/* Background Deco */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"></div>
                    </div>

                    {/* Medium Card: Fees */}
                    <div className="bento-item md:col-span-2 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-10 hover:border-secondary/50 transition-all duration-500">
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="max-w-[200px]">
                                <h3 className="text-2xl font-black text-white mb-3">Automated Fee Engine</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                    Recurring billing, integrated payment gateways, and instant receipts.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-secondary/20 text-secondary">
                                <CreditCard className="w-8 h-8" />
                            </div>
                        </div>
                    </div>

                    {/* Small Card: Attendance */}
                    <div className="bento-item md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-8 hover:border-accent/50 transition-all duration-500">
                        <div className="relative z-10 text-center flex flex-col items-center">
                            <Calendar className="w-8 h-8 text-accent mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Attendance</h3>
                            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest italic animate-pulse">Live Tracking</p>
                        </div>
                    </div>

                    {/* Small Card: Communication */}
                    <div className="bento-item md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white/[0.03] border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-500">
                        <div className="relative z-10 text-center flex flex-col items-center">
                            <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Messaging</h3>
                            <div className="flex -space-x-2 mt-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full border border-background bg-gray-700"></div>
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
