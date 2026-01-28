import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
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
                <div ref={heroRef} className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400">Last updated: January 28, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div ref={contentRef} className="max-w-4xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
                        
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We collect information that you provide directly to us, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>School information (name, address, contact details)</li>
                                <li>Student data (names, grades, attendance records)</li>
                                <li>Teacher and staff information</li>
                                <li>Parent/guardian contact information</li>
                                <li>Payment and billing information</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Monitor and analyze trends and usage</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances: with your consent, to comply with legal obligations, or to protect our rights and safety.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Export your data</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at{' '}
                                <a href="mailto:privacy@eduprime.com" className="text-primary hover:underline">
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
