import React, { useState, useEffect, useRef } from 'react';
import MagneticButton from '../ui/MagneticButton';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: "Starter",
        price: "₹3,999",
        period: "/month",
        features: ["Up to 500 Students", "Basic Fees & Attendance", "Parent Mobile App", "Email Support"],
        highlight: false,
        color: "from-gray-700 to-gray-900"
    },
    {
        name: "Professional",
        price: "₹14,999",
        period: "/month",
        features: ["Up to 2000 Students", "Advanced Analytics", "Exam & Result Management", "Priority Support", "Dedicated Account Manager"],
        highlight: true,
        color: "from-primary to-accent"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        features: ["Unlimited Students", "Custom Modules", "API Access", "On-premise Deployment", "24/7 SLA Support"],
        highlight: false,
        color: "from-gray-700 to-gray-900"
    }
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
         gsap.fromTo(cardsRef.current, 
            { y: 100, opacity: 0.5 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            }
         );
    }, []);

    const getPrice = (plan) => {
        if (plan.price === "Custom") return "Custom";
        const basePrice = parseInt(plan.price.replace(/[₹,]/g, ''));
        if (isYearly) {
            const discountedPrice = Math.floor(basePrice * 0.8); // 20% discount
            return `₹${discountedPrice.toLocaleString('en-IN')}`;
        }
        return plan.price;
    };

    return (
        <section ref={sectionRef} id="pricing" className="py-32 px-6 bg-[#0f0f13] relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10"> 
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400 mb-10">Choose the plan that fits your institution's size and needs.</p>
                    
                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-6">
                        <span className={`text-sm tracking-wide transition-colors ${!isYearly ? 'text-white font-bold' : 'text-gray-500'}`}>Monthly</span>
                        <button 
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-16 h-8 bg-white/10 border border-white/20 rounded-full relative p-1 transition-all hover:border-primary/50 hover:bg-white/15"
                            aria-label="Toggle Billing Cycle"
                        >
                            <div className={`w-6 h-6 bg-primary rounded-full shadow-lg shadow-primary/50 transition-transform duration-500 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        <div className="flex items-center gap-3">
                            <span className={`text-sm tracking-wide transition-colors ${isYearly ? 'text-white font-bold' : 'text-gray-500'}`}>Yearly</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/20">Save 20%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            ref={el => cardsRef.current[index] = el}
                            className={`relative p-10 rounded-3xl border border-white/10 ${plan.highlight ? 'bg-white/5 shadow-2xl shadow-primary/20 scale-105 border-primary/50' : 'bg-surface'} flex flex-col h-full transition-all duration-500 hover:shadow-3xl hover:shadow-primary/10 hover:-translate-y-4 font-inter`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-black text-white tracking-tight">
                                    {getPrice(plan)}
                                </span>
                                <span className="text-gray-500 ml-2 font-medium">
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="mb-12 space-y-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-300 text-sm font-medium group/item text-left">
                                        <div className={`p-1.5 rounded-full transition-colors font-bold ${plan.highlight ? 'bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-white' : 'bg-gray-800 text-gray-500 group-hover/item:bg-gray-700 group-hover/item:text-white'}`}>
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <MagneticButton 
                                className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${plan.highlight ? 'bg-white text-black hover:bg-gray-200 shadow-2xl shadow-white/10' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
                            >
                                Get Started Now
                            </MagneticButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
