import { useState } from "react";
import { FaUser, FaUserShield, FaTrash } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function User() {
    const [mode, setMode] = useState<"role" | "upgrade" | "none">("none")
    const handleChangeMode = (mode: "role" | "upgrade" | "none") => () => setMode(mode)

    return (
        <>
            <div className="w-full h-12 px-4 border border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <FaUser className="w-5 h-5" />
                    <h1>user@gmail.com</h1>
                </div>
                <div className="flex items-center gap-2">
                    {mode === "none" && (
                        <>
                            <button onClick={handleChangeMode("role")} className="w-8 h-8 border border-slate-400 flex items-center justify-center">
                                <FaUserShield className="w-5 h-5" />
                            </button>
                            <button onClick={handleChangeMode("upgrade")} className="w-8 h-8 border border-slate-400 flex items-center justify-center">
                                <GiUpgrade className="w-5 h-5" />
                            </button>
                            <button className="w-8 h-8 border border-slate-400 flex items-center justify-center">
                                <FaTrash className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    {(mode === "role" || mode === "upgrade") && (
                        <button onClick={handleChangeMode("none")} className="w-8 h-8 border border-slate-400 flex items-center justify-center">
                            <IoMdClose className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            {mode === "role" && (
                <form action="">
                    <div className="w-full flex flex-col gap-4">
                        <select name="role" id="role" className="w-full h-12 px-4 border border-slate-200 outline-none">
                            <option value="administrator">User</option>
                            <option value="user">Admin</option>
                        </select>
                        <button className="w-full h-12 font-medium hover:cursor-pointer border bg-slate-900 text-white rounded-md text-sm">Save</button>
                    </div>
                </form>
            )}

            {mode === "upgrade" && (
                <form action="">
                    <div className="w-full flex flex-col gap-4">
                        <select name="tier" id="tier" className="w-full h-12 px-4 border border-slate-200 outline-none">
                            <option value="basic">Basic</option>
                            <option value="pro">Pro</option>
                            <option value="business">Business</option>
                        </select>
                        <button className="w-full h-12 font-medium hover:cursor-pointer border bg-slate-900 text-white rounded-md text-sm">Save</button>
                    </div>
                </form>
            )}
        </>
    )
}