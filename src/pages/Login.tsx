import { Link } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"

import Label from "../ui/Label"
import InputField from "../ui/InputField"
import Button from "../ui/Button"

import { FaEnvelope, FaLock } from "react-icons/fa"

export default function Login() {
    return (
        <AuthLayout header="Welcome Back!" description="Please login to continue">
            <div>
                <Label htmlFor="email">Email Address</Label>
                <InputField
                    type="email"
                    id="email"
                    name="email"
                    icon={<FaEnvelope />}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <InputField
                    type="password"
                    id="password"
                    name="password"
                    icon={<FaLock />}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                Login
            </Button>
            <p className="text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-blue-500 hover:text-blue-600 font-semibold hover:underline transition-colors">
                    Sign Up
                </Link>
            </p>
        </AuthLayout>
    )
}