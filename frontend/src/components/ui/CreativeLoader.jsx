import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CreativeLoader = ({ text = "Initializing EduPrime..." }) => {
    const loaderRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main rotation for the whole assembly
            gsap.to('.main-assembly', {
                rotationY: 360,
                duration: 8,
                repeat: -1,
                ease: 'none'
            });

            // Orbital Rings with different speeds and axis
            gsap.to('.ring-1', { rotation: 360, duration: 2, repeat: -1, ease: 'none' });
            gsap.to('.ring-2', { rotation: -360, duration: 3, repeat: -1, ease: 'none' });
            gsap.to('.ring-3', { rotation: 360, duration: 4, repeat: -1, ease: 'none' });

            // Pulse the core
            gsap.to('.loader-core', {
                scale: 1.2,
                opacity: 1,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut'
            });

            // Scanning Line
            gsap.fromTo('.scan-line', 
                { top: '-10%' },
                { top: '110%', duration: 1.5, repeat: -1, ease: 'power1.inOut' }
            );

            // Text Glitch/Pulse
            gsap.to('.loading-text', {
                opacity: 0.5,
                duration: 0.1,
                repeat: -1,
                yoyo: true,
                repeatDelay: 2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center overflow-hidden font-sans">
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
            
            <div ref={loaderRef} className="relative z-10 scale-75 md:scale-100">
                {/* 3D Assembler */}
                <div className="main-assembly relative w-48 h-48 flex items-center justify-center">
                    
                    {/* Orbital Rings */}
                    <div className="ring-1 absolute inset-0 border-[1px] border-primary/30 rounded-full before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:shadow-[0_0_15px_#6d28d9]"></div>
                    <div className="ring-2 absolute inset-4 border-[1px] border-accent/20 rounded-full before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:shadow-[0_0_15px_#f472b6]"></div>
                    <div className="ring-3 absolute inset-8 border-[1px] border-secondary/20 rounded-full"></div>

                    {/* Central Core */}
                    <div className="loader-core w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-full shadow-[0_0_30px_rgba(109,40,217,0.5)] flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Scanning Line Visual */}
                    <div className="scan-line absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[1px]"></div>
                </div>

                {/* Info Display */}
                <div className="mt-16 text-center space-y-4">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-2">System Status: Booting</span>
                        <h2 className="loading-text text-2xl font-black bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent tracking-tighter">
                            {text}
                        </h2>
                    </div>

                    {/* High-tech Progress */}
                    <div className="relative w-64 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                    
                    <div className="flex justify-center gap-8 mt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">Database</span>
                            <span className="text-[10px] text-primary font-mono group-hover:text-white transition-colors">READY</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-white/10 pl-8">
                            <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">Network</span>
                            <span className="text-[10px] text-accent font-mono">SECURE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Matrix-like decorative elements */}
            <div className="absolute bottom-10 left-10 opacity-10 font-mono text-[8px] text-primary leading-tight space-y-1 hidden md:block">
                <div>_ST_INIT_SEQUENCE</div>
                <div>_MEM_ALLOC_OK</div>
                <div>_GPU_RENDER_ACTIVE</div>
                <div>_VITE_CORE_CONNECTED</div>
            </div>
        </div>
    );
};

export default CreativeLoader;
