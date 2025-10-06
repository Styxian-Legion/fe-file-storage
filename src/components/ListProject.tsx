import { FaCheck, FaKey, FaTrash } from "react-icons/fa";
import { RiApps2Fill } from "react-icons/ri";
import Button from "../ui/Button";
import InputField from "../ui/InputField";


export default function ListProject() {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <RiApps2Fill className="w-7 h-7 text-blue-600" />
                Your Projects
            </h2>

            {/* item */}
            <div className="w-full flex flex-col gap-2 bg-white">
                <div className="w-full h-14 px-2 flex justify-between items-center border border-slate-200">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-md flex items-center justify-center">1</div>
                        <h1 className="font-semibold">Project Name</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="w-14 h-8 flex items-center justify-center gap-2">
                            <span>12</span>
                            <span className="font-semibold">GB</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-blue-500 rounded-md">
                            <FaKey className="text-blue-500" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-md">
                            <FaTrash className="text-red-500" />
                        </button>
                    </div>
                </div>
                <div className="w-full p-2">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full">
                            <InputField type="text" placeholder="CORS" />
                        </div>
                        <div>
                            <Button className="min-w-11 max-h-11 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                                <FaCheck />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}