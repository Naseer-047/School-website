import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { User, BookOpen, GraduationCap, Users } from 'lucide-react';

const HeroOrbit = () => {
    const orbitRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".orbit-ring-hero", {
                rotation: 360,
                duration: 60,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".counter-rotate-hero", {
                rotation: -360,
                duration: 60,
                repeat: -1,
                ease: "none"
            });
        }, orbitRef);

        return () => ctx.revert();
    }, []);

    const planets = [
        { icon: <GraduationCap className="w-5 h-5" />, label: "Students", color: "text-blue-400", bg: "bg-blue-400/10", angle: 0 },
        { icon: <User className="w-5 h-5" />, label: "Teachers", color: "text-primary", bg: "bg-primary/10", angle: 90 },
        { icon: <Users className="w-5 h-5" />, label: "Parents", color: "text-green-400", bg: "bg-green-400/10", angle: 180 },
        { icon: <BookOpen className="w-5 h-5" />, label: "Admins", color: "text-accent", bg: "bg-accent/10", angle: 270 },
    ];

    return (
        <div ref={orbitRef} className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center pointer-events-none select-none">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full"></div>

            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full"></div>
            <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] border border-white/5 rounded-full"></div>
            <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>

            {/* Central Hub */}
            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-surface to-black border border-white/10 shadow-2xl shadow-primary/30 flex flex-col items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-[30px] animate-pulse"></div>
                <span className="text-xl md:text-2xl font-black text-white tracking-tighter mb-0.5">EDU</span>
                <span className="text-[8px] md:text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Prime</span>
            </div>

            {/* Orbiting Planets */}
            <div className="orbit-ring-hero absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full">
                {planets.map((planet, index) => (
                    <div 
                        key={index}
                        className="absolute w-12 h-12 md:w-16 md:h-16 -ml-6 -mt-6 md:-ml-8 md:-mt-8 rounded-xl backdrop-blur-md border border-white/10 bg-white/[0.02] flex items-center justify-center shadow-lg pointer-events-auto"
                        style={{ 
                            left: `${50 + 50 * Math.cos((planet.angle * Math.PI) / 180)}%`, 
                            top: `${50 + 50 * Math.sin((planet.angle * Math.PI) / 180)}%`,
                        }}
                    >
                        <div className="counter-rotate-hero flex items-center justify-center w-full h-full">
                             <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${planet.bg} ${planet.color}`}>
                                {planet.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroOrbit;
