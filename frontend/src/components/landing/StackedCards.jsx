import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutDashboard, Users, GraduationCap, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
    const containerRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    const cards = [
        {
            title: "Admin Control Center",
            description: "Direct the entire institution from a single command post. Monitoring financials, staff performance, and global settings has never been this intuitive.",
            icon: <ShieldCheck className="w-12 h-12 text-white" />,
            color: "from-purple-600 to-indigo-900",
            buttonText: "Explore Admin Panel"
        },
        {
            title: "Teacher Workspace",
            description: "Empower educators with digital tools for grading, attendance, and lesson planning. Less paperwork, more teaching.",
            icon: <Users className="w-12 h-12 text-white" />,
            color: "from-emerald-500 to-teal-900",
            buttonText: "See Teacher Tools"
        },
        {
            title: "Student Portal",
            description: "A gamified learning experience where students track progress, submit assignments, and access resources anywhere.",
            icon: <GraduationCap className="w-12 h-12 text-white" />,
            color: "from-blue-500 to-cyan-900",
            buttonText: "View Student Dashboard"
        },
        {
            title: "Parent Connect",
            description: "Real-time updates on child's attendance, grades, and school events. Bridging the gap between home and school.",
            icon: <LayoutDashboard className="w-12 h-12 text-white" />,
            color: "from-rose-500 to-pink-900",
            buttonText: "Parent Features"
        }
    ];

    useEffect(() => {
        const mm = gsap.matchMedia();
        const wrapper = cardsWrapperRef.current;
        const cardElements = gsap.utils.toArray('.stacked-card');

        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${cards.length * 100}%`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                }
            });

            cardElements.forEach((card, index) => {
                if (index > 0) {
                    gsap.set(card, { y: window.innerHeight }); // Start below viewport
                    
                    tl.to(card, {
                        y: 0, // Move to top (stacking)
                        duration: 1,
                        ease: "none" // Linear styling for smooth stacking
                    });
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-background relative">
            <div ref={cardsWrapperRef} className="h-screen w-full flex items-center justify-center overflow-hidden sticky top-0">
                
                {/* Introduction Text (Fades out) */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 hidden md:block">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Workflow</span>
                    <h2 className="text-2xl font-bold text-white mt-2">A Seamless Experience</h2>
                </div>

                <div className="relative w-full max-w-5xl h-[80vh] px-6">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`stacked-card absolute top-0 left-0 w-full h-full rounded-[40px] p-8 md:p-16 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br ${card.color}`}
                            style={{ zIndex: index + 1 }} // Ensure proper stacking order
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            {/* Card Header */}
                            <div className="relative z-10">
                                <div className="bg-white/20 w-fit p-4 rounded-2xl mb-8 backdrop-blur-md">
                                    {card.icon}
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
                                    {card.title}
                                </h3>
                                <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
                                    {card.description}
                                </p>
                            </div>

                            {/* Card Footer */}
                            <div className="relative z-10 flex items-center justify-between mt-auto pt-10 border-t border-white/20">
                                <span className="text-6xl md:text-9xl font-black text-white/10 select-none">
                                    0{index + 1}
                                </span>
                                <button className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Spacer for mobile to allow natural scrolling if pinning is disabled */}
            <div className="md:hidden flex flex-col gap-6 px-6 py-20">
                 {cards.map((card, index) => (
                    <div key={index} className={`rounded-[32px] p-8 bg-gradient-to-br ${card.color} border border-white/10`}>
                        <div className="bg-white/20 w-fit p-3 rounded-xl mb-4 backdrop-blur-md">
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                         <p className="text-sm text-white/80 mb-6">{card.description}</p>
                         <button className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider w-full">
                            {card.buttonText}
                        </button>
                    </div>
                 ))}
            </div>
        </section>
    );
};

export default StackedCards;
