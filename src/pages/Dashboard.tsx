import { useState } from 'react';
import { FaCloud, FaKey, FaTrash, FaFile, FaFileImage, FaCrown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdMonitorHeart, MdAudiotrack } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { BsBrowserChrome } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

// TextField Component
function TextField({ placeholder, value, onChange, name } : any) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-12 px-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
        />
    );
}

// Item Component
function Item({ id, name, cors, apiKey, data }: any) {
    const [mode, setMode] = useState("none");
    const [formData, setFormData] = useState({ cors, apiKey });

    const handleChangeMode = (newMode: "monitoring" | "key" | "cors" | "none") => () => {
        setMode(newMode);
    };

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const { documents, images, audio, arhive, others } = data;

    return (
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
            {/* Project Header */}
            <div className="w-full px-6 py-4 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <RiApps2Fill className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-gray-900">{name}</h1>
                        <p className="text-sm text-gray-500">ID: {id}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {mode === "none" && (
                        <>
                            <button
                                onClick={handleChangeMode("monitoring")}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                                title="Monitor Storage"
                            >
                                <MdMonitorHeart className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                            </button>
                            <button
                                onClick={handleChangeMode("key")}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                                title="API Key"
                            >
                                <FaKey className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                            </button>
                            <button
                                onClick={handleChangeMode("cors")}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all group"
                                title="CORS Settings"
                            >
                                <BsBrowserChrome className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                            </button>
                            <button
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all group"
                                title="Delete Project"
                            >
                                <FaTrash className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                            </button>
                        </>
                    )}
                    {mode !== "none" && (
                        <button
                            onClick={handleChangeMode("none")}
                            className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 transition-all"
                        >
                            <IoMdClose className="w-6 h-6 text-white" />
                        </button>
                    )}
                </div>
            </div>

            {/* Monitoring Mode */}
            {mode === "monitoring" && (
                <div className="w-full p-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaFile className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Documents</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Size</span>
                            <span className="text-lg font-bold text-gray-900">{documents} GB</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <FaFileImage className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Images</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Size</span>
                            <span className="text-lg font-bold text-gray-900">{images} GB</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <MdAudiotrack className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Audio</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Size</span>
                            <span className="text-lg font-bold text-gray-900">{audio} GB</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <FaFile className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Archives</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Size</span>
                            <span className="text-lg font-bold text-gray-900">{arhive} GB</span>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                <FaFile className="w-5 h-5 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">Others</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Size</span>
                            <span className="text-lg font-bold text-gray-900">{others} GB</span>
                        </div>
                    </div>
                </div>
            )}

            {/* API Key Mode */}
            {mode === "key" && (
                <div className="w-full p-6 bg-gradient-to-br from-gray-50 to-green-50">
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">API Key</label>
                            <textarea
                                name="apiKey"
                                value={formData.apiKey}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-50 text-gray-800 outline-none rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 font-mono text-sm resize-none"
                                rows={3}
                                readOnly
                            />
                        </div>
                        <button className="w-full h-12 font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                            <HiSparkles className="w-5 h-5" />
                            Regenerate Key
                        </button>
                    </div>
                </div>
            )}

            {/* CORS Mode */}
            {mode === "cors" && (
                <div className="w-full p-6 bg-gradient-to-br from-gray-50 to-purple-50">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <TextField
                            placeholder="Enter CORS domain (e.g., https://example.com)"
                            value={formData.cors}
                            onChange={handleInputChange}
                            name="cors"
                        />
                        <button className="w-full sm:w-32 h-12 font-semibold bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg">
                            Update
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Main Dashboard Component
export default function Dashboard() {
    const [formData, setFormData] = useState({
        projectName: '',
        cors: ''
    });

    const handleInputChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        alert('Project created successfully!');
        setFormData({ projectName: '', cors: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Header */}
            <div className="w-full bg-white shadow-md border-b border-gray-200">
                <div className="max-w-screen-2xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-3">
                        <FaCloud className="text-blue-600 text-4xl" />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">CloudVault Dashboard</h1>
                            <p className="text-gray-600">Manage your storage projects</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-6">
                    {/* Storage Monitor Card */}
                    <div className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                        <FaCloud className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Free Tier</h2>
                                        <p className="text-blue-100">Your current plan</p>
                                    </div>
                                </div>
                                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 group">
                                    <FaCrown className="w-5 h-5 group-hover:text-yellow-500 transition-colors" />
                                    Upgrade Plan
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-blue-100">Storage Usage</span>
                                        <span className="text-sm font-bold text-white">32% Used</span>
                                    </div>
                                    <div className="w-full h-3 bg-white bg-opacity-20 rounded-full overflow-hidden backdrop-blur-sm">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-400 to-blue-300 rounded-full transition-all duration-500 shadow-lg"
                                            style={{ width: '32%' }}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-white">26.5 GB</span>
                                        <span className="text-blue-100">of 100 GB used</span>
                                    </div>
                                    <span className="text-lg font-semibold text-blue-100">73.5 GB remaining</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Create Project Card */}
                    <div className="w-full bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <HiSparkles className="w-6 h-6" />
                                Create New Project
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <TextField
                                    placeholder="Enter project name"
                                    value={formData.projectName}
                                    onChange={handleInputChange}
                                    name="projectName"
                                />
                                <TextField
                                    placeholder="CORS (optional)"
                                    value={formData.cors}
                                    onChange={handleInputChange}
                                    name="cors"
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="w-full md:w-32 h-12 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <RiApps2Fill className="w-7 h-7 text-blue-600" />
                            Your Projects
                        </h2>

                        <Item
                            id="1"
                            name="Multi Auth Service"
                            cors="https://example.com"
                            apiKey="axaecaecueceabiahciwueaecaws"
                            data={{
                                documents: 10.5,
                                images: 12,
                                audio: 13,
                                arhive: 17,
                                others: 19
                            }}
                        />

                        <Item
                            id="2"
                            name="E-Commerce Service"
                            cors="https://shop.example.com"
                            apiKey="bxbedbeduedeacibjdjxjvfdbdxb"
                            data={{
                                documents: 8.3,
                                images: 15.7,
                                audio: 9.2,
                                arhive: 12.5,
                                others: 6.8
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}