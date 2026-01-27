import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MagneticButton = ({ children, className = "", onClick }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.3, // Strength of magnet
                y: y * 0.3,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(text, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to([button, text], {
                x: 0,
                y: 0,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <button 
            ref={buttonRef} 
            className={`relative px-8 py-3 rounded-full font-medium overflow-hidden transition-colors ${className}`}
            onClick={onClick}
        >
            <span ref={textRef} className="relative z-10 inline-block">
                {children}
            </span>
        </button>
    );
};

export default MagneticButton;
