import { MyBookingsListCompo } from "./MyBookingsListCompo";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { useQuery } from "react-query";
import { fetchMyBookingsData } from "../../fetch/get/customer";
import { useState, useEffect } from "react";

export type MyBookingsDataType = {
  endDate: string;
  isMonthly: boolean;
  isReviewed: boolean;
  leaseId: number;
  leaseStatus: string;
  location: string;
  name: string;
  paymentData: string;
  startDate: string;
};

export const MyBookings = () => {
  const [MyBookingsData, setMyBookingsData] = useState<MyBookingsDataType[]>([]);
  const { data } = useQuery(["fetchBookingData"], fetchMyBookingsData);
  useEffect(() => {
    if (data) {
      setMyBookingsData(data.content);
    }
  }, [data]);

  return (
    <div className="w-11/12 mx-auto">
      {/* 각각 데이터의 갯수만큼 반복하여 제작 */}
      <div className="mt-10 mb-10">
        <BackgroundCover>
          <Title>나의 예약</Title>
          <div className="mt-8"></div>
          {MyBookingsData.map((item, index) => {
            if (item.leaseStatus !== "EXPIRED") return <MyBookingsListCompo item={item} type="MyBooking" key={index} />;
          })}
          <Title>지난 예약</Title>
          <div className="mt-8">
            {MyBookingsData.map((item, index) => {
              if (item.leaseStatus === "EXPIRED")
                return <MyBookingsListCompo item={item} type="last_reservation" key={index} />;
            })}
          </div>
        </BackgroundCover>
      </div>
    </div>
  );
};
