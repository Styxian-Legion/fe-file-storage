import { HiSparkles } from "react-icons/hi";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";

export default function FormCreateProject() {
    return (
        <>
            <div className="w-full bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <HiSparkles className="w-6 h-6" />
                        New Project
                    </h2>
                </div>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full">
                            <InputField placeholder="Enter project name" />
                        </div>
                        <div className="w-full">
                            <InputField placeholder="Enter cors" />
                        </div>
                        <Button className="max-w-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                            Create
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}