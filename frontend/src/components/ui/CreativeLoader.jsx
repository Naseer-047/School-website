import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CreativeLoader = ({ text = "Loading..." }) => {
    const loaderRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        // Animate the dots
        gsap.to(dotsRef.current, {
            scale: 1.5,
            opacity: 0.3,
            duration: 0.6,
            stagger: 0.15,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });

        // Rotate the outer ring
        gsap.to('.loader-ring', {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: 'linear'
        });

        // Pulse the inner circle
        gsap.to('.loader-pulse', {
            scale: 1.2,
            opacity: 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
        });
    }, []);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div ref={loaderRef} className="text-center">
                {/* Animated Loader */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer rotating ring */}
                    <div className="loader-ring absolute inset-0 border-4 border-transparent border-t-primary border-r-accent rounded-full"></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-2 border-4 border-transparent border-b-primary/50 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
                    
                    {/* Inner pulsing circle */}
                    <div className="loader-pulse absolute inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"></div>
                    
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Loading text with animated dots */}
                <div className="flex items-center justify-center gap-2">
                    <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {text}
                    </p>
                    <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                ref={(el) => (dotsRef.current[i] = el)}
                                className="w-2 h-2 bg-primary rounded-full"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6 w-64 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse" style={{ width: '60%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default CreativeLoader;
