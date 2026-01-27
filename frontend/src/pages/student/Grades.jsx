import React from 'react';
import { Award, Download, TrendingUp, Info } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const subjects = [
    { name: "Mathematics", midterm: 88, final: 92, lab: 95, grade: "A", status: "Passed" },
    { name: "Physics", midterm: 82, final: 85, lab: 90, grade: "A-", status: "Passed" },
    { name: "Chemistry", midterm: 75, final: 80, lab: 88, grade: "B+", status: "Passed" },
    { name: "English Literature", midterm: 90, final: 88, lab: "N/A", grade: "A", status: "Passed" },
    { name: "Computer Science", midterm: 95, final: 98, lab: 100, grade: "A+", status: "Passed" },
    { name: "Sanskrit/Hindi", midterm: 85, final: 82, lab: "N/A", grade: "A-", status: "Passed" },
];

const Grades = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Academic Grades</h1>
                    <p className="text-gray-400">View your detailed performance reports and semester transcripts.</p>
                </div>
                <MagneticButton className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                    <Download size={18} /> Download Transcript
                </MagneticButton>
            </div>

            {/* GPA Summary Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <Award className="w-10 h-10 text-primary mb-4" />
                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest font-bold">Current SGPA</p>
                        <h2 className="text-5xl font-black text-white">3.88</h2>
                        <div className="flex items-center gap-2 text-green-500 text-sm mt-4 font-bold">
                            <TrendingUp size={16} />
                            <span>+0.22 from last term</span>
                        </div>
                    </div>
                    {/* Abstract background element */}
                    <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/40 transition-colors"></div>
                </div>

                <div className="md:col-span-2 bg-surface border border-white/5 p-6 rounded-2xl flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-primary mb-4">
                        <Info size={20} />
                        <h3 className="font-bold">Semester Progress Insights</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        You are performing exceptional in <span className="text-white font-bold">Computer Science</span> and <span className="text-white font-bold">Mathematics</span>. 
                        Your focus on lab practicals has significantly boosted your overall average. Great job maintaining consistent 
                        performance across all core subjects!
                    </p>
                    <div className="mt-6 flex gap-4">
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[92%]"></div>
                        </div>
                        <span className="text-xs font-bold text-white whitespace-nowrap">92% Average</span>
                    </div>
                </div>
            </div>

            {/* Grades Table */}
            <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider">Subject</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-center">Midterm</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-center">Final</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-center">Lab/Internal</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-center">Grade</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {subjects.map((sub, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-5">
                                        <p className="font-bold text-white group-hover:text-primary transition-colors">{sub.name}</p>
                                    </td>
                                    <td className="p-5 text-center text-sm font-medium text-gray-300">{sub.midterm}</td>
                                    <td className="p-5 text-center text-sm font-medium text-gray-300">{sub.final}</td>
                                    <td className="p-5 text-center text-sm font-medium text-gray-300">{sub.lab}</td>
                                    <td className="p-5 text-center">
                                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-black text-lg ${
                                            sub.grade.startsWith('A') ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'
                                        }`}>
                                            {sub.grade}
                                        </span>
                                    </td>
                                    <td className="p-5 text-right">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-green-500 uppercase tracking-widest">
                                            {sub.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Grades;
