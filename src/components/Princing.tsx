import { FaCheck, FaTimes } from "react-icons/fa";

type Feature = {
    name: string;
    available: boolean;
}

type Plan = {
    name: string;
    price: number;
    storage: number;
    features: Feature[];
    popular: boolean;
}


export default function Princing({ plans }: { plans: Plan[] }) {
    return (
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
                            className={`bg-white rounded-md shadow-md overflow-hidden transition transform hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-600' : ''
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
                                <div className="bg-blue-50 rounded-md p-4 mb-6">
                                    <p className="text-center text-lg font-semibold text-blue-600">{plan.storage} GB</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            {feature.available
                                                ? (<FaCheck className="text-green-500 mt-1 flex-shrink-0" />)
                                                : (<FaTimes className="text-gray-300 mt-1 flex-shrink-0" />)
                                            }
                                            <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-md font-semibold transition ${plan.popular
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
    )
}