import React from 'react';

const AnimatedText = ({ 
    text, 
    className = "", 
    delay = 0,
    tag = "div" 
}) => {
    const Tag = tag;

    // Use simple CSS animation instead of fragile GSAP character splitting
    return (
        <Tag 
            className={`${className} animate-fade-in`} 
            style={{ animationDelay: `${delay}s`, opacity: 0, animationFillMode: 'forwards' }}
        >
            {text}
        </Tag>
    );
};

export default AnimatedText;
