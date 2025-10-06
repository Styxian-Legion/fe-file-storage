import { FaCloud } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
            <div className="w-full bg-white shadow-md border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-sm text-gray-600">Manage your storage projects</p>
                        </div>
                    </div>
                    <button className="text-md font-semibold text-red-500">Logout</button>
                </div>
            </div>
            {children}
        </div>
    )
}