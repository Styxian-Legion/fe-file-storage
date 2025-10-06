import FormCreateProject from "./Forms/FormCreateProject";
import PlanInfoCard from "./PlanInfoCard";
import ListProject from "./ListProject";

export default function TabProject() {
    return (
        <div className="flex flex-col gap-6">
            <PlanInfoCard />
            <FormCreateProject />
            <ListProject/>
        </div>
    )
}