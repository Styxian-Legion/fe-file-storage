import { useState } from "react"

import { FaKey, FaTrash, FaFile, FaFileImage } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { MdMonitorHeart, MdAudiotrack } from "react-icons/md"
import { RiApps2Fill } from "react-icons/ri"
import { BsBrowserChrome } from "react-icons/bs";
import TextField from "../ui/TextField"

type ItemProps = {
    id: string;
    name: string;
    cors: string;
    apiKey: string; // Ganti dari 'key'
    data: {
        documents: number;
        images: number;
        audio: number;
        arhive: number;
        others: number;
    };
};

export default function Item({
    id,
    name,
    cors,
    apiKey,
    data: { documents, images, audio, arhive, others }
}: ItemProps) {
    const [mode, setMode] = useState<"monitoring" | "key" | "cors" | "none">("none")

    const handleChangeMode = (mode: "monitoring" | "key" | "cors" | "none") => () => {
        setMode(mode)
    }

    return (
        <>
            {/* project list */}
            <div className="w-full h-12 px-2 flex justify-between items-center border border-slate-200">
                <div className="flex items-center gap-2">
                    <RiApps2Fill className="w-8 h-8 text-slate-800" />
                    <h1 className="font-semibold">{name}</h1>
                </div>
                <div className="flex items-center gap-2">
                    {mode === "none" && (
                        <>
                            <button onClick={handleChangeMode("monitoring")} className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <MdMonitorHeart className="w-5 h-5 text-slate-800" />
                            </button>
                            <button onClick={handleChangeMode("key")} className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaKey className="w-5 h-5 text-slate-800" />
                            </button>
                            <button onClick={handleChangeMode("cors")} className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <BsBrowserChrome className="w-5 h-5 text-slate-800" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaTrash className="w-5 h-5 text-slate-800" />
                            </button>
                        </>
                    )}

                    {(mode === "monitoring" || mode === "key" || mode === "cors") && (
                        <button onClick={handleChangeMode("none")} className="w-8 h-8 flex items-center justify-center border border-slate-400">
                            <IoMdClose className="w-5 h-5 text-slate-800" />
                        </button>
                    )}
                </div>
            </div>

            {/* monitoring */}
            {mode === "monitoring" && (
                <div className="w-full p-2 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 bg-slate-800">
                    <div className="w-full flex p-1.5 justify-between items-center gap-2 border border-slate-200 bg-slate-700 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaFile className="w-5 h-5" />
                            </div>
                            <h1>Documents</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">Size</span>
                            <span>{documents} GB</span>
                        </div>
                    </div>
                    <div className="w-full flex p-1.5 justify-between items-center gap-2 border border-slate-200 bg-slate-700 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaFileImage className="w-5 h-5" />
                            </div>
                            <h1>Images</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">Size</span>
                            <span>{images} GB</span>
                        </div>
                    </div>
                    <div className="w-full flex p-1.5 justify-between items-center gap-2 border border-slate-200 bg-slate-700 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <MdAudiotrack className="w-5 h-5" />
                            </div>
                            <h1>Audio or Music</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">Size</span>
                            <span>{audio} GB</span>
                        </div>
                    </div>
                    <div className="w-full flex p-1.5 justify-between items-center gap-2 border border-slate-200 bg-slate-700 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaFile className="w-5 h-5" />
                            </div>
                            <h1>Archives</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">Size</span>
                            <span>{arhive} GB</span>
                        </div>
                    </div>
                    <div className="w-full flex p-1.5 justify-between items-center gap-2 border border-slate-200 bg-slate-700 text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center border border-slate-400">
                                <FaFile className="w-5 h-5" />
                            </div>
                            <h1>Others</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">Size</span>
                            <span>{others} GB</span>
                        </div>
                    </div>
                </div>
            )}

            {/* key */}
            {mode === "key" && (
                <div className="w-full p-2 flex flex-col gap-3 bg-slate-800 rounded-sm">
                    <textarea name="key" id="key" value={apiKey} className="w-full p-2 bg-slate-700 text-white outline-none rounded-sm"></textarea>
                    <button className="w-full h-12 font-medium hover:cursor-pointer border text-white rounded-md">Regenerate Key</button>
                </div>
            )}

            {/* cors */}
            {mode === "cors" && (
                <form>
                    <div className="w-full flex items-center gap-3">
                        <TextField placeholder="CORS" value={cors} />
                        <button className="min-w-24 h-12 font-medium hover:cursor-pointer bg-black text-white rounded-md">
                            Update
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}