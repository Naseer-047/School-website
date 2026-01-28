import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { Loader2, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const contentRef = useRef(null);

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

        gsap.fromTo(contentRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: contentRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    if (loading) {
        return <CreativeLoader text="Loading Privacy Policy" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 hover:scale-110 hover:bg-primary/20 transition-all duration-300">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400">Last updated: January 28, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div ref={contentRef} className="max-w-4xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 hover:border-white/20 transition-colors">
                        
                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 group-hover:text-gray-200 transition-colors">
                                <li>School information (name, address, contact details)</li>
                                <li>Student data (names, grades, attendance records)</li>
                                <li>Teacher and staff information</li>
                                <li>Parent/guardian contact information</li>
                                <li>Payment and billing information</li>
                            </ul>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 group-hover:text-gray-200 transition-colors">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Monitor and analyze trends and usage</li>
                            </ul>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                3. Data Security
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                4. Data Sharing
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, or to protect our rights and safety.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                5. Your Rights
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 group-hover:text-gray-200 transition-colors">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Export your data</li>
                            </ul>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                6. Contact Us
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:privacy@eduprime.com" className="text-primary hover:underline hover:text-accent transition-colors">
                                    privacy@eduprime.com
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
