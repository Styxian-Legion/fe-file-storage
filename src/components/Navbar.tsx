import { FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navber() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14">
                    <div className="flex items-center gap-2">
                        <FaCloud className="text-blue-600 text-3xl" />
                        <span className="text-2xl font-bold text-gray-800">Cloud Storage</span>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
                    </div>
                    <Link to="/sign-up" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}