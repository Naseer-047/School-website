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
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={triggerRef} className="overflow-hidden bg-background">
            <div ref={sectionRef} className="flex h-screen w-fit items-center px-20 gap-10">
                
                {/* Intro Card */}
                <div className="w-[80vw] md:w-[40vw] flex-shrink-0 px-10">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Beyond Academics
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                        <AnimatedText text="Explore" type="words" animation="fade-up" /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                             <AnimatedText text="The Campus" type="words" animation="reveal" delay={0.2} />
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-md">
                        A visual journey through our world-class facilities and programs.
                    </p>
                    <div className="mt-8 flex items-center gap-4 text-sm font-bold text-gray-600 animate-pulse">
                        SCROLL TO EXPLORE <div className="w-12 h-[1px] bg-gray-600"></div>
                    </div>
                </div>

                {/* Gallery Items */}
                {items.map((item, index) => (
                    <div 
                        key={item.id} 
                        className="w-[85vw] md:w-[60vw] h-[600px] flex-shrink-0 rounded-[32px] relative overflow-hidden group border border-white/10 bg-[#0f0f13] hover:border-primary/30 transition-all duration-500"
                    >
                         {/* Card Reflection/Shine Effect */}
                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-between z-10">
                            <div>
                                <div className="flex justify-between items-start">
                                    <div className="bg-white/5 w-fit p-4 rounded-2xl backdrop-blur-md mb-8 border border-white/5">
                                        {item.icon}
                                    </div>
                                    <span className="font-mono text-xs text-gray-600">0{index + 1}</span>
                                </div>
                                <AnimatedText 
                                    text={item.title} 
                                    className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight block tracking-tight"
                                    type="words" 
                                    animation="fade-up" 
                                />
                                <p className="text-lg text-primary font-medium tracking-wide">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black hover:border-transparent transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>

                         {/* Massive Background Icon (Visual Interest) */}
                         <div className="absolute -bottom-10 -right-10 opacity-[0.03] transform rotate-12 scale-[3] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-500">
                            {item.icon}
                         </div>
                    </div>
                ))}

                {/* End Spacer */}
                <div className="w-[10vw] flex-shrink-0"></div>

            </div>
        </section>
    );
};

export default HorizontalScroll;
