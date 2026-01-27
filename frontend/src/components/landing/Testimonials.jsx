import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Principal, Delhi Public School",
    text: "EduPrime transformed how we manage our school. The administrative burden has dropped by 60%, allowing us to focus on what matters—education.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Vikram Patel",
    role: "Administrator, Global International School",
    text: "The financial modules are a lifesaver. Fee collection used to take weeks; now it's automated and seamless for parents.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Meenakshi Iyer",
    role: "Senior HOD, Modern School",
    text: "I love the gradebook and attendance features. It's so intuitive, I don't need manual training to figure it out.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sanjay Verma",
    role: "Parent",
    text: "Seeing my child's progress in real-time is amazing. The app is beautiful and very easy to use.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
   {
    name: "Anita Desai",
    role: "Director, Little Roses Preschool",
    text: "We switched from a legacy system to EduPrime and haven't looked back. The support is phenomenal.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        const inner = scroller.querySelector('.inner-scroller');
        const scrollerContent = Array.from(inner.children);

        // Duplicating content for infinite loop
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            inner.appendChild(duplicatedItem);
        });
        
        // No GSAP needed for simple CSS infinite scroll if we use keyframes, 
        // but let's use GSAP for smooth hover pause control if we wanted.
        // For now, simple CSS animation is best for the scrolling ticker.

    }, []);

    return (
        <section id="testimonials" className="py-24 bg-background overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by Educators</h2>
                 <p className="text-gray-400">Join 500+ schools boosting productivity with EduPrime.</p>
             </div>

             <div ref={scrollerRef} className="scroller relative max-w-full overflow-hidden mask-gradient">
                 <div className="inner-scroller flex gap-8 w-max animate-scroll">
                     {testimonials.map((t, i) => (
                         <div key={i} className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-surface border border-white/5 shrink-0 hover:bg-white/5 transition-colors">
                             <Quote className="text-primary mb-6 w-8 h-8 opacity-50" />
                             <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{t.text}"</p>
                             <div className="flex items-center gap-4">
                                 <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                                 <div>
                                     <h4 className="font-bold text-white">{t.name}</h4>
                                     <p className="text-sm text-primary">{t.role}</p>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    );
};

export default Testimonials;
