import { MyBookingsListCompo } from "./MyBookingsListCompo";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { useQuery } from "react-query";
import { fetchMyBookingsData } from "../../fetch/get/customer";
import { useState, useEffect } from "react";

export type MyBookingContentType = {
  endDate: string;
  leaseId: number;
  leaseStatus: string;
  location: string;
  name: string;
  paymentDate: string;
  reviewed: boolean;
  startDate: string;
};

export type MyBookingsDataType = {
  content: MyBookingContentType[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

export const MyBookings = () => {
  const [MyBookingsData, setMyBookingsData] = useState<MyBookingsDataType | null>(null);
  const { data } = useQuery(["fetchBookingData"], fetchMyBookingsData, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (data) {
      setMyBookingsData(data);
    }
  }, [data]);

  return (
    <div className="w-11/12 mx-auto">
      {/* 각각 데이터의 갯수만큼 반복하여 제작 */}
      <div className="mt-10 mb-10">
        <BackgroundCover>
          <Title>나의 예약</Title>
          <div className="mt-8"></div>
          {MyBookingsData &&
            MyBookingsData.content.map((item, index) => {
              if (item.leaseStatus !== "EXPIRED")
                return <MyBookingsListCompo item={item} type="MyBooking" key={index} />;
            })}
          <Title>지난 예약</Title>
          <div className="mt-8">
            {MyBookingsData &&
              MyBookingsData.content.map((item, index) => {
                if (item.leaseStatus === "EXPIRED")
                  return <MyBookingsListCompo item={item} type="last_reservation" key={index} />;
              })}
          </div>
        </BackgroundCover>
      </div>
    </div>
  );
};
