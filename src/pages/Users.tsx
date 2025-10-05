import MasterLayout from "../layout/MasterLayour"
import User from "../components/User";

export default function Users() {
    return (
        <MasterLayout className="w-full pt-20">
            <div className="w-full max-w-screen-2xl mx-auto px-4 flex flex-col gap-4">
                <div className="w-full flex flex-col gap-2">
                    <User />
                </div>
            </div>
        </MasterLayout>
    )
}