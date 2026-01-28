import React, { useState, useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { Check, X, Zap } from 'lucide-react';

const PricingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);
    const plans = [
        {
            name: "Starter",
            price: "₹9,999",
            period: "/month",
            description: "Perfect for small schools getting started",
            features: [
                "Up to 200 students",
                "5 teachers/staff accounts",
                "Basic attendance tracking",
                "Fee management",
                "Student & parent portals",
                "Email support",
                "Mobile app access",
                "Basic reports"
            ],
            notIncluded: [
                "Advanced analytics",
                "SMS notifications",
                "Biometric integration",
                "Custom branding"
            ],
            popular: false,
            color: "blue"
        },
        {
            name: "Professional",
            price: "₹24,999",
            period: "/month",
            description: "Most popular for growing institutions",
            features: [
                "Up to 1,000 students",
                "Unlimited teachers/staff",
                "Advanced attendance system",
                "Complete fee management",
                "Exam & grade management",
                "SMS & email notifications",
                "Advanced analytics & reports",
                "Priority support",
                "Mobile app access",
                "Custom branding",
                "Timetable management",
                "Library management"
            ],
            notIncluded: [
                "Biometric integration",
                "Dedicated account manager"
            ],
            popular: true,
            color: "purple"
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "pricing",
            description: "For large schools & multi-branch institutions",
            features: [
                "Unlimited students",
                "Unlimited teachers/staff",
                "All Professional features",
                "Biometric integration",
                "Multi-branch management",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 phone support",
                "On-premise deployment option",
                "Custom feature development",
                "Advanced security features",
                "Training & onboarding"
            ],
            notIncluded: [],
            popular: false,
            color: "orange"
        }
    ];

    const faqs = [
        {
            question: "Is there a free trial?",
            answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required."
        },
        {
            question: "Can I change plans later?",
            answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, UPI, net banking, and bank transfers."
        },
        {
            question: "Is my data secure?",
            answer: "Yes! We use bank-level encryption and regular backups. Your data is stored in secure cloud servers with 99.9% uptime."
        },
        {
            question: "Do you offer discounts for annual payments?",
            answer: "Yes! Get 2 months free when you pay annually. That's a 16% discount on all plans."
        },
        {
            question: "What happens if I exceed my student limit?",
            answer: "We'll notify you when you're approaching your limit. You can easily upgrade to the next plan to accommodate more students."
        }
    ];

    if (loading) {
        return <CreativeLoader text="Loading Pricing" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Simple, Transparent <br />
                        <span className="text-gradient">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect plan for your school. All plans include core features. 
                        No hidden fees, no surprises.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-3 bg-surface border border-white/10 rounded-full px-6 py-3">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm text-gray-300">
                            <span className="font-bold text-white">Save 16%</span> with annual billing
                        </span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div 
                                key={index}
                                className={`relative bg-surface border ${
                                    plan.popular 
                                    ? 'border-primary/50 scale-105' 
                                    : 'border-white/10'
                                } rounded-2xl p-8 hover:border-primary/30 transition-all`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                                            MOST POPULAR
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                                    <div className="flex items-end justify-center gap-1">
                                        <span className="text-4xl font-black text-white">{plan.price}</span>
                                        <span className="text-gray-400 mb-1">{plan.period}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.notIncluded.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 opacity-40">
                                            <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-500">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a 
                                    href="/register"
                                    className={`block w-full py-3 rounded-xl font-bold text-center transition-all ${
                                        plan.popular
                                        ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
                                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                                    }`}
                                >
                                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-400 text-lg">
                            Got questions? We've got answers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/20 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Our team is here to help. Schedule a demo or contact us for custom pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Start Free Trial
                            </a>
                            <a 
                                href="mailto:sales@eduprime.com"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PricingPage;
