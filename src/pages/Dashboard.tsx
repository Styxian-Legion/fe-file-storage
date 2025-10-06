import DashboardLayout from '../layout/DashboardLayout';
import TabProject from '../components/TabProject';
import TabPayment from '../components/TabPayment';
import TabSettings from '../components/TabSettings';
import TabUsers from '../components/TabUsers';

import { useState } from 'react';
import {  MdPayment, MdSettings, MdPeople, MdDashboard } from "react-icons/md";

// Main Dashboard Component
export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('projects');
    
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
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

            <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
                {activeTab === 'projects' && <TabProject />}
                {activeTab === 'payments' && <TabPayment payments={payments} />}
                {activeTab === 'settings' && <TabSettings />}
                {activeTab === 'users' && <TabUsers users={users} />}
            </div>
        </DashboardLayout>
    );
}