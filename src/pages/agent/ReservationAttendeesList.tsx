import { ProfileCircle } from "../../components/common/ProfileCircle"
export const ReservationAttendeesList = () => {

    return (
        <>
            <div className="border-t border-solid border-accent p-4 mt-4 rounded-sm">
                <div className="text-base font-bold my-4">예약자 명단</div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>예약일</th>
                                <th>예약자</th>
                                <th>예약 기간</th>
                                <th>결제 금액</th>
                                <th>취소/환불</th>
                                <th>채팅</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <div className="text-sm">2023년 8월 19일</div>

                                </th>
                                <td>
                                    <ProfileCircle />
                                </td>
                                <td>
                                    <span className="badge badge-secondary badge-sm">정기결제</span>
                                    <div className="text-sm"> 2023년 8월 20일 - 2023년 10월 19일</div>
                                </td>
                                <td className="text-base font-bold">{'5,000,000'}P</td>
                                <th>
                                    <button className="btn btn-primary btn-outline btn-xs">취소/환불</button>
                                </th>
                                <th>
                                    <button className="btn btn-primary btn-xs">채팅</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}