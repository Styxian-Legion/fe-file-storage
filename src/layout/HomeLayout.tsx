import Navber from "../components/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navber />
            {children}
        </div>
    )
}