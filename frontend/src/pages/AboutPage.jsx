import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    Target, 
    Users, 
    Heart, 
    Award,
    Loader2,
    Globe,
    Zap,
    Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const storyRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        gsap.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );

        gsap.fromTo(storyRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
            }
        );

        gsap.fromTo(valuesRef.current.children,
            { y: 40, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)',
                scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' }
            }
        );

        gsap.fromTo(teamRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: teamRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Mission-Driven",
            description: "We're committed to making quality education management accessible to every school, regardless of size or budget."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Student-Centric",
            description: "Every feature we build is designed with students' success and well-being at the core of our decisions."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Passion for Education",
            description: "We believe in the transformative power of education and work tirelessly to support educators worldwide."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "We maintain the highest standards in product quality, customer support, and data security."
        }
    ];

    const stats = [
        { number: "500+", label: "Schools" },
        { number: "200K+", label: "Students" },
        { number: "15K+", label: "Teachers" },
        { number: "50+", label: "Countries" }
    ];

    if (loading) {
        return <CreativeLoader text="Loading About" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EduPrime</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to revolutionize education management and empower schools to focus on what matters most - teaching and learning.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div ref={storyRef} className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-8 text-center">Our Story</h2>
                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            EduPrime was founded in 2020 by a team of educators and technologists who experienced firsthand the challenges of managing schools with outdated systems and manual processes.
                        </p>
                        <p>
                            We saw teachers spending hours on administrative tasks instead of teaching. We saw schools struggling with fragmented systems that didn't talk to each other. We saw parents frustrated by the lack of transparency in their child's education.
                        </p>
                        <p>
                            So we built EduPrime - a comprehensive, intuitive, and affordable school management platform that brings everything together in one place. Today, we're proud to serve over 500 schools across 50 countries, helping them streamline operations and improve educational outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-12 text-center">Our Values</h2>
                    <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Join Our Mission
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Be part of the education revolution. Start your free trial today.
                        </p>
                        <a 
                            href="/register"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Get Started Free
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
