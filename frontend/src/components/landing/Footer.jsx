import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                         <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg"></div>
                            <span className="text-xl font-bold tracking-tight text-white">EduPrime</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering the next generation of schools with intelligent technology and beautiful design.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="/#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">© 2024 EduPrime Inc. All rights reserved.</p>
                    
                    <div className="flex gap-6">
                        <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
