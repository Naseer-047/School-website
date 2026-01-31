import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Edit2, Camera, Save } from 'lucide-react';

import api from '../../api/axios';

const StudentProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);

    React.useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) return;
                const response = await api.get(`/students/${userId}`);
                setProfile(response.data);
            } catch (error) {
                console.error("Failed to load profile:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) return <div className="text-white p-8">Loading profile...</div>;
    if (!profile) return (
        <div className="p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Profile Not Found</h3>
            <p className="text-gray-400 mb-4">We couldn't load your profile details. This usually happens if your session is outdated.</p>
            <button 
                onClick={() => {
                    localStorage.clear();
                    window.location.href = '/login';
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
                Logout & Refresh Session
            </button>
        </div>
    );

    // Helper to format date safely
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
                    <p className="text-gray-400">View and manage your personal information</p>
                </div>
                {/* Editing disabled for now as logic differs for students */}
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
                            <div className="w-32 h-32 rounded-2xl border-4 border-surface bg-gray-800 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                                {profile.full_name?.charAt(0)}
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1 mt-4">
                            <h2 className="text-2xl font-bold text-white mb-1">{profile.full_name}</h2>
                            <p className="text-gray-400 mb-3">{profile.grade || 'Grade N/A'} - Section {profile.section || 'N/A'}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Award className="w-4 h-4 text-primary" />
                                    <span>Student ID: {profile.reg_no || 'N/A'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>Joined: {formatDate(profile.admission_date)}</span>
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
                        <InfoRow label="Full Name" value={profile.full_name} />
                        <InfoRow label="Date of Birth" value={formatDate(profile.dob)} />
                        <InfoRow label="Gender" value={profile.gender || 'N/A'} />
                        <InfoRow label="Blood Group" value={profile.blood_group || 'N/A'} />
                        {/* Nationality/Religion not yet in DB schema */}
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
                        <InfoRow label="Email" value={profile.email} icon={<Mail className="w-4 h-4" />} />
                        <InfoRow label="Address" value={profile.address || 'N/A'} icon={<MapPin className="w-4 h-4" />} />
                        <InfoRow label="City" value={profile.city || 'N/A'} />
                        <InfoRow label="State" value={profile.state || 'N/A'} />
                        <InfoRow label="ZIP Code" value={profile.zip_code || 'N/A'} />
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
                        <InfoRow label="Student ID (USN)" value={profile.reg_no || 'N/A'} />
                        <InfoRow label="Grade" value={profile.grade} />
                        <InfoRow label="Section" value={profile.section || 'N/A'} />
                        <InfoRow label="Admission Date" value={formatDate(profile.admission_date)} />
                        <InfoRow label="School Code" value={profile.school_code} />
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
                        <InfoRow label="Guardian Name" value={profile.parent_name || 'N/A'} />
                        <InfoRow label="Guardian Email" value={profile.parent_email || 'N/A'} />
                        <InfoRow label="Guardian Phone" value={profile.parent_phone || 'N/A'} />
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
