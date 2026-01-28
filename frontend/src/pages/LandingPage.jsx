import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import StackedCards from '../components/landing/StackedCards';
import ProductShowcase from '../components/landing/ProductShowcase';
import BentoGrid from '../components/landing/BentoGrid';
import HorizontalScroll from '../components/landing/HorizontalScroll';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <StackedCards />
            <ProductShowcase />
            <BentoGrid />
            <HorizontalScroll />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
};
export default LandingPage;
