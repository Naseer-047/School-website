import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { gsap } from 'gsap';
import { Loader2, Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const jobsRef = useRef(null);

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

        gsap.fromTo(jobsRef.current.children,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: jobsRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    const jobs = [
        {
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build scalable features for our education platform using React, Node.js, and MongoDB."
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "Bangalore, India",
            type: "Full-time",
            description: "Create intuitive and beautiful user experiences for students, teachers, and administrators."
        },
        {
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Mumbai, India",
            type: "Full-time",
            description: "Help schools succeed with EduPrime by providing exceptional support and guidance."
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Maintain and scale our cloud infrastructure to serve thousands of schools worldwide."
        },
        {
            title: "Content Marketing Specialist",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description: "Create engaging content that educates and inspires educators around the world."
        },
        {
            title: "Sales Development Representative",
            department: "Sales",
            location: "Delhi, India",
            type: "Full-time",
            description: "Connect with schools and help them discover how EduPrime can transform their operations."
        }
    ];

    const perks = [
        "Competitive salary and equity",
        "Health insurance for you and family",
        "Flexible work hours",
        "Remote work options",
        "Learning & development budget",
        "Paid time off and holidays",
        "Modern office spaces",
        "Team outings and events"
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Loading careers...</p>
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
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Join Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Help us transform education for millions of students worldwide. We're looking for passionate people to join our mission.
                    </p>
                </div>
            </section>

            {/* Perks */}
            <section className="py-12 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-black text-white mb-8 text-center">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {perks.map((perk, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-4 text-center hover:border-primary/20 transition-colors"
                            >
                                <p className="text-sm text-gray-300">{perk}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-black text-white mb-12 text-center">Open Positions</h2>
                    <div ref={jobsRef} className="space-y-6">
                        {jobs.map((job, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-all group cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4" />
                                                {job.department}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                                        Apply Now <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Don't See a Perfect Fit?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            We're always looking for talented people. Send us your resume and let's talk!
                        </p>
                        <a 
                            href="mailto:careers@eduprime.com"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                        >
                            Send Your Resume
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
