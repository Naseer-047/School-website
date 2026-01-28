import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Database, Server, Layout, ShieldAlert, 
  Sparkles, Code, Cpu, Users, BookOpen, CreditCard, Lock, 
  Globe, Smartphone, Brain, Key, FileCheck, Layers, TrendingUp, Link as LinkIcon,
  Zap,
  Activity,
  Award
} from 'lucide-react';

// Simplified Helper Icons
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;

const slides = [
    {
        id: 1,
        title: "EduPrime",
        subtitle: "The Future.",
        type: "intro",
        bg: "from-black via-slate-950 to-blue-950"
    },
    {
        id: 2,
        title: "Agenda",
        subtitle: "The Plan",
        content: [
            { icon: <ShieldAlert />, text: "Problem" },
            { icon: <Sparkles />, text: "Solution" },
            { icon: <Users />, text: "Users" },
            { icon: <Key />, text: "Security" },
            { icon: <EyeIcon />, text: "God Mode" },
            { icon: <Code />, text: "Stack" },
            { icon: <TrendingUp />, text: "Future" }
        ],
        type: "agenda", // Minimal Grid
        bg: "from-slate-950 to-black"
    },
    {
        id: 3,
        title: "Broken.",
        subtitle: "Why we built this.",
        content: [
            { title: "Chaos", desc: "Lost Records", icon: <FileCheck className="text-red-500" /> },
            { title: "Silos", desc: "Disconnected Data", icon: <Database className="text-orange-500" /> },
            { title: "Blind", desc: "No Parent Access", icon: <Users className="text-yellow-500" /> },
            { title: "Risky", desc: "Unsafe Data", icon: <Lock className="text-red-600" /> }
        ],
        type: "grid",
        bg: "from-red-950 via-black to-slate-900"
    },
    {
        id: 4,
        title: "Fixed.",
        subtitle: "The Solution.",
        content: [
            { title: "Unified", desc: "One Dashboard", icon: <Layout className="text-blue-500" /> },
            { title: "Live", desc: "Real-time Sync", icon: <Zap className="text-yellow-400" /> },
            { title: "Auto", desc: "Zero Friction", icon: <Cpu className="text-purple-500" /> },
            { title: "Secure", desc: "Bank-Grade", icon: <ShieldAlert className="text-green-500" /> }
        ],
        type: "grid",
        bg: "from-blue-950 via-black to-slate-900"
    },
    {
        id: 5,
        title: "Roles",
        subtitle: "For Everyone.",
        content: [
            { role: "Owner", desc: "Controls SaaS" },
            { role: "Principal", desc: "Runs School" },
            { role: "Teacher", desc: "Teaches" },
            { role: "Student", desc: "Learns" },
        ],
        type: "personas",
        bg: "from-purple-950 via-black to-indigo-900"
    },
    {
        id: 6,
        title: "Flow",
        subtitle: "Trust-Based.",
        content: [
            "Docs Upload",
            "Tracking PIN",
            "Verification",
            "Approval",
            "Live Access"
        ],
        type: "flow",
        bg: "from-indigo-950 via-black to-slate-900"
    },
     {
        id: 9,
        title: "GOD MODE",
        subtitle: "Ultimate Control.",
        type: "god_mode",
        bg: "from-yellow-950 via-black to-red-950"
    },
    {
        id: 10,
        title: "MERN",
        subtitle: "The Stack.",
        content: [
            { category: "UI", tech: "React 19", icon: <Layout /> },
            { category: "API", tech: "FastAPI", icon: <Server /> },
            { category: "DB", tech: "Mongo Atlas", icon: <Database /> },
            { category: "Auth", tech: "OAuth2", icon: <Lock /> }
        ],
        type: "tech_stack",
        bg: "from-slate-900 via-black to-gray-900"
    },
    {
        id: 13,
        title: "Ready?",
        subtitle: "Let's Launch.",
        type: "outro",
        bg: "from-black via-blue-950 to-black"
    }
];

const BackgroundParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute bg-white/5 rounded-full blur-3xl"
                initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0.5,
                    opacity: 0.2
                }}
                animate={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    rotate: 360,
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: Math.random() * 15 + 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    width: Math.random() * 300 + 50,
                    height: Math.random() * 300 + 50,
                }}
            />
        ))}
    </div>
);

