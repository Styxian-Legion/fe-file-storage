import Label from "../ui/Label";
import InputField from "../ui/InputField";
import Button from "../ui/Button";

import { FaLock } from "react-icons/fa";

export default function TabSettings() {
    return (
        <div className="max-w-2xl">
            <div className="bg-white rounded-md shadow-md border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <FaLock className="w-4 h-4" />
                        Change Password
                    </h3>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <Label>Old Password</Label>
                        <InputField
                            type="password"
                            placeholder="Enter old password"
                            name="oldPassword"
                        />
                    </div>
                    <div>
                        <Label>New Password</Label>
                        <InputField
                            type="password"
                            placeholder="Enter New password"
                            name="newPassword"
                        />
                    </div>
                    <div>
                        <Label>Confirm Password</Label>
                        <InputField
                            type="password"
                            placeholder="Enter Confirm password"
                            name="confirmPassword"
                        />
                    </div>
                    <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                        Update Password
                    </Button>
                </div>
            </div>
        </div>
    )
}