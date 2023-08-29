import { ProfileCircle } from "../common/ProfileCircle"
export const ReservationAttendeesList = () => {

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
                            <tr>
                                <th className="flex justify-center">
                                    <div className="text-sm w-32">2023년 8월 19일</div>

                                </th>
                                <td>
                                    <ProfileCircle />
                                </td>
                                <td className="flex flex-col items-center">
                                    <div className="text-sm w-36"> 2023년 8월 20일 ~ </div>
                                    <div className="text-sm w-36"> 2023년 10월 19일</div>
                                </td>
                                <td className="text-base font-bold">{'5,000,000'}P</td>
                                <th>
                                    <button className="btn btn-primary btn-xs w-11">수락</button>
                                </th>
                                <th>
                                    <button className="btn btn-primary btn-outline btn-xs w-11">거절</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}