const Presentation = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection) => {
        const nextIndex = index + newDirection;
        if (nextIndex >= 0 && nextIndex < slides.length) {
            setDirection(newDirection);
            setIndex(nextIndex);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'ArrowLeft') paginate(-1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [index]);

    const slide = slides[index];

    return (
        <div className={`fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br ${slide.bg} text-white transition-colors duration-700 ease-in-out font-sans select-none perspective-1000`}>
            
            <BackgroundParticles />

            {/* Micro Progress */}
            <div className="absolute top-0 left-0 h-1 bg-white/5 w-full z-50">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
                    className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]"
                />
            </div>

            {/* Minimal Controls */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-50 opacity-50 hover:opacity-100 transition-opacity">
                <button onClick={() => paginate(-1)} disabled={index === 0} className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 active:scale-90 transition-all disabled:opacity-0">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={() => paginate(1)} disabled={index === slides.length - 1} className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 active:scale-90 transition-all disabled:opacity-0">
                    <ChevronRight size={24} />
                </button>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index}
                    custom={direction}
                    initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                    animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                    exit={{ scale: 1.2, opacity: 0, filter: "blur(20px)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center"
                >
                    <div className="max-w-7xl w-full flex flex-col items-center">

                    {/* INTRO */}
                    {slide.type === 'intro' && (
                        <div className="space-y-6">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-[0_0_100px_rgba(59,130,246,0.5)]"
                            >
                                <Award size={48} className="text-white" />
                            </motion.div>
                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                                className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-white/50 to-white"
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.div 
                                initial={{ width: 0 }} animate={{ width: "100px" }} transition={{ delay: 0.4 }}
                                className="h-1 bg-blue-500 mx-auto"
                            />
                            <motion.p 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                className="text-2xl md:text-4xl font-light text-blue-200 tracking-widest uppercase"
                            >
                                {slide.subtitle}
                            </motion.p>
                        </div>
                    )}

                    {/* AGENDA - Minimal Pills */}
                    {slide.type === 'agenda' && (
                        <div>
                             <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">{slide.subtitle}</h2>
                             <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                                {slide.content.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05, type: "spring" }}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                                        className="px-6 py-3 bg-white/5 rounded-full border border-white/10 flex items-center gap-3 cursor-pointer"
                                    >
                                        <div className="text-blue-400">{item.icon}</div>
                                        <span className="font-bold text-lg">{item.text}</span>
                                    </motion.div>
                                ))}
                             </div>
                        </div>
                    )}

                    {/* GRID - Problem/Solution (Big Icons) */}
                    {slide.type === 'grid' && (
                         <div className="w-full">
                            <h2 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 whitespace-nowrap pointer-events-none">
                                {slide.title.toUpperCase()}
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold mb-12">{slide.title}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {slide.content.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="p-6 bg-white/5 rounded-3xl border border-white/5 flex flex-col items-center justify-center aspect-square group"
                                    >
                                        <div className="mb-4 text-white/80 group-hover:scale-125 transition-transform duration-300 transform">
                                            {React.cloneElement(item.icon, { size: 48 })}
                                        </div>
                                        <h3 className="text-2xl font-black mb-1">{item.title}</h3>
                                        <p className="text-xs text-white/50 uppercase tracking-widest">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                         </div>
                    )}

                    {/* PERSONAS - Minimal Cards */}
                    {slide.type === 'personas' && (
                        <div className="w-full">
                             <h2 className="text-4xl md:text-6xl font-black mb-16">{slide.title}</h2>
                             <div className="flex flex-wrap justify-center gap-4">
                                {slide.content.map((p, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                                        className="w-48 h-64 bg-gradient-to-b from-white/10 to-transparent rounded-2xl border border-white/10 flex flex-col items-center justify-center p-4 hover:shadow-2xl transition-all"
                                    >
                                        <div className={`w-12 h-12 rounded-full mb-4 ${['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'][i]} shadow-lg`} />
                                        <h3 className="text-xl font-bold mb-2">{p.role}</h3>
                                        <p className="text-xs text-white/50 leading-tight">{p.desc}</p>
                                    </motion.div>
                                ))}
                             </div>
                        </div>
                    )}

                    {/* FLOW - Steps */}
                    {slide.type === 'flow' && (
                        <div>
                             <h2 className="text-4xl md:text-6xl font-black mb-16">{slide.title}</h2>
                             <div className="flex flex-col md:flex-row gap-4 items-center">
                                {slide.content.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <motion.div 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.2, type: "spring" }}
                                            className="px-6 py-4 bg-white text-black font-black rounded-xl text-lg md:text-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
                                        >
                                            {step}
                                        </motion.div>
                                        {i !== slide.content.length - 1 && (
                                            <motion.div 
                                                initial={{ width: 0 }} animate={{ width: "2rem" }} transition={{ delay: i * 0.2 + 0.2 }}
                                                className="h-1 bg-white/20 hidden md:block" // Horizontal line
                                            />
                                        )}
                                        {i !== slide.content.length -1 && (
                                            <div className="w-1 h-8 bg-white/20 md:hidden" /> // Vertical line mobile
                                        )}
                                    </React.Fragment>
                                ))}
                             </div>
                        </div>
                    )}

                    {/* TECH STACK - Bubbles */}
                    {slide.type === 'tech_stack' && (
                        <div className="w-full">
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">MERN</h2>
                             <div className="flex flex-wrap justify-center gap-8">
                                {slide.content.map((stack, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-md shadow-xl"
                                    >
                                        <div className="text-blue-400 mb-2">{React.cloneElement(stack.icon, { size: 32 })}</div>
                                        <div className="font-bold text-white/50 text-xs uppercase">{stack.category}</div>
                                        <div className="font-black text-xl md:text-2xl">{stack.tech}</div>
                                    </motion.div>
                                ))}
                             </div>
                        </div>
                    )}

                    {/* GOD MODE - Pulse */}
                    {slide.type === 'god_mode' && (
                         <div className="relative">
                            <motion.div 
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }} 
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl -z-10"
                            />
                            <ShieldAlert size={120} className="text-white mx-auto mb-8" />
                            <h2 className="text-6xl md:text-[8rem] font-black leading-none tracking-tighter">GOD<br/>MODE</h2>
                        </div>
                    )}

                    {/* OUTRO */}
                    {slide.type === 'outro' && (
                        <div>
                             <motion.h2 
                                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="text-6xl md:text-9xl font-black mb-8"
                             >
                                <span className="text-blue-500">Launch.</span>
                             </motion.h2>
                             <button className="px-12 py-4 bg-white text-black font-black text-2xl rounded-full hover:scale-105 hover:bg-blue-500 hover:text-white transition-all">
                                START DEMO
                             </button>
                        </div>
                    )}

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Presentation;
