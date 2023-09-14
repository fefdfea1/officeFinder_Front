import { MyBookingsListCompo } from "./MyBookingsListCompo";
import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { useQuery } from "react-query";
import { fetchMyBookingsData } from "../../fetch/get/customer";
import { useState, useEffect } from "react";
import { BookMarkAlert } from "./BookMarkAlert";
import { useMyContext } from "../../contexts/MyContext";
import styled from "@emotion/styled";
import { BookMarkDataType } from "./BookMark";
import { activeMatchBookMarkList } from "../../Business/AllOfficeList/activeMatchBookMark";
import { fetchCustomerBookMarkData } from "../../fetch/get/customer";

export type MyBookingContentType = {
  endDate: string;
  leaseId: number;
  leaseStatus: string;
  location: string;
  officeId: number;
  name: string;
  paymentDate: string;
  reviewed: boolean;
  officeImagePath: string | null;
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
  const { data } = useQuery(["fetchBookingData"], fetchMyBookingsData);
  const BookMarkDataState = useQuery<BookMarkDataType>("MyBookingsBookMarkDataState", () =>
    fetchCustomerBookMarkData(0, 10),
  );
  const [BookMarkData, setBookMarkData] = useState<BookMarkDataType | unknown>(null);
  const [MyBookingsData, setMyBookingsData] = useState<MyBookingsDataType | null>(null);
  const { isAlertState } = useMyContext();
  useEffect(() => {
    if (data) {
      setMyBookingsData(data);
    }
  }, [data]);

  useEffect(() => {
    if (BookMarkDataState) {
      setBookMarkData(BookMarkDataState.data);
    }
  }, [BookMarkDataState]);

  return (
    <div className="w-11/12 mx-auto relative">
      {/* 각각 데이터의 갯수만큼 반복하여 제작 */}
      <div className="mt-10 mb-10">
        <BackgroundCover>
          <Title>나의 예약</Title>
          <div className="mt-8"></div>
          {MyBookingsData &&
            MyBookingsData.content.map((item, index) => {
              const match: boolean = activeMatchBookMarkList(item, BookMarkData, "MyBookings");
              if (item.leaseStatus !== "EXPIRED")
                return (
                  <MyBookingsListCompo
                    item={item}
                    type="MyBooking"
                    key={index}
                    officeNum={item.leaseId}
                    mathId={match}
                  />
                );
            })}
          <Title>지난 예약</Title>
          <div className="mt-8">
            {MyBookingsData &&
              MyBookingsData.content.map((item, index) => {
                const match = activeMatchBookMarkList(item, BookMarkData, "MyBookings");
                if (item.leaseStatus === "EXPIRED")
                  return (
                    <MyBookingsListCompo
                      item={item}
                      type="last_reservation"
                      key={index}
                      officeNum={item.leaseId}
                      mathId={match}
                    />
                  );
              })}
          </div>
        </BackgroundCover>
      </div>
      <RemoveBookMarkAlertPosition>
        <BookMarkAlert
          submitText="즐겨찾기에 추가 됨"
          deleteSubmitText="즐겨찾기에서 제거 됨"
          alertState={isAlertState}
        />
      </RemoveBookMarkAlertPosition>
    </div>
  );
};

const RemoveBookMarkAlertPosition = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
