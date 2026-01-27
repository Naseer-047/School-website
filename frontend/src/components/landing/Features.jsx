import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, BookOpen, Calculator, BarChart3, ShieldCheck, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Student Management",
        description: "Comprehensive profiles, acadmic history, and attendance tracking in one secure place.",
        delay: 0
    },
    {
        icon: <BookOpen className="w-8 h-8 text-secondary" />,
        title: "Curriculum Planning",
        description: "Effortlessly manage subjects, lesson plans, and digital resources for all classes.",
        delay: 0.1
    },
    {
        icon: <Calculator className="w-8 h-8 text-accent" />,
        title: "Fee Automation",
        description: "Automated fee generation, online payments, and instant receipt generation.",
        delay: 0.2
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
        title: "Advanced Analytics",
        description: "Real-time insights into student performance, teacher efficiency, and financial health.",
        delay: 0.3
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        title: "Role-Based Security",
        description: "Granular access controls ensure data privacy for admins, teachers, students, and parents.",
        delay: 0.4
    },
    {
        icon: <Clock className="w-8 h-8 text-purple-500" />,
        title: "Timetable Scheduling",
        description: "AI-powered clash-free timetable generation for optimum resource utilization.",
        delay: 0.5
    }
];

const Features = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const heading = headingRef.current;
        const cards = cardsRef.current;

        // Animate Heading
        gsap.fromTo(heading,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );

        // Animate Cards
        cards.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: features[index].delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={headingRef} className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Powerful Modules</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                        Everything you need to run a <span className="text-gradient">World-Class School</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Replace disparate tools with a single, unified operating system designed for modern education.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:bg-primary/20 transition-colors duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
