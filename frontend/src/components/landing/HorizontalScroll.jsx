import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorPlay, Trophy, Globe, Cpu, Palette } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const items = [
        {
            id: 1,
            title: "Smart Classrooms",
            subtitle: "Interactive Learning",
            description: "Equipped with AI boards and real-time recording for remote access.",
            icon: <MonitorPlay className="w-12 h-12 text-primary mb-4" />
        },
        {
            id: 2,
            title: "Global Recognition",
            subtitle: "International Standards",
            description: "Curriculum aligned with global benchmarks for competitive excellence.",
            icon: <Globe className="w-12 h-12 text-secondary mb-4" />
        },
        {
            id: 3,
            title: "AI & Robotics",
            subtitle: "Future Tech Labs",
            description: "Hands-on experience with cutting-edge robotics and coding modules.",
            icon: <Cpu className="w-12 h-12 text-accent mb-4" />
        },
        {
            id: 4,
            title: "Holistic Arts",
            subtitle: "Creative Expression",
            description: "State-of-the-art studios for music, dance, and visual arts.",
            icon: <Palette className="w-12 h-12 text-pink-500 mb-4" />
        },
        {
            id: 5,
            title: "Elite Sports",
            subtitle: "Physical Excellence",
            description: "Professional coaching and tracking for athletic development.",
            icon: <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const trigger = triggerRef.current;
            
            gsap.to(section, {
                x: () => -(section.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => "+=" + section.scrollWidth,
                    anticipatePin: 1
                }
            });

             // Navbar Toggle Logic
             ScrollTrigger.create({
                trigger: trigger,
                start: "top top",
                end: () => "+=" + section.scrollWidth,
                onEnter: () => gsap.to("#landing-navbar", { y: -100, opacity: 0, duration: 0.5 }),
                onLeave: () => gsap.to("#landing-navbar", { y: 0, opacity: 1, duration: 0.5 }),
                onEnterBack: () => gsap.to("#landing-navbar", { y: -100, opacity: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to("#landing-navbar", { y: 0, opacity: 1, duration: 0.5 })
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={triggerRef} className="overflow-hidden bg-background">
            <div ref={sectionRef} className="flex h-screen w-fit items-center px-6 md:px-20 gap-8 md:gap-16 box-border">
                
                {/* Intro Card */}
                <div className="w-[90vw] md:w-[35vw] flex-shrink-0 px-4 md:px-0">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                        Beyond Academics
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                        <AnimatedText text="Explore" type="words" animation="fade-up" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                             <AnimatedText text="The Campus" type="words" animation="reveal" delay={0.2} />
                        </span>
                    </h2>
                    <p className="text-sm md:text-lg text-gray-400 max-w-sm leading-relaxed">
                        A visual journey through our world-class facilities and programs.
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-[10px] font-bold text-gray-600 animate-pulse">
                        SCROLL TO EXPLORE <div className="w-12 h-[1px] bg-gray-600"></div>
                    </div>
                </div>

                {/* Gallery Items */}
                {items.map((item, index) => (
                    <div 
                        key={item.id} 
                        className="w-[85vw] md:w-[500px] h-[450px] flex-shrink-0 rounded-[24px] relative overflow-hidden group border border-white/10 bg-[#0f0f13] hover:border-primary/30 transition-all duration-500 box-border"
                    >
                         {/* Card Reflection/Shine Effect */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white/5 w-fit p-3 rounded-xl backdrop-blur-md border border-white/5">
                                        {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                                    </div>
                                    <span className="font-mono text-[10px] text-gray-600">0{index + 1}</span>
                                </div>
                                <AnimatedText 
                                    text={item.title} 
                                    className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight block tracking-tight"
                                    type="words" 
                                    animation="fade-up" 
                                />
                                <p className="text-xs md:text-sm text-primary font-medium tracking-wide opacity-80">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black hover:border-transparent transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>

                         {/* Massive Background Icon (Visual Interest) */}
                         <div className="absolute -bottom-6 -right-6 opacity-[0.03] transform rotate-12 scale-[2.5] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500">
                            {item.icon}
                         </div>
                    </div>
                ))}

                {/* End Spacer */}
                <div className="w-[5vw] flex-shrink-0"></div>

            </div>
        </section>
    );
};

export default HorizontalScroll;
