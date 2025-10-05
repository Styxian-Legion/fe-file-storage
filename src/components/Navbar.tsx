import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="w-full fixed top-0 z-10 border-b-2 border-red-500 bg-black text-white">
            <div className="w-full h-14 px-4 md:px-0 max-w-screen-2xl mx-auto flex items-center justify-between">
                <h1 className="font-bold">File Storage</h1>
                <div className="flex items-center gap-4 text-sm font-semibold">
                    {/* <Link to={"/"}>Log In</Link> */}
                    <Link to={"/sign-up"} className="bg-red-500 px-3 py-1.5 rounded-md">Log out</Link>
                </div>
            </div>
        </nav>
    )
}