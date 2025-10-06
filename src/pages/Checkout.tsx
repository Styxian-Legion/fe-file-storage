import React, { useState, useEffect } from 'react';
import { FaCloud, FaCreditCard, FaTag, FaCheckCircle, FaCalendar, FaWallet } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

type Plan = {
    name: string;
    storage: string;
    price: number;
};


export default function CheckoutPage() {
    const plans: Record<string, Plan> = {
        free: { name: 'Free', price: 0, storage: '5 GB' },
        basic: { name: 'Basic', price: 49000, storage: '100 GB' },
        pro: { name: 'Pro', price: 149000, storage: '500 GB' },
        business: { name: 'Business', price: 399000, storage: '2 TB' }
    };

    const durations: any = [
        { value: 1, label: '1 Bulan', discount: 0 },
        { value: 3, label: '3 Bulan', discount: 10 },
        { value: 12, label: '1 Tahun', discount: 20 },
        { value: 24, label: '2 Tahun', discount: 30 }
    ];

    const paymentMethods: any = [
        { id: 'credit-card', name: 'Credit Card', icon: FaCreditCard, description: 'Visa, Mastercard, AMEX' },
        { id: 'bank-transfer', name: 'Bank Transfer', icon: MdPayment, description: 'BCA, Mandiri, BNI' },
        { id: 'e-wallet', name: 'E-Wallet', icon: FaWallet, description: 'GoPay, OVO, Dana' }
    ];

    const [formData, setFormData] = useState<any>({
        name: '',
        email: '',
        selectedPlan: 'pro',
        duration: 1,
        paymentMethod: 'credit-card',
        couponCode: ''
    });

    const [couponApplied, setCouponApplied] = useState<boolean>(false);
    const [couponDiscount, setCouponDiscount] = useState<number>(0);
    const [couponError, setCouponError] = useState('');

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'couponCode') {
            setCouponApplied(false);
            setCouponError('');
        }
    };

    const handlePlanSelect = (planKey: string) => {
        setFormData({
            ...formData,
            selectedPlan: planKey
        });
    };

    const handleDurationSelect = (duration: number) => {
        setFormData({
            ...formData,
            duration: duration
        });
    };

    const handlePaymentMethodSelect = (methodId: string) => {
        setFormData({
            ...formData,
            paymentMethod: methodId
        });
    };

    const applyCoupon = () => {
        const validCoupons: any = {
            'WELCOME20': 20,
            'SAVE30': 30,
            'FIRST50': 50
        };

        if (validCoupons[formData.couponCode.toUpperCase()]) {
            setCouponDiscount(validCoupons[formData.couponCode.toUpperCase()]);
            setCouponApplied(true);
            setCouponError('');
        } else if (formData.couponCode.trim() !== '') {
            setCouponError('Kode kupon tidak valid');
            setCouponApplied(false);
            setCouponDiscount(0);
        }
    };

    const calculatePrice = () => {
        const selectedPlanData = plans[formData.selectedPlan];
        const basePrice = selectedPlanData.price;
        const durationData = durations.find((d: { value: any; }) => d.value === formData.duration);

        // Calculate duration discount
        const priceWithDuration = basePrice * formData.duration;
        const durationDiscount = (priceWithDuration * durationData.discount) / 100;
        const subtotal = priceWithDuration - durationDiscount;

        // Calculate coupon discount
        const couponDiscountAmount = (subtotal * couponDiscount) / 100;
        const total = subtotal - couponDiscountAmount;

        return {
            basePrice,
            priceWithDuration,
            durationDiscount,
            subtotal,
            couponDiscountAmount,
            total,
            durationDiscountPercent: durationData.discount
        };
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    const handleCheckout = () => {
        if (!formData.name || !formData.email) {
            alert('Mohon lengkapi nama dan email Anda!');
            return;
        }
        alert('Checkout berhasil! Anda akan diarahkan ke halaman pembayaran.');
    };

    const prices = calculatePrice();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Header */}
            <div className="w-full bg-white shadow-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-3">
                        <FaCloud className="text-blue-600 text-4xl" />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">CloudVault Checkout</h1>
                            <p className="text-gray-600">Complete your subscription</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Section - Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Personal Information */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <BsShieldCheck className="w-6 h-6" />
                                    Informasi Pribadi
                                </h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full h-12 px-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full h-12 px-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Select Plan */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <HiSparkles className="w-6 h-6" />
                                    Pilih Paket
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {Object.entries(plans).map(([key, plan]) => (
                                        <button
                                            key={key}
                                            onClick={() => handlePlanSelect(key)}
                                            className={`p-4 rounded-xl border-2 transition-all text-left ${formData.selectedPlan === key
                                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                                                {formData.selectedPlan === key && (
                                                    <FaCheckCircle className="text-blue-500 w-5 h-5" />
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{plan.storage}</p>
                                            <p className="text-2xl font-bold text-gray-900">
                                                {formatPrice(plan.price)}
                                                <span className="text-sm font-normal text-gray-600">/bulan</span>
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Duration Selection */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaCalendar className="w-6 h-6" />
                                    Masa Aktif
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {durations.map((duration: { value: React.Key | null | undefined; discount: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                                        <button
                                            key={duration.value}
                                            onClick={() => handleDurationSelect(duration.value as number)}
                                            className={`p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden ${formData.duration === duration.value
                                                ? 'border-green-500 bg-green-50 shadow-md'
                                                : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {duration.discount as number > 0 && (
                                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                                    -{duration.discount}%
                                                </div>
                                            )}
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">{duration.label}</h3>
                                                    {duration.discount as number > 0 && (
                                                        <p className="text-sm text-green-600 font-semibold">
                                                            Hemat {duration.discount}%
                                                        </p>
                                                    )}
                                                </div>
                                                {formData.duration === duration.value && (
                                                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <MdPayment className="w-6 h-6" />
                                    Metode Pembayaran
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-3">
                                    {paymentMethods.map((method: { icon: any; id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {
                                        const IconComponent = method.icon;
                                        return (
                                            <button
                                                key={method.id}
                                                onClick={() => handlePaymentMethodSelect(method.id as string)}
                                                className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${formData.paymentMethod === method.id
                                                    ? 'border-orange-500 bg-orange-50 shadow-md'
                                                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                                                    }`}
                                            >
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${formData.paymentMethod === method.id
                                                    ? 'bg-orange-500'
                                                    : 'bg-gray-200'
                                                    }`}>
                                                    <IconComponent className={`w-6 h-6 ${formData.paymentMethod === method.id
                                                        ? 'text-white'
                                                        : 'text-gray-600'
                                                        }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900">{method.name}</h3>
                                                    <p className="text-sm text-gray-600">{method.description}</p>
                                                </div>
                                                {formData.paymentMethod === method.id && (
                                                    <FaCheckCircle className="text-orange-500 w-5 h-5" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden sticky top-4">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white">Ringkasan Pesanan</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                {/* Customer Info */}
                                <div className="space-y-2 pb-4 border-b border-gray-200">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Nama</span>
                                        <span className="font-semibold text-gray-900">
                                            {formData.name || '-'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Email</span>
                                        <span className="font-semibold text-gray-900 truncate ml-2">
                                            {formData.email || '-'}
                                        </span>
                                    </div>
                                </div>

                                {/* Plan Info */}
                                <div className="space-y-2 pb-4 border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Paket</span>
                                        <span className="font-bold text-gray-900">
                                            {plans[formData.selectedPlan].name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Storage</span>
                                        <span className="font-semibold text-gray-900">
                                            {plans[formData.selectedPlan].storage}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Masa Aktif</span>
                                        <span className="font-semibold text-gray-900">
                                            {durations.find((d: { value: any; }) => d.value === formData.duration)?.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Price Calculation */}
                                <div className="space-y-2 pb-4 border-b border-gray-200">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Harga per bulan</span>
                                        <span className="text-gray-900">{formatPrice(prices.basePrice)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Jumlah bulan</span>
                                        <span className="text-gray-900">× {formData.duration}</span>
                                    </div>
                                    {prices.durationDiscountPercent > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-green-600">Diskon durasi ({prices.durationDiscountPercent}%)</span>
                                            <span className="text-green-600">-{formatPrice(prices.durationDiscount)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between font-semibold pt-2">
                                        <span className="text-gray-700">Subtotal</span>
                                        <span className="text-gray-900">{formatPrice(prices.subtotal)}</span>
                                    </div>
                                </div>

                                {/* Coupon Section */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        <FaTag className="inline w-4 h-4 mr-2" />
                                        Kode Kupon
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            name="couponCode"
                                            value={formData.couponCode}
                                            onChange={handleInputChange}
                                            className="flex-1 h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm uppercase"
                                            placeholder="KUPON"
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            className="px-4 h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold text-sm transition-all"
                                        >
                                            Terapkan
                                        </button>
                                    </div>
                                    {couponApplied && (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                            <p className="text-sm text-green-700 font-semibold flex items-center gap-2">
                                                <FaCheckCircle className="w-4 h-4" />
                                                Kupon berhasil diterapkan! Diskon {couponDiscount}%
                                            </p>
                                        </div>
                                    )}
                                    {couponError && (
                                        <p className="text-sm text-red-600">{couponError}</p>
                                    )}
                                    {couponApplied && (
                                        <div className="flex justify-between text-sm pb-2">
                                            <span className="text-green-600">Diskon kupon ({couponDiscount}%)</span>
                                            <span className="text-green-600">-{formatPrice(prices.couponDiscountAmount)}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Total */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">Total</span>
                                        <span className="text-2xl font-bold text-indigo-600">
                                            {formatPrice(prices.total)}
                                        </span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={handleCheckout}
                                    className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    <FaCreditCard className="w-5 h-5" />
                                    Checkout Sekarang
                                </button>

                                {/* Security Note */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                    <p className="text-xs text-blue-700 flex items-center gap-2">
                                        <BsShieldCheck className="w-4 h-4" />
                                        Pembayaran Anda dilindungi dengan enkripsi SSL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}