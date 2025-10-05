import MasterLayout from "../layout/MasterLayour"

import { FaCloud} from "react-icons/fa";
import TextField from "../ui/TextField";
import Item from "../components/Item";

export default function Dashboard() {
    return (
        <MasterLayout className="w-full pt-20">
            <div className="w-full max-w-screen-2xl mx-auto px-4 flex flex-col gap-4">

                {/* monitor free space */}
                <div className="w-full flex flex-col gap-3 border rounded-md bg-slate-800 p-4">
                    <div className="flex justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                            <FaCloud className="w-8 h-8 text-slate-200" />
                            <h1 className="text-xl font-semibold text-white">Free Tier</h1>
                        </div>
                        <button className="w-28 h-10 font-medium hover:cursor-pointer border text-white rounded-md text-sm">
                            Upgrade Plan
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="w-full h-2 bg-slate-200 rounded-md overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-300"
                                style={{ width: '32%' }}
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center font-medium">
                        <span className="text-sm text-slate-200">Used: 26.5 GB</span>
                        <span className="text-sm text-slate-200">Free: 68 GB</span>
                    </div>
                </div>

                {/* form create project */}
                <form>
                    <div className="w-full flex items-center gap-3">
                        <TextField placeholder="Enter project name" />
                        <TextField placeholder="CORS (optional)" />
                        <button className="min-w-24 h-12 font-medium hover:cursor-pointer bg-black text-white rounded-md">
                            Create
                        </button>
                    </div>
                </form>

                {/* project list */}
                <Item id={"1"} name={"Multi Auth Service"} cors={"https://example.com"} apiKey={"axaecaecueceabiahciwueaecaws"} data={{
                    documents: 10.5,
                    images: 12,
                    audio: 13,
                    arhive: 17,
                    others: 19
                }} />

                <Item id={"2"} name={"E-Commerce Service"} cors={"https://example.com"} apiKey={"axaecaecueceabiahciwueaecaws"} data={{
                    documents: 10.5,
                    images: 12,
                    audio: 13,
                    arhive: 17,
                    others: 19
                }}/>
            </div>
        </MasterLayout>
    )
}