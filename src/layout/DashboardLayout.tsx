import { FaCloud } from "react-icons/fa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
            <div className="w-full bg-white shadow-md border-b border-gray-200">
                <div className="max-w-screen-2xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center">
                            <FaCloud className="text-white text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600">Manage your storage projects</p>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}