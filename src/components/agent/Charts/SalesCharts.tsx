import { TotalRevenueChart } from "./fetchTotalRevenueData"
import { OverallRentalChart } from "./fetchOverallRentalData"

type Id = {
    officeId: number
}
export const SalesCharts = (props: Id) => {


    return (
        <div className="flex flex-col gap-2 p-8 lg:flex-row items-center">
            <TotalRevenueChart officeId={props.officeId} />
            <OverallRentalChart officeId={props.officeId} />
            {props.officeId}
        </div>
    );
};
