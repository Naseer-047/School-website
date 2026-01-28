import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { gsap } from 'gsap';
import { Loader2, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef(null);
    const postsRef = useRef(null);

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

        gsap.fromTo(postsRef.current.children,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: postsRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    const posts = [
        {
            title: "10 Ways to Improve Student Engagement",
            excerpt: "Discover proven strategies to boost student participation and create a more interactive learning environment.",
            date: "Jan 15, 2026",
            author: "Dr. Sarah Johnson",
            category: "Education",
            image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "The Future of Digital Learning",
            excerpt: "Explore how technology is transforming education and what it means for schools in 2026 and beyond.",
            date: "Jan 10, 2026",
            author: "Michael Chen",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Managing School Finances Effectively",
            excerpt: "Learn best practices for budgeting, fee collection, and financial planning in educational institutions.",
            date: "Jan 5, 2026",
            author: "Priya Sharma",
            category: "Management",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Parent-Teacher Communication Tips",
            excerpt: "Build stronger relationships with parents through effective communication strategies and tools.",
            date: "Dec 28, 2025",
            author: "Robert Williams",
            category: "Communication",
            image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Data Security in Education",
            excerpt: "Understand the importance of protecting student data and implementing robust security measures.",
            date: "Dec 20, 2025",
            author: "Dr. Emily Davis",
            category: "Security",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Streamlining Administrative Tasks",
            excerpt: "Reduce administrative burden and free up time for teaching with these automation strategies.",
            date: "Dec 15, 2025",
            author: "James Anderson",
            category: "Productivity",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        }
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Loading blog...</p>
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
                        EduPrime <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Insights, tips, and best practices for modern education management
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group cursor-pointer"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
