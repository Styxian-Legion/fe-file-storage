import { FaCheckCircle, FaCrown, FaTimesCircle, FaTrash, FaUser } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

type User = {
    id: number;
    name: string;
    email: string;
    plan: string;
    status: string;
};

export default function TabUsers({ users }: { users: User[] }) {
    return (
        <div className="space-y-4">
            {users.map(user => (
                <div key={user.id} className="bg-white rounded-md p-3 shadow-md border border-gray-200 hover:shadow-md transition-all">
                    <div className="flex  justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-md flex items-center justify-center">
                                <FaUser className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="px-3 py-1 bg-orange-100 text-blue-700 rounded-md text-xs font-semibold">
                                        {user.plan}
                                    </span>
                                    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {user.status === 'active' ? <FaCheckCircle className="inline mr-1" /> : <FaTimesCircle className="inline mr-1" />}
                                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <button className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white rounded-md font-semibold transition-all shadow-md hover:shadow-md flex items-center gap-2">
                                Deactive
                            </button>
                            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition-all shadow-md hover:shadow-md flex items-center gap-2">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}