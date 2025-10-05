import { Link } from "react-router-dom"
import MasterLayout from "../layout/MasterLayour"
import TextField from "../ui/TextField"

import { FaGoogle, FaApple, FaTelegramPlane } from "react-icons/fa";

export default function Login(){
    return (
        <MasterLayout className="w-full p-4 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="w-full border border-slate-200 shadow-md rounded-md bg-white">
                    <div className="w-full h-12 px-4 flex items-center justify-between border-b border-slate-200">
                        <h1 className="text-xl font-semibold">Wellcome back</h1>
                        <Link to={"/sign-up"} className="text-sm font-semibold text-orange-500 hover:underline hover:underline-offset-4">Sign Up</Link>
                    </div>
                    <form>
                        <div className="w-full p-4 flex flex-col gap-3">
                            <TextField placeholder="E-Mail" required/>            
                            <TextField placeholder="Password" required/>
                            <button className="w-full h-12 font-medium hover:cursor-pointer bg-orange-500 text-white rounded-md">Login</button>            
                        </div>
                    </form>
                    <div className="w-full p-2 flex justify-center items-center gap-3">
                        <div className="w-28 min-h-0.5 bg-slate-200"></div>
                        <span className="text-sm">Or</span>
                        <div className="w-28 min-h-0.5 bg-slate-200"></div>
                    </div>
                    <div className="w-full p-4 flex justify-center items-center gap-3">
                        <Link to={""} className="flex flex-col justify-center items-center gap-2">
                            <div className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 duration-100">
                                <FaGoogle className="w-8-h-8"/>
                            </div>
                            <span className="text-xs">Google</span>
                        </Link>
                        <Link to={""} className="flex flex-col justify-center items-center gap-2">
                            <div className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 duration-100">
                                <FaApple className="w-8-h-8"/>
                            </div>
                            <span className="text-xs">Apple</span>
                        </Link>
                        <Link to={""} className="flex flex-col justify-center items-center gap-2">
                            <div className="w-10 h-10 rounded-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 duration-100">
                                <FaTelegramPlane className="w-8-h-8"/>
                            </div>
                            <span className="text-xs">Telegram</span>
                        </Link>
                    </div>
                </div>
                <div className="w-full hidden lg:block">
                    
                </div>
            </div>
        </MasterLayout>
    )
}