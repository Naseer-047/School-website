import React from 'react';
import { 
    Users, 
    GraduationCap, 
    BookOpen, 
    CreditCard, 
    BarChart3, 
    Bell, 
    Calendar, 
    FileText,
    Shield,
    Smartphone,
    Clock,
    Award
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Student Management",
            description: "Comprehensive student database with profiles, attendance tracking, and academic records. Manage admissions, transfers, and student information all in one place.",
            color: "blue"
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Teacher Portal",
            description: "Dedicated portal for teachers to manage classes, upload assignments, track student progress, and communicate with parents efficiently.",
            color: "purple"
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Academic Planning",
            description: "Create and manage curriculum, timetables, exam schedules, and syllabus. Track academic performance with detailed analytics and reports.",
            color: "green"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Fee Management",
            description: "Automated fee collection, payment tracking, invoice generation, and financial reporting. Support for multiple payment methods and installments.",
            color: "orange"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics & Reports",
            description: "Real-time dashboards with insights on attendance, performance, revenue, and more. Generate custom reports for data-driven decisions.",
            color: "pink"
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Communication Hub",
            description: "Send announcements, notices, and alerts to students, parents, and staff. SMS and email integration for instant notifications.",
            color: "yellow"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Attendance Tracking",
            description: "Digital attendance system with biometric integration support. Track daily, monthly, and yearly attendance with automated reports.",
            color: "indigo"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Exam Management",
            description: "Create exam schedules, manage question papers, publish results, and generate mark sheets. Support for online and offline exams.",
            color: "red"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Role-Based Access",
            description: "Secure access control with different permission levels for admins, teachers, students, and parents. Protect sensitive data with encryption.",
            color: "teal"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile Responsive",
            description: "Access the platform from any device - desktop, tablet, or smartphone. Native mobile app experience with offline support.",
            color: "cyan"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Timetable Management",
            description: "Create and manage class schedules, teacher assignments, and room allocations. Automatic conflict detection and resolution.",
            color: "violet"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Certification & Awards",
            description: "Generate certificates, transfer certificates, and award letters. Maintain digital records of all achievements and credentials.",
            color: "emerald"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Platform Features</h1>
                <p className="text-sm text-gray-400">
                    Explore the comprehensive features designed to streamline your school management operations
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="bg-surface border border-white/5 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
                    >
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-500 mb-4 group-hover:scale-110 transition-transform`}>
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                <h2 className="text-lg font-bold text-white mb-3">Why Choose EduPrime?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <p><span className="font-semibold text-white">Cloud-Based:</span> Access your data anytime, anywhere with 99.9% uptime guarantee</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <p><span className="font-semibold text-white">Secure:</span> Bank-level encryption and regular backups to protect your data</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <p><span className="font-semibold text-white">Scalable:</span> Grows with your institution from 100 to 10,000+ students</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <p><span className="font-semibold text-white">Support:</span> 24/7 customer support with dedicated account manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
