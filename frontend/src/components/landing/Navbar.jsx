import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MagneticButton from '../ui/MagneticButton';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                    <span className="text-xl font-bold tracking-tight">EduPrime</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium hover:text-primary-light transition-colors">
                        Log in
                    </Link>
                    <Link to="/register">
                        <MagneticButton className="bg-white text-black hover:bg-gray-100 italic font-black">
                            Get started
                        </MagneticButton>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <button className="md:hidden text-white">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
