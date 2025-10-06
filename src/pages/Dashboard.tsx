import DashboardLayout from '../layout/DashboardLayout';
import TabProject from '../components/TabProject';

import { useState } from 'react';
import { FaTrash,  FaCrown, FaLock, FaUser, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {  MdPayment, MdSettings, MdPeople, MdDashboard } from "react-icons/md";

// TextField Component
function TextField({ placeholder, value, onChange, name, type = "text" }: any) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-12 px-4 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
        />
    );
}

// Main Dashboard Component
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('projects');
    const [formData, setFormData] = useState({
        projectName: '',
        cors: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Project created successfully!');
        setFormData({ ...formData, projectName: '', cors: '' });
    };

    const tabs = [
        { id: 'projects', label: 'Projects', icon: <MdDashboard className="w-5 h-5" /> },
        { id: 'payments', label: 'Payments', icon: <MdPayment className="w-5 h-5" /> },
        { id: 'settings', label: 'Settings', icon: <MdSettings className="w-5 h-5" /> },
        { id: 'users', label: 'Users', icon: <MdPeople className="w-5 h-5" /> }
    ];

    const payments = [
        { id: 1, tier: 'Diamond Tier', amount: 50000, status: 'paid', date: '2025-10-01', method: 'Credit Card' },
        { id: 2, tier: 'Gold Tier', amount: 35000, status: 'paid', date: '2025-09-15', method: 'Bank Transfer' },
        { id: 3, tier: 'Silver Tier', amount: 20000, status: 'pending', date: '2025-10-05', method: 'E-Wallet' }
    ];

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Free', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Premium', status: 'active' },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com', plan: 'Free', status: 'inactive' }
    ];

    return (
        <DashboardLayout>
            <div className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
                <div className="max-w-screen-2xl mx-auto px-4">
                    <div className="flex gap-2 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all border-b-2 whitespace-nowrap ${activeTab === tab.id
                                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 py-8">
                {activeTab === 'projects' && <TabProject />}

                {/* Tab 2: Payment History */}
                {activeTab === 'payments' && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <MdPayment className="w-7 h-7 text-orange-600" />
                            Payment History
                        </h2>
                        {payments.map(payment => (
                            <div key={payment.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                                            <MdPayment className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{payment.tier}</h3>
                                            <p className="text-sm text-gray-500">{payment.date} • {payment.method}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p className="text-2xl font-bold text-gray-900">Rp {payment.amount.toLocaleString()}</p>
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${payment.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {payment.status === 'paid' ? <FaCheckCircle className="inline mr-1" /> : null}
                                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tab 3: Settings */}
                {activeTab === 'settings' && (
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                            <MdSettings className="w-7 h-7 text-orange-600" />
                            Security Settings
                        </h2>
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaLock className="w-5 h-5" />
                                    Change Password
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Old Password</label>
                                    <TextField
                                        type="password"
                                        placeholder="Enter old password"
                                        value={formData.oldPassword}
                                        onChange={handleInputChange}
                                        name="oldPassword"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                                    <TextField
                                        type="password"
                                        placeholder="Enter new password"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        name="newPassword"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                                    <TextField
                                        type="password"
                                        placeholder="Confirm new password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        name="confirmPassword"
                                    />
                                </div>
                                <button className="w-full h-12 font-semibold bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 4: User Management */}
                {activeTab === 'users' && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <MdPeople className="w-7 h-7 text-orange-600" />
                            User Management
                        </h2>
                        {users.map(user => (
                            <div key={user.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                                            <FaUser className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                                                    {user.plan}
                                                </span>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {user.status === 'active' ? <FaCheckCircle className="inline mr-1" /> : <FaTimesCircle className="inline mr-1" />}
                                                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                                            <FaCrown className="w-4 h-4" />
                                            Update Plan
                                        </button>
                                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                                            <FaTrash className="w-4 h-4" />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}