import Navber from "../components/Navbar"

export default function CheckoutLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <Navber/>
            {children}
        </div>
    )
}