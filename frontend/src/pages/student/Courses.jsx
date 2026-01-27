import React from 'react';
import { Book, User, Clock, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced Mathematics",
    code: "MATH401",
    teacher: "Dr. Robert Chen",
    progress: 75,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Quantum Physics",
    code: "PHYS302",
    teacher: "Sarah Williams",
    progress: 45,
    image: "https://images.unsplash.com/photo-1636466484292-713cf86be6cf?auto=format&fit=crop&q=80&w=400",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Organic Chemistry",
    code: "CHEM205",
    teacher: "James Anderson",
    progress: 60,
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d9992?auto=format&fit=crop&q=80&w=400",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    title: "Modern English Literature",
    code: "LIT101",
    teacher: "Emily Martinez",
    progress: 90,
    image: "https://images.unsplash.com/photo-1491843351663-7c316232eb21?auto=format&fit=crop&q=80&w=400",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    title: "Computer Science II",
    code: "CS202",
    teacher: "Michael Brown",
    progress: 30,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
    color: "from-cyan-500 to-blue-600"
  }
];

const Courses = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Courses</h1>
                <p className="text-gray-400">View your enrolled subjects and track your learning progress.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-surface border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
                        {/* Course Header Image */}
                        <div className="h-40 relative overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                            <div className={`absolute bottom-4 left-4 inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${course.color}`}>
                                {course.code}
                            </div>
                        </div>

                        {/* Course Content */}
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{course.title}</h3>
                            
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <User size={16} className="text-primary" />
                                    <span>{course.teacher}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Clock size={16} className="text-primary" />
                                    <span>Tuesday & Thursday, 10:00 AM</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500 uppercase font-bold tracking-widest">Progress</span>
                                    <span className="text-white font-bold">{course.progress}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1000`} 
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white/5 border border-white/5 rounded-xl text-sm font-bold text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex items-center justify-center gap-2">
                                Enter Classroom
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
