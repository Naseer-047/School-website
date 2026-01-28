import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutDashboard, Users, GraduationCap, ShieldCheck } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
    const containerRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    const cards = [
        {
            title: "Admin Control Center",
            description: "Direct the entire institution from a single command post. Monitoring financials, staff performance, and global settings has never been this intuitive.",
            icon: <ShieldCheck className="w-12 h-12 text-primary" />,
            buttonText: "Explore Admin Panel"
        },
        {
            title: "Teacher Workspace",
            description: "Empower educators with digital tools for grading, attendance, and lesson planning. Less paperwork, more teaching.",
            icon: <Users className="w-12 h-12 text-secondary" />,
            buttonText: "See Teacher Tools"
        },
        {
            title: "Student Portal",
            description: "A gamified learning experience where students track progress, submit assignments, and access resources anywhere.",
            icon: <GraduationCap className="w-12 h-12 text-accent" />,
            buttonText: "View Student Dashboard"
        },
        {
            title: "Parent Connect",
            description: "Real-time updates on child's attendance, grades, and school events. Bridging the gap between home and school.",
            icon: <LayoutDashboard className="w-12 h-12 text-pink-500" />,
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
                        y: 0, 
                        duration: 1,
                        ease: "none" 
                    });
                }
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-background relative pt-24 md:pt-0"> {/* Added mobile transition padding */}
            <div ref={cardsWrapperRef} className="h-screen w-full flex items-center justify-center overflow-hidden sticky top-0">
                
                {/* Introduction Text */}
                <div className="absolute top-24 md:top-20 left-1/2 -translate-x-1/2 text-center z-10 hidden md:block">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Workflow</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
                        <AnimatedText text="A Seamless Experience" type="chars" animation="typewriter" />
                    </h2>
                </div>

                <div className="relative w-full max-w-6xl h-[550px] px-6 mt-16 md:mt-24"> {/* Reduced Width/Height/Margin */}
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="stacked-card absolute top-0 left-0 w-full h-full rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col justify-between overflow-hidden border border-white/10 bg-[#0f0f13] shadow-2xl"
                            style={{ 
                                zIndex: index + 1,
                                boxShadow: '0 -10px 40px -10px rgba(0,0,0,0.5)' // Reduced shadow intensity
                            }}
                        >
                            {/* Texture Background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                            
                            {/* Card Number Watermark */}
                            <div className="absolute top-6 right-8 opacity-5">
                                <span className="text-[80px] md:text-[100px] font-black leading-none text-white">0{index + 1}</span>
                            </div>

                            {/* Card Header */}
                            <div className="relative z-10">
                                <div className="bg-white/5 w-fit p-3 rounded-xl mb-6 border border-white/5">
                                    {React.cloneElement(card.icon, { className: `w-8 h-8 md:w-10 md:h-10 ${card.icon.props.className.split(' ').find(c => c.startsWith('text-'))}` })}
                                </div>
                                <AnimatedText 
                                    text={card.title} 
                                    className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight max-w-2xl block tracking-tight"
                                    type="words" 
                                    animation="reveal"
                                    delay={0.2} 
                                />
                                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-medium">
                                    {card.description}
                                </p>
                            </div>

                            {/* Card Footer */}
                            <div className="relative z-10 flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'} animate-pulse`}></div>
                                    <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Step 0{index + 1}</span>
                                </div>
                                <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all flex items-center gap-2">
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
             {/* Mobile Spacer */}
             <div className="md:hidden flex flex-col gap-6 px-6 py-20 bg-background relative z-20">
                 {cards.map((card, index) => (
                    <div key={index} className="rounded-[24px] p-8 bg-[#0f0f13] border border-white/10 shadow-lg">
                        <div className="bg-white/5 w-fit p-3 rounded-xl mb-4">
                            {React.cloneElement(card.icon, { className: `w-8 h-8 ${card.icon.props.className.split(' ').find(c => c.startsWith('text-'))}` })}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                         <p className="text-sm text-gray-400 mb-6 leading-relaxed">{card.description}</p>
                         <button className="px-6 py-3 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wider w-full hover:bg-gray-200">
                            {card.buttonText}
                        </button>
                    </div>
                 ))}
            </div>
        </section>
    );
};

export default StackedCards;
