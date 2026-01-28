import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    UserPlus, 
    Settings, 
    Users, 
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Smartphone,
    Globe,
    Shield,
    Zap,
    Loader2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const stepsRef = useRef(null);
    const journeysRef = useRef(null);
    const featuresRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        // Animate steps, features and CTA with GSAP (those are working well)
        const steps = stepsRef.current.querySelectorAll('.step-item');
        steps.forEach((step, index) => {
            gsap.fromTo(step,
                { 
                    x: index % 2 === 0 ? -100 : 100, 
                    opacity: 0 
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 80%',
                    }
                }
            );
        });

        // User journeys animation
        gsap.fromTo(journeysRef.current.children,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: journeysRef.current,
                    start: 'top 75%',
                }
            }
        );

        // Features animation
        gsap.fromTo(featuresRef.current.children,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: 'top 80%',
                }
            }
        );

        // CTA animation
        gsap.fromTo(ctaRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 85%',
                }
            }
        );

    }, [loading]);

    const steps = [
        {
            number: "01",
            title: "Sign Up & Setup",
            description: "Create your school account in minutes. Add your school details, logo, and basic information. Our setup wizard guides you through every step.",
            icon: <UserPlus className="w-8 h-8" />,
            iconLarge: <UserPlus className="w-48 h-48" />,
            color: "blue",
            details: [
                "Fill in basic school information",
                "Upload school logo and branding",
                "Set up academic year and terms",
                "Configure fee structure"
            ]
        },
        {
            number: "02",
            title: "Configure Your System",
            description: "Customize the platform to match your school's needs. Set up classes, sections, subjects, and fee structures with our intuitive interface.",
            icon: <Settings className="w-8 h-8" />,
            iconLarge: <Settings className="w-48 h-48" />,
            color: "purple",
            details: [
                "Create classes and sections",
                "Add subjects and curriculum",
                "Define user roles and permissions",
                "Set up timetable templates"
            ]
        },
        {
            number: "03",
            title: "Add Users",
            description: "Import or manually add students, teachers, and staff. Bulk upload via Excel or add individually. Everyone gets instant access to their portal.",
            icon: <Users className="w-8 h-8" />,
            iconLarge: <Users className="w-48 h-48" />,
            color: "green",
            details: [
                "Bulk import via Excel/CSV",
                "Add students with parent details",
                "Register teachers and staff",
                "Auto-generate login credentials"
            ]
        },
        {
            number: "04",
            title: "Start Managing",
            description: "Begin using all features immediately. Track attendance, manage fees, schedule exams, and communicate with parents - all from one dashboard.",
            icon: <BarChart3 className="w-8 h-8" />,
            iconLarge: <BarChart3 className="w-48 h-48" />,
            color: "orange",
            details: [
                "Mark daily attendance",
                "Collect and track fees",
                "Schedule and manage exams",
                "Send announcements and alerts"
            ]
        }
    ];

    const features = [
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Access",
            description: "Access from any device - desktop, tablet, or mobile"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Cloud-Based",
            description: "Your data is secure and accessible from anywhere"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure & Safe",
            description: "Bank-level encryption protects all your data"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Optimized performance for smooth experience"
        }
    ];

    const userJourneys = [
        {
            role: "Admin",
            color: "blue",
            steps: [
                "Login to admin dashboard",
                "View school-wide analytics",
                "Manage students, teachers, and staff",
                "Generate reports and insights",
                "Configure system settings"
            ]
        },
        {
            role: "Teacher",
            color: "purple",
            steps: [
                "Login to teacher portal",
                "Mark student attendance",
                "Upload assignments and materials",
                "Enter grades and feedback",
                "Communicate with parents"
            ]
        },
        {
            role: "Student",
            color: "green",
            steps: [
                "Login to student portal",
                "View timetable and schedule",
                "Access course materials",
                "Check grades and attendance",
                "Submit assignments online"
            ]
        },
        {
            role: "Parent",
            color: "orange",
            steps: [
                "Login to parent portal",
                "Monitor child's attendance",
                "View academic performance",
                "Pay fees online",
                "Receive school notifications"
            ]
        }
    ];

    if (loading) {
        return <CreativeLoader text="Loading Guide" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        How <span className="text-gradient">EduPrime</span> Works
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Get your school up and running in 4 simple steps. No technical knowledge required. 
                        We'll guide you through everything.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section ref={stepsRef} className="py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-16">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className={`step-item flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-16 h-16 rounded-xl bg-${step.color}-500/10 flex items-center justify-center text-${step.color}-500`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-6xl font-black text-white/5">{step.number}</span>
                                </div>
                                
                                <h2 className="text-3xl font-bold text-white">{step.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                                
                                <div className="space-y-3">
                                    {step.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-gray-300">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="flex-1">
                                <div className="bg-gradient-to-br from-surface to-surface/50 border border-white/10 rounded-2xl p-12 aspect-square flex items-center justify-center">
                                    <div className={`text-${step.color}-500 opacity-20`}>
                                        {step.iconLarge}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* User Journeys */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Different Portals for Different Users</h2>
                        <p className="text-gray-400 text-lg">
                            Each user type has a customized experience tailored to their needs
                        </p>
                    </div>

                    <div ref={journeysRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {userJourneys.map((journey, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all"
                            >
                                <div className={`inline-block px-4 py-2 rounded-lg bg-${journey.color}-500/10 text-${journey.color}-500 font-bold mb-6`}>
                                    {journey.role}
                                </div>
                                
                                <div className="space-y-4">
                                    {journey.steps.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                            <span className="text-sm text-gray-300">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-4">Why Schools Love EduPrime</h2>
                    </div>

                    <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/5 rounded-xl p-6 text-center hover:border-primary/20 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div ref={ctaRef} className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Join 500+ schools already using EduPrime. Setup takes less than 10 minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Start Free Trial
                            </a>
                            <a 
                                href="/features"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                View All Features
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HowItWorksPage;
