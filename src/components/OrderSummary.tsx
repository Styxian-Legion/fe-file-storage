import { BsShieldCheck } from "react-icons/bs"
import { FaCreditCard } from "react-icons/fa"

type OrderSummary = {
    name: string
    email: string
    plan: string
    duration: number
    basePrice: number
    totalMonths: number
    total: number
}

export default function OrderSummary({name, email, plan, duration, basePrice, totalMonths, total}: OrderSummary) {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden sticky top-16">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                    <h2 className="text-xl font-bold text-white">Ringkasan Pesanan</h2>
                </div>
                <div className="p-6 space-y-4">
                    {/* Customer Info */}
                    <div className="space-y-2 pb-4 border-b border-gray-200">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Nama</span>
                            <span className="font-semibold text-gray-900">
                                {name || '-'}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Email</span>
                            <span className="font-semibold text-gray-900 truncate ml-2">
                                {email || '-'}
                            </span>
                        </div>
                    </div>

                    {/* Plan Info */}
                    <div className="space-y-2 pb-4 border-b border-gray-200">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Paket</span>
                            <span className="font-bold text-gray-900">{plan}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Masa Aktif</span>
                            <span className="font-semibold text-gray-900">
                                {duration}
                            </span>
                        </div>
                    </div>

                    {/* Price Calculation */}
                    <div className="space-y-2 pb-4 border-b border-gray-200">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Harga per bulan</span>
                            <span className="text-gray-900">{basePrice}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Jumlah bulan</span>
                            <span className="text-gray-900">× {totalMonths}</span>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-md p-4 border-2 border-indigo-200">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900">Total</span>
                            <span className="text-2xl font-bold text-indigo-600">
                                {total}
                            </span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md font-bold text-lg transition-all shadow-md hover:shadow-md flex items-center justify-center gap-2">
                        <FaCreditCard className="w-5 h-5" />
                        Checkout Sekarang
                    </button>

                    {/* Security Note */}
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                        <p className="text-xs text-blue-700 flex items-center gap-2">
                            <BsShieldCheck className="w-4 h-4" />
                            Pembayaran Anda dilindungi dengan enkripsi SSL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}