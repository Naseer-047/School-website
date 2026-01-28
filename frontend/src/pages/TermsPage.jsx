import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { Loader2, FileText } from 'lucide-react';

const TermsPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        // Animate content with GSAP
        gsap.fromTo(contentRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: contentRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    if (loading) {
        return <CreativeLoader text="Loading Terms" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 hover:scale-110 hover:bg-primary/20 transition-all duration-300">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Terms of Service
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
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                By accessing and using EduPrime, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                2. Use of Service
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                                You agree to use EduPrime only for lawful purposes and in accordance with these Terms. You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 group-hover:text-gray-200 transition-colors">
                                <li>Use the service in any way that violates applicable laws</li>
                                <li>Attempt to gain unauthorized access to any part of the service</li>
                                <li>Interfere with or disrupt the service or servers</li>
                                <li>Upload malicious code or viruses</li>
                                <li>Impersonate another person or entity</li>
                            </ul>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                3. Account Responsibilities
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                4. Subscription and Payment
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring basis. Refunds are provided according to our refund policy.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                5. Intellectual Property
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                The service and its original content, features, and functionality are owned by EduPrime and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                6. Termination
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                7. Limitation of Liability
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                EduPrime shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                8. Changes to Terms
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div className="group hover:translate-x-2 transition-transform duration-300">
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                9. Contact Us
                            </h2>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                                If you have any questions about these Terms, please contact us at{' '}
                                <a href="mailto:legal@eduprime.com" className="text-primary hover:underline hover:text-accent transition-colors">
                                    legal@eduprime.com
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

export default TermsPage;
