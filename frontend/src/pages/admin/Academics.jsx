import React from 'react';
import { BookOpen, Users, Clock, Plus, MoreVertical, Book } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const classes = [
    { name: "Class 10 - A", teacher: "Mr. Rajesh Khanna", students: 42, subjects: 8, room: "201" },
    { name: "Class 10 - B", teacher: "Ms. Anjali Verma", students: 38, subjects: 8, room: "202" },
    { name: "Class 11 - A", teacher: "Dr. Vikram Seth", students: 45, subjects: 10, room: "301" },
    { name: "Class 12 - A", teacher: "Mrs. Kavita Iyer", students: 40, subjects: 12, room: "401" },
];

const subjects = [
    { name: "Mathematics", code: "MATH-XII", department: "Science", credits: 4 },
    { name: "Physics", code: "PHYS-XII", department: "Science", credits: 4 },
    { name: "English Literature", code: "ENG-XII", department: "Humanities", credits: 3 },
    { name: "Computer Science", code: "CS-XII", department: "IT", credits: 5 },
];

const Academics = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Academics Management</h1>
                    <p className="text-gray-400">Manage school classes, subjects, departments, and course structures.</p>
                </div>
                <div className="flex gap-3">
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                        Add Subject
                    </MagneticButton>
                    <MagneticButton className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                        <Plus size={18} /> Create Class
                    </MagneticButton>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Classes Section */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Users className="text-primary" /> Active Classes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {classes.map((cls, i) => (
                            <div key={i} className="bg-surface border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{cls.name}</h3>
                                    <button className="text-gray-500 hover:text-white"><MoreVertical size={18} /></button>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Class Teacher</span>
                                        <span className="text-gray-300">{cls.teacher}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Students</span>
                                        <span className="text-white font-bold">{cls.students}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Location</span>
                                        <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md">Room {cls.room}</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                                     <Book size={14} className="text-primary" />
                                     <span className="text-xs text-gray-400">{cls.subjects} subjects assigned</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subjects Sidebar */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <BookOpen className="text-accent" /> Subjects
                    </h2>
                    <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
                        <div className="p-4 bg-white/5 border-b border-white/5">
                             <input type="text" placeholder="Search subjects..." className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs text-white" />
                        </div>
                        <div className="divide-y divide-white/5">
                            {subjects.map((sub, i) => (
                                <div key={i} className="p-4 hover:bg-white/5 transition-colors">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="font-bold text-sm text-white">{sub.name}</p>
                                        <span className="text-[10px] font-bold text-primary">{sub.code}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500 uppercase tracking-widest">{sub.department}</span>
                                        <span className="text-gray-400">{sub.credits} Credits</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full p-4 text-xs font-bold text-primary hover:bg-primary/10 transition-colors uppercase tracking-widest underline decoration-2 underline-offset-4">
                             View Full Curricullum
                        </button>
                    </div>

                    {/* Time Table Quick Link */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-xl">
                         <div className="flex items-center gap-3 mb-4">
                             <Clock className="w-8 h-8 opacity-50" />
                             <h3 className="font-bold">Master Timetable</h3>
                         </div>
                         <p className="text-white/80 text-sm mb-6">Coordinate school-wide schedules and room allocations efficiently.</p>
                         <button className="w-full py-2 bg-white text-indigo-600 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors">
                             Manage Schedule
                         </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
