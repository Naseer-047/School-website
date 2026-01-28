import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, BookOpen, GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Ecosystem = () => {
    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const centerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Constant Orbit Animation
            gsap.to(".orbit-ring", {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".counter-rotate", {
                rotation: -360,
                duration: 60,
                repeat: -1,
                ease: "none"
            });

            // Entry Animation
            gsap.from(centerRef.current, {
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });

            gsap.from(".planet", {
                scale: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const planets = [
        { icon: <GraduationCap className="w-6 h-6" />, label: "Students", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", angle: 0 },
        { icon: <User className="w-6 h-6" />, label: "Teachers", color: "text-primary", bg: "bg-primary/10", border: "border-primary/20", angle: 90 },
        { icon: <Users className="w-6 h-6" />, label: "Parents", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20", angle: 180 },
        { icon: <BookOpen className="w-6 h-6" />, label: "Admins", color: "text-accent", bg: "bg-accent/10", border: "border-accent/20", angle: 270 },
    ];

    return (
        <section ref={containerRef} className="py-32 bg-[#0a0a0f] relative overflow-hidden min-h-[800px] flex items-center justify-center">
             {/* Background Gradients */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-4xl aspect-square flex items-center justify-center">
                
                {/* Orbit Rings */}
                <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"></div>
                <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full border-dashed animate-[spin_120s_linear_infinite]"></div>

                {/* Central Hub */}
                <div ref={centerRef} className="relative z-20 w-48 h-48 rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-2xl shadow-primary/20 flex flex-col items-center justify-center z-10 group cursor-pointer hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] animate-pulse"></div>
                    <span className="text-4xl font-black text-white tracking-tighter mb-1">EDU</span>
                    <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase">Prime</span>
                </div>

                {/* Orbiting Planets Container */}
                <div className="orbit-ring absolute w-[600px] h-[600px] rounded-full pointer-events-none">
                    {planets.map((planet, index) => (
                        <div 
                            key={index}
                            className="planet absolute w-24 h-24 -ml-12 -mt-12 rounded-2xl backdrop-blur-md border flex flex-col items-center justify-center shadow-lg transition-all duration-300 pointer-events-auto cursor-pointer group hover:scale-125 hover:z-50"
                            style={{ 
                                left: `${50 + 50 * Math.cos((planet.angle * Math.PI) / 180)}%`, 
                                top: `${50 + 50 * Math.sin((planet.angle * Math.PI) / 180)}%`,
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                borderColor: 'rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div className="counter-rotate flex flex-col items-center justify-center w-full h-full p-2">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors duration-300 ${planet.bg} ${planet.color} group-hover:bg-white group-hover:text-black`}>
                                    {planet.icon}
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">
                                    {planet.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Connector Lines (Visual Only) */}
                <div className="absolute inset-0 pointer-events-none">
                     <svg className="w-full h-full opacity-20">
                        <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="url(#gradient-line)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="url(#gradient-line)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#gradient-line)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#gradient-line)" strokeWidth="1" />
                        <defs>
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6d28d9" stopOpacity="0" />
                                <stop offset="50%" stopColor="#6d28d9" stopOpacity="1" />
                                <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                     </svg>
                </div>

                {/* Text Content */}
                <div className="absolute top-[10%] left-0 w-full text-center pointer-events-none md:top-[85%]">
                     <h3 className="text-3xl font-bold text-white mb-2">The Connected Ecosystem</h3>
                     <p className="text-gray-400 max-w-md mx-auto">Seamlessly bridging the gap between every stakeholder in education.</p>
                </div>

            </div>
        </section>
    );
};

export default Ecosystem;
