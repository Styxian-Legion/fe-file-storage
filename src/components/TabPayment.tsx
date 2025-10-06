import { FaCheckCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

type payment = {
    id: number;
    tier: string;
    amount: number;
    status: string;
    date: string;
    method: string;
}

export default function TabPayment({ payments }: { payments: payment[] }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MdPayment className="w-7 h-7 text-blue-600" />
                Payment History
            </h2>
            {payments.map(payment => (
                <div key={payment.id} className="bg-white rounded-md p-3 shadow-md border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-md flex items-center justify-center">
                                <MdPayment className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{payment.tier}</h3>
                                <p className="text-sm text-gray-500">{payment.date} • {payment.method}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-lg font-bold text-gray-900">Rp {payment.amount.toLocaleString()}</p>
                            <span className={`px-4 py-2 rounded-md text-sm font-semibold ${payment.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                {payment.status === 'paid' ? <FaCheckCircle className="inline mr-1" /> : null}
                                {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}