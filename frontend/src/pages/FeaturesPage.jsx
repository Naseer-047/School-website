import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    Users, 
    GraduationCap, 
    BookOpen, 
    CreditCard, 
    BarChart3, 
    Bell, 
    Calendar, 
    FileText,
    Shield,
    Smartphone,
    Clock,
    Award,
    CheckCircle2,
    Loader2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const gridRef = useRef(null);
    const benefitsRef = useRef(null);
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

        // Hero animation
        gsap.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            }
        );

        // Feature cards animation
        gsap.fromTo(gridRef.current.children,
            { y: 80, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%',
                }
            }
        );

        // Benefits section animation
        gsap.fromTo(benefitsRef.current.children,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: benefitsRef.current,
                    start: 'top 80%',
                }
            }
        );

        // CTA animation
        gsap.fromTo(ctaRef.current,
            { scale: 0.95, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 85%',
                }
            }
        );

    }, [loading]);

    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Student Management",
            description: "Comprehensive student database with profiles, attendance tracking, and academic records. Manage admissions, transfers, and student information all in one place.",
            color: "blue"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Teacher Portal",
            description: "Dedicated portal for teachers to manage classes, upload assignments, track student progress, and communicate with parents efficiently.",
            color: "purple"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Academic Planning",
            description: "Create and manage curriculum, timetables, exam schedules, and syllabus. Track academic performance with detailed analytics and reports.",
            color: "green"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "Fee Management",
            description: "Automated fee collection, payment tracking, invoice generation, and financial reporting. Support for multiple payment methods and installments.",
            color: "orange"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Analytics & Reports",
            description: "Real-time dashboards with insights on attendance, performance, revenue, and more. Generate custom reports for data-driven decisions.",
            color: "pink"
        },
        {
            icon: <Bell className="w-8 h-8" />,
            title: "Communication Hub",
            description: "Send announcements, notices, and alerts to students, parents, and staff. SMS and email integration for instant notifications.",
            color: "yellow"
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Attendance Tracking",
            description: "Digital attendance system with biometric integration support. Track daily, monthly, and yearly attendance with automated reports.",
            color: "indigo"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Exam Management",
            description: "Create exam schedules, manage question papers, publish results, and generate mark sheets. Support for online and offline exams.",
            color: "red"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Role-Based Access",
            description: "Secure access control with different permission levels for admins, teachers, students, and parents. Protect sensitive data with encryption.",
            color: "teal"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Responsive",
            description: "Access the platform from any device - desktop, tablet, or smartphone. Native mobile app experience with offline support.",
            color: "cyan"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Timetable Management",
            description: "Create and manage class schedules, teacher assignments, and room allocations. Automatic conflict detection and resolution.",
            color: "violet"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Certification & Awards",
            description: "Generate certificates, transfer certificates, and award letters. Maintain digital records of all achievements and credentials.",
            color: "emerald"
        }
    ];

    const benefits = [
        "Cloud-Based: Access your data anytime, anywhere with 99.9% uptime guarantee",
        "Secure: Bank-level encryption and regular backups to protect your data",
        "Scalable: Grows with your institution from 100 to 10,000+ students",
        "Support: 24/7 customer support with dedicated account manager",
        "Easy Integration: Seamlessly integrate with existing systems and tools",
        "Regular Updates: Continuous improvements and new features at no extra cost"
    ];

    if (loading) {
        return <CreativeLoader text="Loading Features" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Powerful Features for <br />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Modern Education
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to manage your school efficiently. From student admissions to fee collection, 
                        we've got you covered with cutting-edge technology.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group hover:scale-105 cursor-pointer"
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">Why Choose EduPrime?</h2>
                        <p className="text-gray-400 text-lg">
                            Join 500+ schools that trust EduPrime for their digital transformation
                        </p>
                    </div>

                    <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                className="flex items-start gap-4 bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="font-bold text-white">{benefit.split(':')[0]}:</span>
                                    {benefit.split(':')[1]}
                                </p>
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
                            Ready to Transform Your School?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Start your free trial today and experience the future of education management
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Get Started Free
                            </a>
                            <a 
                                href="/login"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FeaturesPage;
