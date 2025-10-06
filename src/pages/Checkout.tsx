import CheckoutLayout from '../layout/CheckoutLayout';
import OrderSummary from '../components/OrderSummary';
import Label from '../ui/Label';
import InputField from '../ui/InputField';
import Select from '../ui/Select';

import { FaWallet } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { HiCreditCard, HiSparkles } from "react-icons/hi";
import { RiBankFill } from 'react-icons/ri';

export default function CheckoutPage() {
    return (
        <CheckoutLayout>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Section - Form */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Personal Information */}
                        <div className="bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <BsShieldCheck className="w-6 h-6" />
                                    Informasi Pribadi
                                </h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <Label>Nama Lengkap</Label>
                                    <InputField placeholder='Masukkan nama lengkap' />
                                </div>
                                <div>
                                    <Label>E-Mail</Label>
                                    <InputField placeholder='email@example.com' />
                                </div>
                            </div>
                        </div>

                        {/* Select Plan */}
                        <div className="bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <HiSparkles className="w-6 h-6" />
                                    Pilih Paket
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Pilih Paket</Label>
                                        <Select>
                                            <option value="">Free {"( 5 GB + 1 Project )"}</option>
                                            <option value="">Basic {"( 100 GB + 5 Project )"}</option>
                                            <option value="">Pro {"( 500 GB + 20 Project )"}</option>
                                            <option value="">Business {"( 2TB + Unlimited Project )"}</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Durasi</Label>
                                        <Select>
                                            <option value="">1 Bulan</option>
                                            <option value="">3 Bulan</option>
                                            <option value="">1 Tahun</option>
                                            <option value="">2 Tahun</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <MdPayment className="w-6 h-6" />
                                    Metode Pembayaran
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-3">
                                    {/* Metode: Kartu Kredit */}
                                    <label htmlFor="credit-card" className='cursor-pointer w-full p-4 rounded-md border-2 border-slate-200 transition-all text-left flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-lg flex items-center justify-center'>
                                            <HiCreditCard className='w-12 h-12 text-slate-400' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">Kartu Kredit</h3>
                                            <p className="text-sm text-gray-600">Visa, Mastercard, JCB</p>
                                        </div>
                                        <input type="radio" name="paymentMethod" id="credit-card" className="accent-blue-500" />
                                    </label>

                                    {/* Metode: Virtual Account */}
                                    <label htmlFor="virtual-account" className='cursor-pointer w-full p-4 rounded-md border-2 border-slate-200 transition-all text-left flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-lg flex items-center justify-center'>
                                            <RiBankFill className='w-12 h-12 text-slate-400' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">Virtual Account</h3>
                                            <p className="text-sm text-gray-600">BCA, BNI, Mandiri, dll</p>
                                        </div>
                                        <input type="radio" name="paymentMethod" id="virtual-account" className="accent-blue-500" />
                                    </label>

                                    {/* Metode: E-Wallet */}
                                    <label htmlFor="e-wallet" className='cursor-pointer w-full p-4 rounded-md border-2 border-slate-200 transition-all text-left flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-lg flex items-center justify-center'>
                                            <FaWallet className='w-12 h-12 text-slate-400' />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">E-Wallet</h3>
                                            <p className="text-sm text-gray-600">Dana, OVO, GoPay</p>
                                        </div>
                                        <input type="radio" name="paymentMethod" id="e-wallet" className="accent-blue-500" />
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <OrderSummary
                        name='John Doe'
                        email='zZ0aI@example.com'
                        plan='Basic'
                        duration={12}
                        basePrice={10000}
                        totalMonths={12}
                        total={10000}
                    />

                </div>
            </div>
        </CheckoutLayout>
    );
}