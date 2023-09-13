import { useQuery } from "react-query"
import { ProfileCircle } from "../../common/ProfileCircle"
import { DoubleCheckModal } from "../SalesAnalysis/DoubleCheckModal"
import { fetchRequestListData } from "../../../fetch/get/agent"

type Id = {
    officeId: number
}

type Request = {
    customerEmail: string;
    customerName: string;
    endDate: string;
    leaseId: number;
    officeName: string;
    price: number;
    requestDateTime: string;
    startDate: string;
}

export const ReservationAttendeesList = (props: Id) => {

    const { data, isLoading, isError } = useQuery(["requestList", props.officeId], () => fetchRequestListData(props.officeId), {
        retry: 1
    })

    if (isLoading) return (<p>Loading...</p>);
    if (isError) return (<p>데이터를 불러 올 수 없습니다.</p>);

    const listData = data?.content
    console.log(listData)

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const formattedDate = new Date(dateString).toLocaleString('ko-KR', options);
        return formattedDate;
    };

    return (
        <>

            <div className="border-t border-solid border-accent p-4 mt-4 rounded-sm">
                <div className="text-base font-bold my-4">예약자 명단</div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center border-b border-accent border-solid">
                                <th>예약일</th>
                                <th>예약자</th>
                                <th>예약 기간</th>
                                <th>결제 금액</th>
                                <th>수락</th>
                                <th>거절</th>
                            </tr>
                        </thead>
                        <tbody className="border-b border-accent border-solid text-center">
                            {/* row 1 */}
                            {listData.map((request: Request) => (
                                <tr key={request.leaseId}>
                                    <th className="flex justify-center">
                                        <div className="text-sm w-32">{formatDate(request.requestDateTime)}</div>
                                    </th>
                                    <td>
                                        <ProfileCircle />
                                    </td>
                                    <td className="flex flex-col items-center">
                                        <div className="text-sm w-36"> {request.startDate} ~ </div>
                                        <div className="text-sm w-36"> {request.endDate}</div>
                                    </td>
                                    <td className="text-base font-bold">{request.price}P</td>
                                    <th>
                                        <DoubleCheckModal leaseId={request.leaseId} id="accept" buttonName="수락" title="정말 수락하시겠습니까?" content="수락하면 다시 거절할 수 없습니다." actionButtonName="수락" />
                                    </th>
                                    <th>
                                        <DoubleCheckModal leaseId={request.leaseId} id="reject" buttonName="거절" title="정말 거절하시겠습니까?" content="거절하면 다시 수락할 수 없습니다." actionButtonName="거절" />
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}