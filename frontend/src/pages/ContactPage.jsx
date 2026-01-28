import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import CreativeLoader from '../components/ui/CreativeLoader';
import { gsap } from 'gsap';
import { Loader2, Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const heroRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        // Animate form with GSAP
        gsap.fromTo(formRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
            }
        );
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            content: "support@eduprime.com",
            link: "mailto:support@eduprime.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            content: "+91 1800-123-4567",
            link: "tel:+911800123456 7"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            content: "Bangalore, Karnataka, India",
            link: null
        }
    ];

    if (loading) {
        return <CreativeLoader text="Loading Contact" />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            {/* Hero */}
            <section className="pt-32 pb-20 px-6">
                <div ref={heroRef} className="max-w-7xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => (
                            <div 
                                key={index}
                                className="bg-surface border border-white/10 rounded-xl p-8 text-center hover:border-primary/20 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                    {info.icon}
                                </div>
                                <h3 className="font-bold text-white mb-2">{info.title}</h3>
                                {info.link ? (
                                    <a href={info.link} className="text-gray-400 hover:text-primary transition-colors">
                                        {info.content}
                                    </a>
                                ) : (
                                    <p className="text-gray-400">{info.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div ref={formRef} className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-black text-white mb-8 text-center">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Your Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Your Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Subject</label>
                                <input 
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:border-primary focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
