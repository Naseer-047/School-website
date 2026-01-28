import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { Loader2, Shield, Lock, Server, Eye, CheckCircle2 } from 'lucide-react';

const SecurityPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        // Only animate feature cards, not hero (hero uses CSS animation)
        gsap.fromTo(featuresRef.current.children,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)',
                scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    const securityFeatures = [
        {
            icon: <Lock className="w-8 h-8" />,
            title: "End-to-End Encryption",
            description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "Secure Cloud Infrastructure",
            description: "Hosted on AWS with 99.9% uptime SLA and automatic backups every 24 hours."
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: "Access Controls",
            description: "Role-based access control (RBAC) ensures users only see what they're authorized to access."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Regular Security Audits",
            description: "Third-party security audits and penetration testing conducted quarterly."
        }
    ];

    const compliance = [
        "GDPR Compliant",
        "ISO 27001 Certified",
        "SOC 2 Type II",
        "FERPA Compliant",
        "COPPA Compliant",
        "Data Privacy Framework"
    ];

    if (loading) {
        return <CreativeLoader text="Loading Security" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 hover:scale-110 hover:bg-primary/20 transition-all duration-300">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Security &{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Compliance
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Your data security is our top priority. We implement industry-leading security measures to protect your school's information.
                    </p>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center hover:scale-105 transition-transform duration-300 inline-block w-full">
                        Security Features
                    </h2>
                    <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center hover:scale-105 transition-transform duration-300 inline-block w-full">
                        Compliance & Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {compliance.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                                <span className="text-white font-bold group-hover:text-primary transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 hover:border-white/20 transition-colors">
                        
                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                Data Backup & Recovery
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                We perform automated backups every 24 hours with 30-day retention. In case of any data loss, we can restore your data quickly and efficiently.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                Incident Response
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                Our security team monitors systems 24/7 for any suspicious activity. We have a comprehensive incident response plan to address any security concerns immediately.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                Employee Training
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                All EduPrime employees undergo regular security training and background checks. Access to customer data is strictly limited and monitored.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                Report a Security Issue
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                If you discover a security vulnerability, please report it to{' '}
                                <a href="mailto:security@eduprime.com" className="text-primary hover:underline hover:text-accent transition-colors">
                                    security@eduprime.com
                                </a>
                                {' '}immediately. We take all reports seriously and will respond within 24 hours.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SecurityPage;
