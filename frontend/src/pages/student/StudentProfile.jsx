import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Edit2, Camera, Save } from 'lucide-react';

const StudentProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const studentProfile = {
        // Personal Information
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        fullName: "John Michael Doe",
        dateOfBirth: "March 15, 2008",
        age: "16 years",
        gender: "Male",
        bloodGroup: "O+",
        nationality: "American",
        religion: "Christian",
        
        // Contact Information
        email: "john.doe@student.school.com",
        phone: "+1 (555) 123-4567",
        address: "1234 Oak Street, Apartment 5B",
        city: "San Francisco",
        state: "California",
        zipCode: "94102",
        
        // Academic Information
        studentId: "2024-STU-1234",
        grade: "10th Grade",
        section: "A",
        rollNumber: "25",
        admissionDate: "August 1, 2020",
        currentGPA: "3.8",
        
        // Parent/Guardian Information
        fatherName: "Michael Doe",
        fatherOccupation: "Software Engineer",
        fatherPhone: "+1 (555) 987-6543",
        motherName: "Sarah Doe",
        motherOccupation: "Teacher",
        motherPhone: "+1 (555) 987-6544",
        guardianEmail: "parents.doe@email.com",
        
        // Emergency Contact
        emergencyContact: "Robert Smith (Uncle)",
        emergencyPhone: "+1 (555) 111-2222",
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
                    <p className="text-gray-400">View and manage your personal information</p>
                </div>
                <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
                >
                    {isEditing ? (
                        <>
                            <Save size={18} />
                            <span>Save Changes</span>
                        </>
                    ) : (
                        <>
                            <Edit2 size={18} />
                            <span>Edit Profile</span>
                        </>
                    )}
                </button>
            </div>

            {/* Profile Card */}
            <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
                {/* Cover Image */}
                <div className="h-32 bg-gradient-to-r from-primary to-accent"></div>
                
                {/* Profile Info */}
                <div className="px-8 pb-8">
                    <div className="flex flex-col md:flex-row gap-6 -mt-16 relative">
                        {/* Profile Photo */}
                        <div className="relative">
                            <img 
                                src={studentProfile.photo} 
                                alt={studentProfile.fullName}
                                className="w-32 h-32 rounded-2xl border-4 border-surface object-cover shadow-xl"
                            />
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-lg text-white hover:bg-primary-dark transition-colors">
                                    <Camera size={16} />
                                </button>
                            )}
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1 mt-4">
                            <h2 className="text-2xl font-bold text-white mb-1">{studentProfile.fullName}</h2>
                            <p className="text-gray-400 mb-3">{studentProfile.grade} - Section {studentProfile.section}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span>Student ID: {studentProfile.studentId}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <BookOpen className="w-4 h-4 text-primary" />
                                    <span>GPA: {studentProfile.currentGPA}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>Joined: {studentProfile.admissionDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Personal Information */}
                <div className="bg-surface border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <User className="w-5 h-5 text-blue-500" />
                        </div>
                        <h3 className="font-bold text-lg text-white">Personal Information</h3>
                    </div>
                    <div className="space-y-4">
                        <InfoRow label="Full Name" value={studentProfile.fullName} />
                        <InfoRow label="Date of Birth" value={studentProfile.dateOfBirth} />
                        <InfoRow label="Age" value={studentProfile.age} />
                        <InfoRow label="Gender" value={studentProfile.gender} />
                        <InfoRow label="Blood Group" value={studentProfile.bloodGroup} />
                        <InfoRow label="Nationality" value={studentProfile.nationality} />
                        <InfoRow label="Religion" value={studentProfile.religion} />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-surface border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                            <Mail className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="font-bold text-lg text-white">Contact Information</h3>
                    </div>
                    <div className="space-y-4">
                        <InfoRow label="Email" value={studentProfile.email} icon={<Mail className="w-4 h-4" />} />
                        <InfoRow label="Phone" value={studentProfile.phone} icon={<Phone className="w-4 h-4" />} />
                        <InfoRow label="Address" value={studentProfile.address} icon={<MapPin className="w-4 h-4" />} />
                        <InfoRow label="City" value={studentProfile.city} />
                        <InfoRow label="State" value={studentProfile.state} />
                        <InfoRow label="ZIP Code" value={studentProfile.zipCode} />
                    </div>
                </div>

                {/* Academic Information */}
                <div className="bg-surface border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <BookOpen className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="font-bold text-lg text-white">Academic Information</h3>
                    </div>
                    <div className="space-y-4">
                        <InfoRow label="Student ID" value={studentProfile.studentId} />
                        <InfoRow label="Grade" value={studentProfile.grade} />
                        <InfoRow label="Section" value={studentProfile.section} />
                        <InfoRow label="Roll Number" value={studentProfile.rollNumber} />
                        <InfoRow label="Admission Date" value={studentProfile.admissionDate} />
                        <InfoRow label="Current GPA" value={studentProfile.currentGPA} />
                    </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="bg-surface border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <Users className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-bold text-lg text-white">Parent/Guardian Information</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="pb-4 border-b border-white/5">
                            <p className="text-xs text-gray-500 mb-2">Father's Details</p>
                            <InfoRow label="Name" value={studentProfile.fatherName} />
                            <InfoRow label="Occupation" value={studentProfile.fatherOccupation} />
                            <InfoRow label="Phone" value={studentProfile.fatherPhone} />
                        </div>
                        <div className="pb-4 border-b border-white/5">
                            <p className="text-xs text-gray-500 mb-2">Mother's Details</p>
                            <InfoRow label="Name" value={studentProfile.motherName} />
                            <InfoRow label="Occupation" value={studentProfile.motherOccupation} />
                            <InfoRow label="Phone" value={studentProfile.motherPhone} />
                        </div>
                        <InfoRow label="Guardian Email" value={studentProfile.guardianEmail} />
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-surface border border-white/5 rounded-xl p-6 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                            <Phone className="w-5 h-5 text-red-500" />
                        </div>
                        <h3 className="font-bold text-lg text-white">Emergency Contact</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoRow label="Contact Person" value={studentProfile.emergencyContact} />
                        <InfoRow label="Emergency Phone" value={studentProfile.emergencyPhone} />
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper Component for Info Rows
const InfoRow = ({ label, value, icon }) => (
    <div className="flex items-start justify-between py-2">
        <div className="flex items-center gap-2">
            {icon && <span className="text-gray-500">{icon}</span>}
            <span className="text-sm text-gray-400">{label}</span>
        </div>
        <span className="text-sm text-white font-medium text-right">{value}</span>
    </div>
);

export default StudentProfile;
