import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, Search, User, MoreHorizontal, TrendingUp, Users, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Dummy Data for Chart
const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 400 },
  { name: 'Fri', value: 700 },
  { name: 'Sat', value: 500 },
  { name: 'Sun', value: 800 },
];

const ProductShowcase = () => {
    const containerRef = useRef(null);
    const dashboardRef = useRef(null);
    const float1Ref = useRef(null);
    const float2Ref = useRef(null);
    const float3Ref = useRef(null);

    useEffect(() => {
        const dashboard = dashboardRef.current;
        
        // Tilt Effect on Scroll
        gsap.fromTo(dashboard, 
            { rotateX: 20, y: 100 },
            {
                rotateX: 0,
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "top 20%",
                    scrub: 1,
                }
            }
        );

        // Parallax Floating Elements
        gsap.to(float1Ref.current, {
            y: -50,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            }
        });

        gsap.to(float2Ref.current, {
            y: -80,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            }
        });
        
         gsap.to(float3Ref.current, {
            y: -30,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2.5,
            }
        });

    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-32 px-6 bg-gradient-to-b from-background to-[#111116] relative overflow-hidden perspective-1000">
            
            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience the <span className="text-gradient">Ultimate Control</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A centralized command center that gives you bird's-eye view of your entire institution performance in real-time.
                    </p>
                </div>

                {/* Dashboard Mockup Container */}
                <div ref={dashboardRef} className="relative z-10 w-full aspect-[16/9] bg-[#0f0f13] rounded-2xl border border-white/10 shadow-2xl shadow-primary/10 overflow-hidden transform-gpu">
                    
                    {/* Mock Toolbar */}
                    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/5 backdrop-blur-md">
                         <div className="flex bg-white/5 rounded-lg px-3 py-1.5 items-center w-64 text-gray-500 text-sm">
                             <Search className="w-4 h-4 mr-2" /> Search students, classes...
                         </div>
                         <div className="flex items-center gap-4 text-gray-400">
                             <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
                             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                                 RS
                             </div>
                         </div>
                    </div>

                    {/* Mock Content */}
                    <div className="p-6 grid grid-cols-12 gap-6 h-[calc(100%-3.5rem)] overflow-hidden">
                        
                        {/* Sidebar */}
                        <div className="col-span-2 hidden lg:flex flex-col gap-4 text-gray-400 text-sm font-medium border-r border-white/5 pr-4 h-full">
                             {['Dashboard', 'Students', 'Teachers', 'Classes', 'Exams', 'Finance', 'Settings'].map((item, i) => (
                                 <div key={i} className={`p-3 rounded-lg cursor-pointer ${i === 0 ? 'bg-primary/10 text-primary' : 'hover:bg-white/5'}`}>
                                     {item}
                                 </div>
                             ))}
                        </div>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            
                            {/* Stat Card 1 */}
                            <div className="bg-surface rounded-xl p-6 border border-white/5 col-span-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Students</p>
                                        <h3 className="text-3xl font-bold mt-1">2,543</h3>
                                    </div>
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                        <Users className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-center text-green-500 text-sm gap-1">
                                    <TrendingUp className="w-4 h-4" /> +12.5% vs last month
                                </div>
                            </div>

                             {/* Stat Card 2 */}
                             <div className="bg-surface rounded-xl p-6 border border-white/5 col-span-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Monthly Revenue</p>
                                        <h3 className="text-3xl font-bold mt-1">₹1,24,500</h3>
                                    </div>
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-center text-green-500 text-sm gap-1">
                                    <TrendingUp className="w-4 h-4" /> +5.2% vs last month
                                </div>
                            </div>

                             {/* Stat Card 3 */}
                             <div className="bg-surface rounded-xl p-6 border border-white/5 col-span-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm">Attendance Rate</p>
                                        <h3 className="text-3xl font-bold mt-1">96.8%</h3>
                                    </div>
                                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-center text-red-400 text-sm gap-1">
                                    <TrendingUp className="w-4 h-4 rotate-180" /> -0.4% vs last month
                                </div>
                            </div>

                            {/* Main Chart */}
                            <div className="bg-surface rounded-xl p-6 border border-white/5 col-span-1 lg:col-span-2 h-80">
                                <h4 className="font-semibold mb-6">Attendance Overview</h4>
                                <div className="w-full h-[80%]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                            <XAxis dataKey="name" stroke="#9ca3af" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                                            <YAxis stroke="#9ca3af" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                                            <Tooltip contentStyle={{backgroundColor: '#1f2937', border: 'none', borderRadius: '8px'}} labelStyle={{color: '#9ca3af'}} />
                                            <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                             {/* User List */}
                             <div className="bg-surface rounded-xl p-6 border border-white/5 col-span-1 h-80 overflow-hidden">
                                <h4 className="font-semibold mb-4">Recent Activities</h4>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((_, i) => (
                                        <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                                <User className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">New Student Registered</p>
                                                <p className="text-xs text-gray-500">2 mins ago</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                 {/* Floating Elements (Parallax) */}
                 <div ref={float1Ref} className="absolute -right-12 top-20 z-20 hidden md:block">
                     <div className="bg-[#1f2937] p-4 rounded-xl shadow-xl border border-white/10 w-64">
                         <div className="flex items-center gap-3 mb-3">
                             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                 <Users className="w-5 h-5" />
                             </div>
                             <div>
                                 <p className="text-sm text-gray-400">New Enrollments</p>
                                 <p className="text-xl font-bold">+128</p>
                             </div>
                         </div>
                         <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                             <div className="h-full bg-green-500 w-[70%]"></div>
                         </div>
                     </div>
                 </div>

                 <div ref={float2Ref} className="absolute -left-12 bottom-40 z-20 hidden md:block">
                     <div className="bg-[#1f2937] p-4 rounded-xl shadow-xl border border-white/10 w-56">
                         <div className="flex justify-between items-center mb-2">
                             <span className="text-sm font-medium">Exam Results</span>
                             <MoreHorizontal className="w-4 h-4 text-gray-400" />
                         </div>
                         <div className="flex items-end gap-2 h-20">
                             {[40, 60, 45, 80, 55, 75, 90].map((h, i) => (
                                 <div key={i} className="flex-1 bg-primary/20 rounded-t hover:bg-primary transition-colors" style={{height: `${h}%`}}></div>
                             ))}
                         </div>
                     </div>
                 </div>
                 
                 <div ref={float3Ref} className="absolute right-20 bottom-[-40px] z-20 hidden md:block">
                     <div className="glass p-4 rounded-full flex items-center gap-3 pr-8">
                         <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-sm font-medium">System Online • v2.4.0</span>
                     </div>
                 </div>

            </div>
        </section>
    );
};

export default ProductShowcase;
