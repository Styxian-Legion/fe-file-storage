import MasterLayout from "../layout/MasterLayour"

import { MdPayment } from "react-icons/md";

export default function Payment() {
    return (
        <MasterLayout className="w-full pt-20">
            <div className="w-full max-w-screen-2xl mx-auto px-4 flex flex-col gap-4">
               <div className="w-full flex flex-col gap-2">
                    <h1 className="text-xl font-semibold">History Paymemt</h1>
                    <div className="w-full h-14 px-4 border border-slate-200 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <MdPayment className="w-6 h-6" />
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Diamond Tier</h1>
                                <p className="text-sm text-slate-400">Rp <b>50.000</b></p>
                            </div>
                        </div>
                        <span>paid</span>
                    </div>
               </div>
            </div>
        </MasterLayout>
    )
}