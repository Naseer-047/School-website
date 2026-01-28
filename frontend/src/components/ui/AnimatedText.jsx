import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ 
    text, 
    className = "", 
    type = "chars", // 'chars' or 'words'
    animation = "fade-up", // 'fade-up', 'reveal', 'typewriter'
    delay = 0,
    tag = "div" 
}) => {
    const containerRef = useRef(null);
    const Tag = tag;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = containerRef.current.children; // The spans

            let fromVars = {};
            let toVars = {};

            switch (animation) {
                case 'fade-up':
                    fromVars = { y: 50, opacity: 0, rotateX: 45 };
                    toVars = { 
                        y: 0, 
                        opacity: 1, 
                        rotateX: 0,
                        stagger: 0.02, 
                        duration: 0.8, 
                        ease: "back.out(1.7)" 
                    };
                    break;
                case 'reveal':
                    fromVars = { y: "100%" };
                    toVars = { 
                        y: "0%", 
                        stagger: 0.03, 
                        duration: 0.6, 
                        ease: "power3.out" 
                    };
                    break;
                case 'typewriter':
                    fromVars = { opacity: 0 };
                    toVars = { 
                        opacity: 1, 
                        stagger: 0.05, 
                        duration: 0.1, 
                        ease: "none" 
                    };
                    break;
                default:
                    fromVars = { opacity: 0 };
                    toVars = { opacity: 1, duration: 1 };
            }

            gsap.fromTo(elements, fromVars, {
                ...toVars,
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [animation, delay]);

    // Splitting Logic
    const splitContent = () => {
        if (!text) return null;

        if (type === 'words') {
            return text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em] overflow-hidden leading-tight">
                    <span className="inline-block origin-bottom">
                        {word}
                    </span>
                </span>
            ));
        } else {
            // chars
            return text.split("").map((char, i) => (
                <span key={i} className="inline-block origin-bottom leading-tight">
                    {char === " " ? "\u00A0" : char}
                </span>
            ));
        }
    };

    return (
        <Tag ref={containerRef} className={`${className} perspective-text`}>
            {splitContent()}
        </Tag>
    );
};

export default AnimatedText;
