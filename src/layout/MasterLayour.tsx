import Navbar from "../components/Navbar"

export default function MasterLayout({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={className}>
            <Navbar />
            {children}
        </div>
    )
}