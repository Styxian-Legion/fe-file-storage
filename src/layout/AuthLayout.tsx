import { FaLock } from "react-icons/fa";

export default function AuthLayout({ header, description, children }: { header: string, description: string, children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen p-4 flex justify-center items-center bg-white">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                {/* form */}
                <div className="w-full max-w-md mx-auto border border-slate-200 shadow-2xl rounded-md bg-white overflow-hidden">
                    <div className="w-full px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-500">
                        <h1 className="text-3xl font-bold text-white">{header}</h1>
                        <p className="text-orange-50 text-sm mt-1">{description}</p>
                    </div>
                    <div className="p-6 space-y-5">
                        {children}
                    </div>
                </div>

                {/* ilustration */}
                <div className="w-full hidden lg:flex flex-col items-center justify-center p-4">
                    <div className="relative w-full p-4 rounded-md bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 shadow-md">
                        {/* decorative circles */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

                        {/* content */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white p-8">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg">
                                <FaLock className="w-12 h-12 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-center">Secure Auth</h2>
                            <p className="text-center text-white/90 text-lg max-w-md">
                                Access your account securely with our advanced authentication system
                            </p>
                        </div>
                        {/* Features */}
                        <div className="mx-auto space-y-4 w-full max-w-sm">
                            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-sm font-medium">End-to-end encryption</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-sm font-medium">24/7 account protection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}