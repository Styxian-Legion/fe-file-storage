import { FaDollarSign, FaShieldAlt, FaRocket } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

export default function Features() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Cloud Storage?</h2>
                    <p className="text-xl text-gray-600">Keunggulan yang membuat kami berbeda</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Item
                        icon={<FaDollarSign className="text-3xl text-white" />}
                        title="Harga Terjangkau"
                        description="Mulai dari gratis hingga paket business dengan harga yang sangat kompetitif untuk semua kalangan."
                        className="from-blue-50 to-blue-100"
                    />
                    <Item
                        icon={<MdSpeed className="text-3xl text-white" />}
                        title="Kecepatan Tinggi"
                        description="Mulai dari gratis hingga paket business dengan harga yang sangat kompetitif untuk semua kalangan."
                        className="from-green-50 to-green-100"
                    />
                    <Item
                        icon={<FaShieldAlt className="text-3xl text-white" />}
                        title="Keamanan Maksimal"
                        description=" Enkripsi end-to-end dan backup otomatis. Data Anda terlindungi dengan teknologi keamanan terkini."
                        className="from-purple-50 to-purple-100"
                    />
                    <Item
                        icon={<FaRocket className="text-3xl text-white" />}
                        title="Mudah Digunakan"
                        description="Integrasi cepat hanya dengan beberapa baris kode. Cocok untuk berbagai framework dan bahasa pemrograman."
                        className="from-orange-50 to-orange-100"
                    />
                </div>
            </div>
        </section>
    )
}

const Item = ({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) => {
    return (
        <div className={`bg-gradient-to-br p-8 rounded-md hover:shadow-md transition transform hover:-translate-y-2 ${className}`}>
            <div className="bg-slate-800 w-16 h-16 rounded-md flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>

    )
}