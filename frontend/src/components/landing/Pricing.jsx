import React, { useEffect, useRef } from 'react';
import MagneticButton from '../ui/MagneticButton';
import { Check } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/month",
        features: ["Up to 500 Students", "Basic Fees & Attendance", "Parent Mobile App", "Email Support"],
        highlight: false,
        color: "from-gray-700 to-gray-900"
    },
    {
        name: "Professional",
        price: "$199",
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
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
         gsap.fromTo(cardsRef.current, 
            { y: 100, opacity: 0 },
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

    return (
        <section ref={sectionRef} id="pricing" className="py-32 px-6 bg-[#0f0f13] relative">
            
            <div className="max-w-7xl mx-auto"> 
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400">Choose the plan that fits your institution's size and needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            ref={el => cardsRef.current[index] = el}
                            className={`relative p-8 rounded-3xl border border-white/10 ${plan.highlight ? 'bg-white/5 shadow-2xl shadow-primary/20 scale-105 border-primary/50' : 'bg-surface'} flex flex-col h-full transition-transform hover:-translate-y-2`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-medium text-gray-300 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                                <span className="text-gray-500 ml-2">{plan.period}</span>
                            </div>

                            <ul className="mb-10 space-y-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                        <div className={`p-1 rounded-full ${plan.highlight ? 'bg-primary/20 text-primary' : 'bg-gray-800 text-gray-400'}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <MagneticButton 
                                className={`w-full ${plan.highlight ? 'bg-white text-black hover:bg-gray-200' : 'glass text-white hover:bg-white/10'}`}
                            >
                                Choose Plan
                            </MagneticButton>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
