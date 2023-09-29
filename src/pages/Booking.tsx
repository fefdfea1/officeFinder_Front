import { Title } from "../components/common/Title";
import { useState, useEffect } from "react";
import { OfficeOptions } from "../components/booking/OfficeOptions";
import { useQuery } from "react-query";
import { fetchBookingData } from "../fetch/get/customer";
import { DrawMap } from "../Business/Booking/BookingPrintMap";
import { SlickSlider } from "./BookingSlider";
import { BookingFigure } from "./BookingFigure";
import { useLocation } from "react-router-dom";
import { BookingImageEmpty } from "./BookingEmptyImg";
import { BookingOfficeInfoCompo } from "./BookingOfficeInfoCompo";
import { BookingButtonCompo } from "./BookingButtonCompo";
import { BookingCalendarAndOption } from "./BookingCalendarAndOption";
import { BookingMapCompo } from "./BookingMapCompo";
import styled from "@emotion/styled";
import "react-day-picker/dist/style.css";

declare global {
  interface Window {
    kakao: any;
  }
}

export type BookingDataType = {
  address: string;
  leaseFee: number;
  maxCapacity: number;
  maxRoomCount: number;
  officeName: string;
  officeOptionDto: {
    faxServiceAvailable: boolean;
    haveAirCondition: boolean;
    haveCafe: boolean;
    haveDoorLock: boolean;
    haveHeater: boolean;
    haveParkArea: boolean;
    havePrinter: boolean;
    havePrivateLocker: boolean;
    havePublicKitchen: boolean;
    havePublicLounge: boolean;
    haveShowerBooth: boolean;
    haveStorage: boolean;
    haveTvProjector: boolean;
    haveWhiteBoard: boolean;
    haveWifi: boolean;
    packageSendServiceAvailable: boolean;
  };
  officePictureList: string[];
  reviewCount: string;
  reviews: {
    createdAt: string;
    customerImagePath: string;
    customerName: string;
    description: string;
    rate: number;
  };
};

export type selectValueType = {
  selectDay: string;
  month: number;
  maxPeople: number;
};

export type coordinateType = {
  La: number;
  Ma: number;
};

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  pauseOnHover: true,
  autoplay: true,
};

const valueDefault = {
  selectDay: "",
  month: 0,
  maxPeople: 0,
};

export const Booking = () => {
  const [selectValue, setSelectValue] = useState<selectValueType>(valueDefault);
  const [BookingData, setBookingData] = useState<BookingDataType | null>(null);
  const [officePosition, setOfficePosition] = useState<coordinateType>();
  const location = useLocation();
  const officeId = Number(location.pathname.slice(9));
  const { data } = useQuery(["BookingPageData"], () => fetchBookingData(officeId), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  //데이터를 연결하면서 실제 이미지 데이터로 연결 해야함

  useEffect(() => {
    if (data) setBookingData(data);
  }, [data]);

  useEffect(() => {
    DrawMap(BookingData, setOfficePosition);
  }, [BookingData]);

  return (
    <>
      <div className="mx-auto py-8 sm:w-11/12 lg:w-11/12 xl:w-5/6 relative">
        <div className="mb-8">
          <Title>예약하기</Title>
        </div>
        <div className="flex mb-8 sm:flex-col xl:flex-row">
          <ImgAreaWidth>
            {/* 이미지 슬라이더 */}
            <SlickSlider setting={setting}>
              {BookingData !== null && BookingData.officePictureList.length >= 1 ? (
                BookingData.officePictureList.map((item, index) => {
                  if (item !== "None") return <BookingFigure img={item} key={index} />;
                })
              ) : (
                <BookingImageEmpty />
              )}
            </SlickSlider>
            {/* 오피스 이름 , 주소 컴포넌트 */}
            <div className="w-full flex flex-col  lg:w-8/12 lg:mx-auto xl:px-0 xl:w-full">
              {BookingData ? (
                <BookingOfficeInfoCompo BookingData={BookingData} />
              ) : (
                <BookingOfficeInfoCompo BookingData={null} />
              )}
              {/* 오피스 버튼 컴포넌트 */}
              <BookingButtonCompo officeId={officeId} />
            </div>
          </ImgAreaWidth>
          <BookingCalendarAndOption
            setSelectValue={setSelectValue}
            selectValue={selectValue}
            BookingData={BookingData}
            officeId={officeId}
          />
        </div>
        {/* 지도 컴포넌트 */}
        <BookingMapCompo
          officePosition={officePosition}
          BookingData={BookingData}
          setOfficePosition={setOfficePosition}
        />

        {/* width : w-full or 숫자입력으로 width값 조절 */}
        <div>
          {BookingData !== null ? (
            <OfficeOptions
              width="w-full"
              needReviewCount={true}
              OptionData={BookingData.officeOptionDto}
              totalReview={BookingData.reviewCount}
              maxPeople={BookingData.maxCapacity}
              price={BookingData.leaseFee}
            />
          ) : (
            <OfficeOptions width="w-full" needReviewCount={true} OptionData={{}} totalReview="0" />
          )}
        </div>
      </div>
    </>
  );
};

const ImgAreaWidth = styled.div`
  @media (min-width: 360px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    margin-right: 2rem;
    width: 40%;
  }
`;
