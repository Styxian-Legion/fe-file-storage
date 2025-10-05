import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"

export default function Navbar() {
    const pathname = useLocation().pathname

    return (
        <nav className="w-full fixed top-0 z-10 border-b-2 border-red-500 bg-black text-white">
            <div className="w-full h-14 px-4 max-w-screen-2xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6">
                    {(pathname == "/" || pathname == "/sign-up") && <Link to={"/"}><h1 className="font-bold">File Storage</h1></Link>}
                    {(pathname != "/" && pathname != "/sign-up") && (
                        <div className="flex items-center gap-4 text-sm font-semibold">
                            <Link to={"/dashboard"} className='hover:underline hover:underline-offset-8'>Dashboard</Link>
                            <Link to={"/payment"} className='hover:underline hover:underline-offset-8'>Payment</Link>
                            <Link to={"/settings"} className='hover:underline hover:underline-offset-8'>Settings</Link>
                            <Link to={"/users"} className='hover:underline hover:underline-offset-8'>Users</Link>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-4 text-sm font-semibold">
                    <Link to={"/"}>Log In</Link>
                    <Link to={"/sign-up"} className="bg-red-500 px-3 py-1.5 rounded-md">Log out</Link>
                </div>
            </div>
        </nav>
    )
}