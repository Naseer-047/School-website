import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { BadgeCheck, Play, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonsRef = useRef(null);
    const visualsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Split text animation logic (simulated/manual for now since SplitText is a paid plugin, 
        // using simple stagger for lines instead)
        const lines = textRef.current.children;
        
        tl.fromTo(lines, 
            { y: 100, opacity: 0, rotateX: -20 },
            { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, delay: 0.2 }
        )
        .fromTo(subtextRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
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

    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">
            
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
            
            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-float">
                    <BadgeCheck className="text-secondary w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider text-gray-300">Trusted by 500+ Top Schools</span>
                </div>

                {/* Main Headline */}
                <div ref={textRef} className="flex flex-col gap-2 mb-8 perspective-1000">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                        The Future of
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-[1.1]">
                        School Management
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent leading-[1.1]">
                        Is Finally Here.
                    </h1>
                </div>

                {/* Subtext */}
                <p ref={subtextRef} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Streamline administration, empower teachers, and engage students with the most beautiful, fast, and intelligent platform ever built for education.
                </p>

                {/* CTA Buttons */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/register" className="w-full sm:w-auto">
                        <MagneticButton className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto group">
                            <span className="flex items-center gap-2">
                            Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </MagneticButton>
                    </Link>
                    <MagneticButton className="glass text-white hover:bg-white/10 w-full sm:w-auto">
                        <span className="flex items-center gap-2">
                            <Play className="w-4 h-4 fill-current" /> Watch Demo
                        </span>
                    </MagneticButton>
                </div>
            </div>

            {/* Dashboard Visual Placeholder (will be replaced by Dashboard Preview component later) */}
            <div ref={visualsRef} className="mt-20 relative w-full max-w-6xl mx-auto px-4 perspective-1000">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-[#0f0f13] rotate-x-12 transform-gpu transition-all hover:rotate-x-0 duration-700">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
                   <img 
                        src="https://images.unsplash.com/photo-1614036635286-130d338e178f?q=80&w=2574&auto=format&fit=crop" 
                        alt="Dashboard Preview" 
                        className="w-full h-auto opacity-80"
                   />
                   {/* Floating UI Elements Overlay */}
                   <div className="absolute top-10 left-10 p-4 glass rounded-lg border border-white/5 animate-float" style={{animationDelay: "1s"}}>
                        <div className="h-2 w-20 bg-gray-600 rounded mb-2"></div>
                        <div className="h-8 w-12 bg-primary/80 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-gray-700 rounded"></div>
                   </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
