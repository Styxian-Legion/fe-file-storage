import { useState } from 'react';

import Label from "../ui/Label"
import InputField from "../ui/InputField"
import TextArea from "../ui/TextArea"
import Button from "../ui/Button"

import { FaUser, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-indigo-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-blue-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-semibold">
                            Hubungi Kami
                        </span>
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Terhubung</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ada pertanyaan atau ingin bekerja sama? Kami siap membantu Anda kapan saja!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        {/* Address Card */}
                        <div className="bg-white rounded-md p-6 shadow-md border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-md flex items-center justify-center mb-4 shadow-md">
                                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Alamat Kantor</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Jl. Contoh No. 123<br />
                                Indonesia
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-md p-6 shadow-md border border-orange-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-md flex items-center justify-center mb-4 shadow-md">
                                <FaEnvelope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Kami</h3>
                            <a href="mailto:info@example.com" className="text-blue-500 hover:text-indigo-600 font-medium text-sm">
                                info@example.com
                            </a>
                            <br />
                            <a href="mailto:support@example.com" className="text-blue-500 hover:text-indigo-600 font-medium text-sm">
                                support@example.com
                            </a>
                        </div>

                        {/* Working Hours Card */}
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md p-6 shadow-md text-white">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center mb-4">
                                <FaClock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-md font-bold mb-3">Jam Operasional</h3>
                            <div className="space-y-2 text-sm text-orange-50">
                                <div className="flex justify-between">
                                    <span>Senin - Jumat</span>
                                    <span className="font-semibold">08:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sabtu</span>
                                    <span className="font-semibold">09:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Minggu</span>
                                    <span className="font-semibold">Tutup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-md shadow-md p-8 md:p-10 border border-orange-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
                                <p className="text-gray-600">Isi form di bawah ini dan kami akan segera menghubungi Anda</p>
                            </div>
                            <div className='space-y-4'>
                                {submitted == false && (
                                    <>
                                        <div>
                                            <Label htmlFor="fullName">Nama Lengkap</Label>
                                            <InputField
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                icon={<FaUser />}
                                                placeholder="Masukkan nama lengkap anda"
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="email">E-Mail</Label>
                                                <InputField
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    icon={<FaEnvelope />}
                                                    placeholder="email@example.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="phoneNumber">Nomer Telepon</Label>
                                                <InputField
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    icon={<FaEnvelope />}
                                                    placeholder="+62 xxx"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Pesan</Label>
                                            <TextArea />
                                        </div>
                                        <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                                            Kirim Pesan
                                        </Button>
                                    </>
                                )}
                                {submitted == true && (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                            <FaCheckCircle className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">Pesan Terkirim!</h3>
                                        <p className="text-gray-600 text-lg">
                                            Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}