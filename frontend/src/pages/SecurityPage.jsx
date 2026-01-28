import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
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

        gsap.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );

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
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Security & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Compliance</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Your data security is our top priority. We implement industry-leading security measures to protect your school's information.
                    </p>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-12 text-center">Security Features</h2>
                    <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {securityFeatures.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all text-center"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-12 text-center">Compliance & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {compliance.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-primary/20 transition-colors"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-white font-bold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
                        
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Backup & Recovery</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We perform automated backups every 24 hours with 30-day retention. In case of any data loss, we can restore your data quickly and efficiently.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Incident Response</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Our security team monitors systems 24/7 for any suspicious activity. We have a comprehensive incident response plan to address any security concerns immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Employee Training</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All EduPrime employees undergo regular security training and background checks. Access to customer data is strictly limited and monitored.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Report a Security Issue</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you discover a security vulnerability, please report it to{' '}
                                <a href="mailto:security@eduprime.com" className="text-primary hover:underline">
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
