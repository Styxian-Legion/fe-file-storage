import { FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FaCloud className="text-3xl text-blue-400" />
                            <span className="text-2xl font-bold">Cloude Storage</span>
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
                    <p>&copy; 2025 Cloud Storage | Created by <Link to="https://github.com/yudhaginongpratidina" className="hover:text-white transition">Yudha Ginong Pratidina</Link>.</p>
                </div>
            </div>
        </footer>
    )
}