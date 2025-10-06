import { useState } from 'react';
import { MdPayment, MdCheckCircle, MdPending, MdCancel, MdFilterList, MdSearch, MdDownload } from "react-icons/md";
import { FaDiamond, FaCalendar, FaCreditCard } from "react-icons/fa6";

export default function Payment() {
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Sample payment data
    const payments = [
        {
            id: 1,
            tier: 'Diamond Tier',
            amount: 50000,
            status: 'paid',
            date: '2025-10-01',
            method: 'Credit Card',
            invoice: 'INV-2025-001'
        },
        {
            id: 2,
            tier: 'Gold Tier',
            amount: 35000,
            status: 'paid',
            date: '2025-09-15',
            method: 'Bank Transfer',
            invoice: 'INV-2025-002'
        },
        {
            id: 3,
            tier: 'Silver Tier',
            amount: 20000,
            status: 'pending',
            date: '2025-10-05',
            method: 'E-Wallet',
            invoice: 'INV-2025-003'
        },
        {
            id: 4,
            tier: 'Platinum Tier',
            amount: 75000,
            status: 'failed',
            date: '2025-09-28',
            method: 'Credit Card',
            invoice: 'INV-2025-004'
        },
        {
            id: 5,
            tier: 'Diamond Tier',
            amount: 50000,
            status: 'paid',
            date: '2025-08-20',
            method: 'Bank Transfer',
            invoice: 'INV-2025-005'
        }
    ];

    const getStatusBadge = (status) => {
        const styles = {
            paid: 'bg-green-100 text-green-700 border-green-200',
            pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            failed: 'bg-red-100 text-red-700 border-red-200'
        };
        
        const icons = {
            paid: <MdCheckCircle className="w-4 h-4" />,
            pending: <MdPending className="w-4 h-4" />,
            failed: <MdCancel className="w-4 h-4" />
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${styles[status]}`}>
                {icons[status]}
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const filteredPayments = payments.filter(payment => {
        const matchesFilter = filter === 'all' || payment.status === filter;
        const matchesSearch = payment.tier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            payment.invoice.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const totalPaid = payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-10">
            <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col gap-6">
                
                {/* Header Section */}
                <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white shadow-xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Payment History</h1>
                            <p className="text-orange-50">Track all your transaction history</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[200px]">
                            <p className="text-sm text-orange-50 mb-1">Total Paid</p>
                            <p className="text-2xl font-bold">{formatCurrency(totalPaid)}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Successful</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {payments.filter(p => p.status === 'paid').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <MdCheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Pending</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {payments.filter(p => p.status === 'pending').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <MdPending className="w-6 h-6 text-yellow-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Failed</p>
                                <p className="text-2xl font-bold text-red-600">
                                    {payments.filter(p => p.status === 'failed').length}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <MdCancel className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl p-4 shadow-md border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="flex items-center gap-2">
                            <MdFilterList className="w-5 h-5 text-slate-500" />
                            <span className="text-sm font-medium text-slate-700">Filter by:</span>
                            <div className="flex gap-2">
                                {['all', 'paid', 'pending', 'failed'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setFilter(status)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                            filter === status
                                                ? 'bg-orange-500 text-white shadow-md'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative w-full md:w-80">
                            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by tier or invoice..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Payment List */}
                <div className="flex flex-col gap-3">
                    {filteredPayments.length === 0 ? (
                        <div className="bg-white rounded-xl p-12 text-center shadow-md border border-slate-200">
                            <MdPayment className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500">No payments found</p>
                        </div>
                    ) : (
                        filteredPayments.map((payment) => (
                            <div
                                key={payment.id}
                                className="bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    {/* Left Section */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                            <FaDiamond className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-lg font-bold text-slate-800">{payment.tier}</h2>
                                            <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                                                <span className="flex items-center gap-1">
                                                    <FaCalendar className="w-3 h-3" />
                                                    {formatDate(payment.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaCreditCard className="w-3 h-3" />
                                                    {payment.method}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle Section */}
                                    <div className="flex flex-col items-start md:items-end">
                                        <p className="text-2xl font-bold text-slate-800">
                                            {formatCurrency(payment.amount)}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">{payment.invoice}</p>
                                    </div>

                                    {/* Right Section */}
                                    <div className="flex items-center gap-3">
                                        {getStatusBadge(payment.status)}
                                        {payment.status === 'paid' && (
                                            <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                                                <MdDownload className="w-5 h-5 text-slate-600" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}