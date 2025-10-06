import { MdCloud } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Jumbotron() {
    return (
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
                    <Link to="/login" className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-md transform hover:scale-105">
                        Mulai Gratis
                    </Link>
                </div>
            </div>
        </section>
    )
}