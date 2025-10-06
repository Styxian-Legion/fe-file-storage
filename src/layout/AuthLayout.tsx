export default function AuthLayout({ header, description, children }: { header: string, description: string, children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen p-4 flex justify-center items-center bg-white">
            <div className="w-full max-w-md mx-auto border border-slate-200 shadow-2xl rounded-md bg-white overflow-hidden">
                <div className="w-full px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-500">
                    <h1 className="text-3xl font-bold text-white">{header}</h1>
                    <p className="text-orange-50 text-sm mt-1">{description}</p>
                </div>
                <div className="p-6 space-y-5">
                    {children}
                </div>
            </div>
        </main>
    )
}