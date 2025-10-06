import { FaCloud, FaCrown } from "react-icons/fa";

export default function PlanInfoCard() {
    return (
        <>
            <div className="w-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-blue-100 bg-opacity-20 rounded-md flex items-center justify-center backdrop-blur-sm">
                                <FaCloud className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">Free Tier</h2>
                                <p className="text-orange-100">Your current plan</p>
                            </div>
                        </div>
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-all shadow-md flex items-center gap-2 group">
                            <FaCrown className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
                            Upgrade Plan
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-orange-100">Storage Usage</span>
                                <span className="text-sm font-bold text-white">32% Used</span>
                            </div>
                            <div className="w-full h-3 bg-white bg-opacity-20 rounded-full overflow-hidden backdrop-blur-sm">
                                <div
                                    className="h-full bg-gradient-to-r from-green-400 to-blue-300 rounded-full transition-all duration-500 shadow-lg"
                                    style={{ width: '32%' }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-white">32 GB</span>
                                <span className="text-orange-100">of 100 GB used</span>
                            </div>
                            <span className="text-lg font-semibold text-orange-100">68 GB remaining</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}