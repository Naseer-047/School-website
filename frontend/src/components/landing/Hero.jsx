import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { BadgeCheck, Play, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import HeroOrbit from './HeroOrbit';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonsRef = useRef(null);
    const visualsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Parallax Background Effect
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(".bg-blob", {
                x: xPos,
                y: yPos,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Typewriter animation logic
        const chars = textRef.current.querySelectorAll('.char');
        
        tl.fromTo(chars, 
            { opacity: 0 },
            { opacity: 1, duration: 0.05, stagger: 0.05, delay: 0.5 }
        )
        .fromTo(subtextRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.2"
        )
        .fromTo(buttonsRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        )
        .fromTo(visualsRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "slow(0.7, 0.7, false)" },
            "-=1"
        );

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
        ));
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">
            
            {/* Background Gradients */}
            <div className="bg-blob absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="bg-blob absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
            
            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 dark:border-white/10 border-gray-200 bg-white/50 dark:bg-white/5 backdrop-blur-sm mb-8 animate-float">
                    <BadgeCheck className="text-secondary w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-300">Trusted by 500+ Top Schools</span>
                </div>

                {/* Main Headline */}
                <div ref={textRef} className="flex flex-col gap-2 mb-8 items-center cursor-default">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
                        {splitText("The Future of")}
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-gray-500 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-500 leading-[1.1]">
                        {splitText("School Management")}
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent leading-[1.1]">
                        {splitText("Is Finally Here.")}
                    </h1>
                </div>

                {/* Subtext */}
                <p ref={subtextRef} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Streamline administration, empower teachers, and engage students with the most beautiful, fast, and intelligent platform ever built for education.
                </p>

                {/* CTA Buttons */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/register" className="w-full sm:w-auto">
                        <MagneticButton className="bg-foreground text-background hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 w-full sm:w-auto px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all">
                            Start Free Trial <ArrowRight className="w-4 h-4" />
                        </MagneticButton>
                    </Link>
                    <MagneticButton className="glass border border-gray-200 dark:border-white/10 text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10 w-full sm:w-auto px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                        <Play className="w-4 h-4 fill-current" /> Watch Demo
                    </MagneticButton>
                </div>
            </div>

            {/* Dashboard Visual / Ecosystem Animation */}
            <div ref={visualsRef} className="mt-16 relative w-full max-w-5xl mx-auto px-4 perspective-1000">
                <HeroOrbit />
            </div>

        </section>
    );
};

export default Hero;
