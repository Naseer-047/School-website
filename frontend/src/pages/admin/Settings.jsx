import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Globe, School, Save, ChevronRight } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('school');

    const tabs = [
        { id: 'school', label: 'School profile', icon: <School size={18} /> },
        { id: 'security', label: 'Security & Auth', icon: <Shield size={18} /> },
        { id: 'notifications', label: 'System alerts', icon: <Bell size={18} /> },
        { id: 'localization', label: 'Country & Language', icon: <Globe size={18} /> },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
                <p className="text-gray-400">Configure school details, security protocols, and system-wide preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs Sidebar */}
                <div className="lg:w-64 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                                activeTab === tab.id 
                                ? 'bg-primary text-white font-bold' 
                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                {tab.icon}
                                <span className="text-sm">{tab.label}</span>
                            </div>
                            <ChevronRight size={14} className={activeTab === tab.id ? 'opacity-100' : 'opacity-0'} />
                        </button>
                    ))}
                </div>

                {/* Settings Form Content */}
                <div className="flex-1 bg-surface border border-white/5 rounded-3xl p-8">
                    {activeTab === 'school' && (
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">School Profile</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormGroup label="School Name" placeholder="Delhi Public School, Mumbai" />
                                <FormGroup label="School Code" placeholder="DPS-MUM-047" />
                                <FormGroup label="Primary Email" placeholder="admin@dpsmumbai.edu.in" />
                                <FormGroup label="Contact Number" placeholder="+91 22 2345 6789" />
                                <div className="md:col-span-2">
                                     <label className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-2">School Address</label>
                                     <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary h-24" placeholder="Sector 45, Nerul, Navi Mumbai, Maharashtra 400706"></textarea>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-between">
                                 <div>
                                    <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-tight">Accreditation status</h4>
                                    <p className="text-xs text-gray-500">Enable automatic accreditation display on landing page footer</p>
                                 </div>
                                 <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner shadow-black/20">
                                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                 </div>
                            </div>
                        </div>
                    )}

                    {activeTab !== 'school' && (
                        <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 opacity-30 italic font-medium">
                             <SettingsIcon size={48} />
                             <p>Detailed {activeTab} settings module is ready for backend integration</p>
                        </div>
                    )}

                    <div className="mt-12 flex justify-end">
                        <MagneticButton className="flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30 hover:opacity-90 transition-all">
                             <Save size={18} /> Update Settings
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FormGroup = ({ label, placeholder }) => (
    <div className="space-y-2">
        <label className="text-xs text-gray-500 font-bold uppercase tracking-widest block">{label}</label>
        <input 
            type="text" 
            placeholder={placeholder} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-all"
        />
    </div>
);

export default Settings;
