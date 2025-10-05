import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaRocket, FaShieldAlt, FaDollarSign, FaCheck, FaTimes, FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';
import { MdSpeed, MdCloud } from 'react-icons/md';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const plans = [
        {
            name: 'Free',
            price: '0',
            storage: '5 GB',
            features: [
                { text: '5 GB Storage', available: true },
                { text: 'Basic Support', available: true },
                { text: 'Single User', available: true },
                { text: 'File Sharing', available: true },
                { text: 'Advanced Security', available: false },
                { text: 'Priority Support', available: false },
                { text: 'Team Collaboration', available: false },
                { text: 'Custom Branding', available: false }
            ],
            popular: false
        },
        {
            name: 'Basic',
            price: '49.000',
            storage: '100 GB',
            features: [
                { text: '100 GB Storage', available: true },
                { text: 'Email Support', available: true },
                { text: 'Up to 5 Users', available: true },
                { text: 'File Sharing', available: true },
                { text: 'Advanced Security', available: true },
                { text: 'Priority Support', available: false },
                { text: 'Team Collaboration', available: false },
                { text: 'Custom Branding', available: false }
            ],
            popular: false
        },
        {
            name: 'Pro',
            price: '149.000',
            storage: '500 GB',
            features: [
                { text: '500 GB Storage', available: true },
                { text: '24/7 Support', available: true },
                { text: 'Up to 20 Users', available: true },
                { text: 'File Sharing', available: true },
                { text: 'Advanced Security', available: true },
                { text: 'Priority Support', available: true },
                { text: 'Team Collaboration', available: true },
                { text: 'Custom Branding', available: false }
            ],
            popular: true
        },
        {
            name: 'Business',
            price: '399.000',
            storage: '2 TB',
            features: [
                { text: '2 TB Storage', available: true },
                { text: 'Dedicated Support', available: true },
                { text: 'Unlimited Users', available: true },
                { text: 'File Sharing', available: true },
                { text: 'Advanced Security', available: true },
                { text: 'Priority Support', available: true },
                { text: 'Team Collaboration', available: true },
                { text: 'Custom Branding', available: true }
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <FaCloud className="text-blue-600 text-3xl" />
                            <span className="text-2xl font-bold text-gray-800">CloudVault</span>
                        </div>
                        <div className="hidden md:flex gap-8">
                            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
                        </div>
                        <Link to="/sign-up" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero/Jumbotron */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4 animate-pulse">
                            <MdCloud className="text-6xl text-blue-600" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Simpan File Anda dengan <span className="text-blue-600">Aman & Cepat</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Solusi penyimpanan cloud terbaik untuk bisnis dan personal. Akses file Anda kapan saja, di mana saja dengan keamanan tingkat enterprise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/login" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg transform hover:scale-105">
                            Mulai Gratis
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih CloudVault?</h2>
                        <p className="text-xl text-gray-600">Keunggulan yang membuat kami berbeda</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2">
                            <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <FaDollarSign className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Harga Terjangkau</h3>
                            <p className="text-gray-600">
                                Mulai dari gratis hingga paket business dengan harga yang sangat kompetitif untuk semua kalangan.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2">
                            <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <MdSpeed className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kecepatan Tinggi</h3>
                            <p className="text-gray-600">
                                Upload dan download dengan kecepatan maksimal. Server tersebar di berbagai lokasi untuk performa optimal.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2">
                            <div className="bg-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <FaShieldAlt className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Keamanan Maksimal</h3>
                            <p className="text-gray-600">
                                Enkripsi end-to-end dan backup otomatis. Data Anda terlindungi dengan teknologi keamanan terkini.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2">
                            <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                <FaRocket className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mudah Digunakan</h3>
                            <p className="text-gray-600">
                                Interface intuitif dan mudah dipahami. Kelola file Anda dengan drag & drop yang simpel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket Yang Sesuai</h2>
                        <p className="text-xl text-gray-600">Fleksibel untuk semua kebutuhan Anda</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-600' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">Rp {plan.price}</span>
                                        <span className="text-gray-600">/bulan</span>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                        <p className="text-center text-lg font-semibold text-blue-600">{plan.storage}</p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                {feature.available ? (
                                                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                                                ) : (
                                                    <FaTimes className="text-gray-300 mt-1 flex-shrink-0" />
                                                )}
                                                <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                            }`}
                                    >
                                        Pilih Paket
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                        <p className="text-xl text-gray-600">Ada pertanyaan? Kami siap membantu Anda!</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="space-y-6">
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <FaUser className="text-blue-600" />
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                    placeholder="Masukkan nama Anda"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <FaEnvelope className="text-blue-600" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <FaPhone className="text-blue-600" />
                                    Nomor Telepon
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                    placeholder="08xx-xxxx-xxxx"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <FaEnvelope className="text-blue-600" />
                                    Pesan
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                ></textarea>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg transform hover:scale-105"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <FaCloud className="text-3xl text-blue-400" />
                                <span className="text-2xl font-bold">CloudVault</span>
                            </div>
                            <p className="text-gray-400">
                                Solusi penyimpanan cloud terpercaya untuk semua kebutuhan Anda.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Produk</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Features</a></li>
                                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition">Security</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Perusahaan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Bantuan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition">Support</a></li>
                                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 CloudVault. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}