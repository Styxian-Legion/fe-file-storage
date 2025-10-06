import { Link } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"

import Label from "../ui/Label"
import InputField from "../ui/InputField"
import Button from "../ui/Button"

import { FaEnvelope, FaLock } from "react-icons/fa"

export default function SignUp() {
    return (
        <AuthLayout header="Join Us" description="Please enter your details">
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
            <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <InputField
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    icon={<FaLock />}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                Sign Up
            </Button>
            <p className="text-center text-sm text-slate-600">
                I have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold hover:underline transition-colors">
                    Login
                </Link>
            </p>
        </AuthLayout>
    )
}