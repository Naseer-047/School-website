import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, FileText, Eye, ShieldAlert, BadgeCheck } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const SuperAdminDashboard = () => {
    const [pendingInstitutes, setPendingInstitutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedDoc, setSelectedDoc] = useState(null);

    useEffect(() => {
        fetchPending();
    }, []);

    const fetchPending = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/super-admin/pending-institutes', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            setPendingInstitutes(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async (adminId, action) => {
        try {
            const token = localStorage.getItem('token');
            const endpoint = action === 'approve' 
                ? `/api/super-admin/approve-institute/${adminId}`
                : `/api/super-admin/reject-institute/${adminId}`;
                
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                // Remove from list
                setPendingInstitutes(prev => prev.filter(i => i.admin_id !== adminId));
                setSelectedDoc(null); // Close modal if open
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-white italic">Platform Control Center</h1>
                    <p className="text-gray-400">Manage verification requests and system health</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <ShieldAlert className="text-primary" size={20} />
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">God Mode Active</span>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-surface border border-white/5 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileText className="text-gray-400" />
                        Pending Verifications
                        <span className="ml-2 px-2 py-0.5 bg-white/10 rounded-full text-xs text-white">{pendingInstitutes.length}</span>
                    </h2>

                    {loading ? (
                        <p className="text-gray-500">Scanning frequency...</p>
                    ) : pendingInstitutes.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            <BadgeCheck size={48} className="mx-auto mb-4 opacity-20" />
                            <p>All clear. No pending requests.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {pendingInstitutes.map((institute) => (
                                <div key={institute.admin_id} className="grid grid-cols-12 gap-4 items-center p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                                    <div className="col-span-3">
                                        <h3 className="font-bold text-white">{institute.school_name}</h3>
                                        <p className="text-xs text-gray-500">{institute.full_name}</p>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-sm text-gray-300">{institute.email}</p>
                                        <p className="text-xs text-gray-500">{institute.phone}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="text-xs font-mono bg-black/30 px-2 py-1 rounded inline-block text-gray-400">
                                            {institute.school_code}
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex justify-end gap-3">
                                        <button 
                                            onClick={() => setSelectedDoc(institute)}
                                            className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 flex items-center gap-2 transition-colors"
                                        >
                                            <Eye size={16} /> View Doc
                                        </button>
                                        <button 
                                            onClick={() => handleVerify(institute.admin_id, 'approve')}
                                            className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-500 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
                                        >
                                            <CheckCircle2 size={16} /> Verify
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Document Modal */}
            {selectedDoc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-surface border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
                        <div className="p-4 border-b border-white/5 flex justify-between items-center">
                            <h3 className="font-bold text-white">Verification Proof: {selectedDoc.school_name}</h3>
                            <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-white/5 rounded-full">
                                <XCircle size={20} className="text-gray-400" />
                            </button>
                        </div>
                        <div className="flex-1 p-4 bg-black/50 overflow-auto flex items-center justify-center">
                             {/* Assuming local setup, image might need full URL if proxy isn't handling it right or if it's an absolute path issue.
                                 Since we mounted /uploads, we can access it via /uploads/filename
                             */}
                             {selectedDoc.document_url.endsWith('.pdf') ? (
                                <iframe 
                                    src={`http://localhost:8000/uploads/${selectedDoc.document_url}`} 
                                    className="w-full h-full min-h-[500px]"
                                />
                             ) : (
                                <img 
                                    src={`http://localhost:8000/uploads/${selectedDoc.document_url}`} 
                                    alt="Proof" 
                                    className="max-w-full max-h-full rounded-lg"
                                />
                             )}
                        </div>
                        <div className="p-4 border-t border-white/5 flex justify-end gap-3 bg-surface">
                            <button 
                                onClick={() => handleVerify(selectedDoc.admin_id, 'reject')}
                                className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold rounded-xl transition-colors"
                            >
                                Reject
                            </button>
                            <MagneticButton 
                                onClick={() => handleVerify(selectedDoc.admin_id, 'approve')}
                                className="px-8 py-3 bg-green-500 text-black font-black rounded-xl hover:bg-green-400 transition-colors"
                            >
                                APPROVE & LAUNCH
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuperAdminDashboard;
