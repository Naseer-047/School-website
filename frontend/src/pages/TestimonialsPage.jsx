import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
    const testimonials = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Principal",
            school: "Delhi Public School, Mumbai",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "EduPrime has completely transformed how we manage our school. The attendance tracking alone has saved us countless hours. Our teachers love the easy-to-use interface, and parents appreciate the real-time updates.",
            stats: "1,200 students"
        },
        {
            name: "Mrs. Priya Sharma",
            role: "Administrator",
            school: "St. Xavier's International School, Bangalore",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "The fee management system is a game-changer. We've reduced payment delays by 80% and automated our entire billing process. The analytics dashboard gives us insights we never had before.",
            stats: "850 students"
        },
        {
            name: "Mr. Amit Patel",
            role: "Director",
            school: "Modern Academy, Ahmedabad",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "We manage 3 branches with EduPrime. The multi-branch feature is incredible. We can see everything from one dashboard and generate consolidated reports instantly. Best investment we've made!",
            stats: "3 branches, 2,500+ students"
        },
        {
            name: "Dr. Meera Reddy",
            role: "Principal",
            school: "Greenfield International School, Hyderabad",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "The parent portal has improved our communication tremendously. Parents can track their child's progress, pay fees online, and receive instant notifications. It's made our school feel more connected.",
            stats: "950 students"
        },
        {
            name: "Mr. Suresh Iyer",
            role: "IT Head",
            school: "Cambridge School, Chennai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "As someone who evaluated 10+ school management systems, EduPrime stands out. The security features are top-notch, the API integrations are seamless, and the support team is incredibly responsive.",
            stats: "1,500 students"
        },
        {
            name: "Mrs. Kavita Singh",
            role: "Vice Principal",
            school: "Ryan International School, Pune",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
            rating: 5,
            text: "The exam management module has streamlined our entire assessment process. From creating question papers to publishing results, everything is automated. Teachers can focus more on teaching now.",
            stats: "1,100 students"
        }
    ];

    const stats = [
        { number: "500+", label: "Schools Trust Us" },
        { number: "200K+", label: "Active Students" },
        { number: "15K+", label: "Teachers Using Daily" },
        { number: "4.9/5", label: "Average Rating" }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Loved by Schools <br />
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Across India
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what school administrators, 
                        principals, and teachers have to say about EduPrime.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all group"
                            >
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                                        <p className="text-xs text-gray-500">{testimonial.school}</p>
                                    </div>
                                </div>

                                {/* Stats Badge */}
                                <div className="mt-4">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                                        {testimonial.stats}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonial Section (Placeholder) */}
            <section className="py-20 px-6 bg-gradient-to-b from-transparent to-surface/50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-white mb-4">See EduPrime in Action</h2>
                        <p className="text-gray-400 text-lg">
                            Watch how schools are transforming their operations with EduPrime
                        </p>
                    </div>

                    <div className="bg-surface border border-white/10 rounded-2xl p-12 text-center">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                                </div>
                                <p className="text-gray-400">Video testimonials coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Join 500+ Happy Schools
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Start your free trial today and see why schools across India trust EduPrime
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/register"
                                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Start Free Trial
                            </a>
                            <a 
                                href="/how-it-works"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                            >
                                See How It Works
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TestimonialsPage;
