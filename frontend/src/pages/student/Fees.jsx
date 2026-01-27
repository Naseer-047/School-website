import React from 'react';
import { DollarSign, CreditCard, Download, ExternalLink, Calendar, Check } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';

const transactions = [
    { id: "TXN1024", date: "Jan 15, 2024", type: "Tuition Fee", method: "Credit Card", amount: "$1,200", status: "Paid" },
    { id: "TXN1023", date: "Dec 10, 2023", type: "Library Fee", method: "Bank Transfer", amount: "$50", status: "Paid" },
    { id: "TXN1022", date: "Nov 15, 2023", type: "Tuition Fee", method: "Credit Card", amount: "$1,200", status: "Paid" },
    { id: "TXN1021", date: "Oct 05, 2023", type: "Examination Fee", method: "Debit Card", amount: "$150", status: "Paid" },
];

const Fees = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">My Fees</h1>
                    <p className="text-gray-400">View your fee status, payment history, and download receipts.</p>
                </div>
            </div>

            {/* Fee Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {/* Outstanding Card */}
                 <div className="lg:col-span-1 bg-surface border border-white/5 rounded-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 h-full flex flex-col justify-center opacity-10">
                        <CreditCard size={120} />
                    </div>
                    <div className="p-8 relative z-10 flex flex-col h-full">
                        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Outstanding Fees</p>
                        <h2 className="text-5xl font-black text-white">$450.00</h2>
                        <p className="text-orange-500 text-xs font-bold mt-2 flex items-center gap-1">
                             <Calendar size={12} /> Due on February 15, 2024
                        </p>
                        <MagneticButton className="mt-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                             Pay Now <ExternalLink size={16} />
                        </MagneticButton>
                    </div>
                 </div>

                 {/* Fee Structure Summary */}
                 <div className="lg:col-span-2 bg-surface border border-white/5 p-8 rounded-2xl">
                    <h3 className="font-bold text-lg mb-6">Annual Fee Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Total Fee</p>
                             <p className="text-2xl font-black text-white">$15,000</p>
                        </div>
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Paid Amount</p>
                             <p className="text-2xl font-black text-green-500 font-bold">$12,500</p>
                        </div>
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Balance</p>
                             <p className="text-2xl font-black text-orange-500 font-bold">$2,500</p>
                        </div>
                    </div>
                    
                    {/* Visual Progress Bar */}
                    <div className="mt-8 space-y-2">
                         <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500 uppercase font-bold tracking-widest">Payment Progress</span>
                            <span className="text-white font-bold">83.3% Paid</span>
                         </div>
                         <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-accent w-[83.3%]"></div>
                         </div>
                    </div>
                 </div>
            </div>

            {/* Payment History */}
            <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h3 className="font-bold text-lg">Transaction History</h3>
                    <button className="text-sm text-primary font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider">Transaction ID</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider">Date</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider">Type</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider">Method</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-center">Amount</th>
                                <th className="p-5 text-xs font-bold uppercase text-gray-400 tracking-wider text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {transactions.map((txn, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-5">
                                        <p className="font-mono text-sm text-gray-300">{txn.id}</p>
                                    </td>
                                    <td className="p-5 text-sm font-medium text-gray-400">{txn.date}</td>
                                    <td className="p-5 text-sm font-medium text-white">{txn.type}</td>
                                    <td className="p-5 text-sm font-medium text-gray-400">{txn.method}</td>
                                    <td className="p-5 text-center text-sm font-black text-white">{txn.amount}</td>
                                    <td className="p-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{txn.status}</span>
                                            <button className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                                                 <Download size={16} />
                                            </button>
                                        </div>
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

export default Fees;
