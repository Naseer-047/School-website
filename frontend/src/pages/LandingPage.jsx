import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Impact from '../components/landing/Impact';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <Features />
            <ProductShowcase />
            <Impact />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
};
export default LandingPage;
