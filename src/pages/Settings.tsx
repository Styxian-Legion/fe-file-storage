import { FaCloud } from "react-icons/fa"
import MasterLayout from "../layout/MasterLayour"

import TextField from "../ui/TextField"

export default function Settings() {
    return (
        <MasterLayout className="w-full pt-20">
            <div className="w-full max-w-screen-2xl mx-auto px-4 flex flex-col gap-4">
                <div className="w-full h-24 bg-slate-800 p-4 rounded-md">
                    <div className="flex justify-between items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FaCloud className="w-8 h-8 text-slate-200" />
                                <h1 className="text-xl font-semibold text-white">Free Tier</h1>
                            </div>
                            <p className="text-white">package will expire in <b>90 days</b></p>
                        </div>
                        <button className="w-28 h-10 font-medium hover:cursor-pointer border text-white rounded-md text-sm">
                            Extends
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">Security</h1>
                    <form action="">
                        <div className="w-full flex flex-col gap-3">
                            <TextField type="password" placeholder="Old Password" />
                            <TextField type="password" placeholder="New Password" />
                            <TextField type="password" placeholder="Confirm Password" />
                            <button className="w-full h-12 font-medium hover:cursor-pointer border bg-slate-900 text-white rounded-md text-sm">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </MasterLayout>
    )
}