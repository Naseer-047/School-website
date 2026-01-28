import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
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
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400">Last updated: January 28, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div ref={contentRef} className="max-w-4xl mx-auto">
                    <div className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 space-y-8">
                        
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By accessing and using EduPrime, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You agree to use EduPrime only for lawful purposes and in accordance with these Terms. You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Use the service in any way that violates applicable laws</li>
                                <li>Attempt to gain unauthorized access to any part of the service</li>
                                <li>Interfere with or disrupt the service or servers</li>
                                <li>Upload malicious code or viruses</li>
                                <li>Impersonate another person or entity</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Account Responsibilities</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring basis. Refunds are provided according to our refund policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The service and its original content, features, and functionality are owned by EduPrime and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-300 leading-relaxed">
                                EduPrime shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about these Terms, please contact us at{' '}
                                <a href="mailto:legal@eduprime.com" className="text-primary hover:underline">
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
