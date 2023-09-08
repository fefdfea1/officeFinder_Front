import { Title } from "../components/common/Title";
import { BackgroundCover } from "../components/common/BackgroundCover";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useState, useEffect, useRef } from "react";
import { MaxCapacityDropDown } from "../components/common/MaxCapacityDropDown";
import { OfficeOptions } from "../components/booking/OfficeOptions";
import { BlindBooking } from "./BlindBooking";
import { SelectDateDropDown } from "../components/agent/SelectDateDropDown";
import { useQuery } from "react-query";
import { fetchBookingData } from "../fetch/get/customer";
import { GiPositionMarker } from "react-icons/gi";
import { DrawMap } from "../Business/Booking/BookingPrintMap";
import { SlickSlider } from "./BookingSlider";
import { BookingFigure } from "./BookingFigure";
import { OfficeName } from "../components/booking/OfficeName";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../contexts/MyContext";
import { BookingImageEmpty } from "./BookingEmptyImg";
import { fetchCreateChatRoom } from "../fetch/post/customer";
import { fetchReservation } from "../fetch/post/customer";
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
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [selectMonth, setMonth] = useState<boolean>(false);
  const [selectMaxPeople, setSelectMaxPeople] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<selectValueType>(valueDefault);
  const [reservationComplete, setReservationComplete] = useState<boolean>(false);
  const [BookingData, setBookingData] = useState<BookingDataType | null>(null);
  const [officePosition, setOfficePosition] = useState<coordinateType>();
  const [loadViewToolTipState, setToolTipState] = useState<boolean>(false);
  const PrintDayDom = useRef<HTMLParagraphElement>(null);
  const location = useLocation();
  const officeId = Number(location.pathname.slice(9));
  const { data } = useQuery(["BookingPageData"], () => fetchBookingData(officeId), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  //데이터를 연결하면서 실제 이미지 데이터로 연결 해야함
  const context = useMyContext();

  useEffect(() => {
    if (data) setBookingData(data);
  }, [data]);

  useEffect(() => {
    DrawMap(BookingData, setOfficePosition);
  }, [BookingData]);

  useEffect(() => {
    const target = PrintDayDom.current as HTMLParagraphElement;
    if (selectedDay !== undefined) {
      const formatDate = format(selectedDay, "yyyy-MM-dd");
      target.innerText = formatDate;
      setSelectValue({ ...selectValue, selectDay: formatDate });
    }
  }, [selectedDay]);

  return (
    <>
      <div className="mx-auto py-8 sm:w-11/12 lg:w-11/12 xl:w-5/6">
        <div className="mb-8">
          <Title>예약하기</Title>
        </div>
        <div className="flex mb-8 sm:flex-col xl:flex-row">
          <ImgAreaWidth>
            <SlickSlider setting={setting}>
              {BookingData !== null && BookingData.officePictureList.length >= 1 ? (
                BookingData.officePictureList.map((item, index) => {
                  if (item !== "None") return <BookingFigure img={item} key={index} />;
                })
              ) : (
                <BookingImageEmpty />
              )}
            </SlickSlider>
            {/* 데이터 받아오면 넣어야함 */}
            <div className="w-full flex flex-col  lg:w-8/12 lg:mx-auto xl:px-0 xl:w-full">
              <div className="mb-8 sm:mb-3">
                {/* 데이터 받아오면 주소에 넣어야함 */}
                {BookingData !== null ? (
                  <OfficeName name={BookingData.officeName} address={BookingData.address} />
                ) : (
                  <OfficeName name="정보 없음" address="정보 없음" />
                )}
              </div>
              <div className="flex w-full gap-x-2">
                <button className="btn btn-outline btn-primary block p-0 grow shrink basis-1/2">
                  <Link to={"/"} className="whitespace-nowrap w-full h-full flex justify-center items-center">
                    다른 오피스 둘러보기
                  </Link>
                </button>
                <button
                  className="btn btn-outline btn-primary block p-0 grow shrink basis-1/2"
                  onClick={() => {
                    context.setIsChatListOpen(true);
                    fetchCreateChatRoom(officeId);
                  }}
                >
                  문의하기
                </button>
              </div>
            </div>
          </ImgAreaWidth>
          <CalendarAndOPtionWidth>
            {/* flex와 div로 영역을 나누기 위해 div를 많이 쓰더라도 사용했습니다 */}

            <div className="relative sm:mt-8 xl:mt-0">
              <BackgroundCover margin="mt-0">
                <div className="flex sm:mb-12 sm:flex-col lg:flex-row">
                  <BackgroundCoverLeftAreaRightContour>
                    <BackgroundCoverLeftAreaTopContour className="text-center text-primary sm:w-full">
                      <span ref={PrintDayDom} className="text-base">
                        시작 날짜를 알려주세요
                      </span>
                    </BackgroundCoverLeftAreaTopContour>
                    <InheritanceDayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
                  </BackgroundCoverLeftAreaRightContour>
                  <div className="sm:w-full">
                    <div className="flex flex-col justify-center  sm:w-full sm:h-full">
                      <div className="ml-4 text-base">
                        <p>몇 개월 사용할지 알려주세요</p>
                        <p className="mb-4">1년 이상 장기 예약은 문의가 필요합니다</p>
                      </div>
                      <div className="mb-8">
                        <SelectDateDropDown
                          width="w-full"
                          setChangeState={setMonth}
                          setSelectValue={setSelectValue}
                          selectValue={selectValue}
                        />
                      </div>
                      <div>
                        <p className="ml-4 mb-1 text-base">사용할 인원을 선택해주세요</p>
                        {BookingData !== null ? (
                          <MaxCapacityDropDown
                            width="w-full"
                            setSelectMaxPeople={setSelectMaxPeople}
                            maxPeople={BookingData.maxCapacity}
                            selectValue={selectValue}
                            setSelectValue={setSelectValue}
                          />
                        ) : (
                          <MaxCapacityDropDown
                            width="w-full"
                            setSelectMaxPeople={setSelectMaxPeople}
                            maxPeople={0}
                            selectValue={selectValue}
                            setSelectValue={setSelectValue}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 컴포넌트 제작 완료대로 추가 */}
                <button
                  className="btn btn-primary w-full relative"
                  onClick={() => {
                    fetchReservation(
                      officeId,
                      selectValue.selectDay,
                      selectValue.maxPeople,
                      selectValue.month,
                      setReservationComplete,
                    );
                  }}
                >
                  예약하기
                  {selectedDay && selectMonth && selectMaxPeople && BookingData !== null ? (
                    <TotalPriceAreaPosition className="rounded-full bg-secondary whitespace-nowrap">
                      <span>총 결제 금액은 {BookingData.leaseFee * selectValue.maxPeople}원입니다</span>
                    </TotalPriceAreaPosition>
                  ) : null}
                </button>
                {reservationComplete && (
                  <div className="w-full h-full absolute top-0 left-0  z-10">
                    <BlindBooking />
                  </div>
                )}
              </BackgroundCover>
            </div>
          </CalendarAndOPtionWidth>
        </div>
        <div id="map" style={{ width: "100%", height: "500px" }} className="mx-auto mb-8 relative">
          {officePosition !== undefined && (
            <button
              className="w-12 h-12 absolute top-5 left-2.5 icon z-50 bg-white"
              onMouseOver={() => {
                setToolTipState(true);
              }}
              onMouseLeave={() => {
                setToolTipState(false);
              }}
            >
              <a
                href={`https://map.kakao.com/link/roadview/${officePosition.Ma},${officePosition.La}`}
                target="_blank"
                className="w-full h-full  flex items-center justify-center bg-primary rounded-xl"
              >
                <GiPositionMarker style={{ width: "40px", height: "40px", fill: "white" }} />
              </a>
              {loadViewToolTipState && <p className="whitespace-nowrap p-1">로드뷰</p>}
            </button>
          )}
        </div>

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

const CalendarAndOPtionWidth = styled.div`
  @media (min-width: 360px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`;

//캘린더 커스텀을 위한 styled
const InheritanceDayPicker = styled(DayPicker)`
  & .rdp-caption {
    position: relative;
    justify-content: center;
  }

  & .rdp-months {
    justify-content: center;
  }

  & .rdp-nav {
    position: absolute;
    top: -5px;
    left: 0;

    & > button {
      position: absolute;
      top: 0;
      left: 0;
    }

    & > button:nth-of-type(2) {
      position: absolute;
      top: 0;
      left: 240px;
    }
  }
`;
// 가상 요소를 사용하기 위해 따로 제작
const BackgroundCoverLeftAreaRightContour = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (min-width: 360px) {
    width: 100%;
  }
`;

// 가상 요소를 사용하기 위해 따로 제작
//기존에 있던 accent색상을 적용하면 거의 보이지 않아서 다른 색상을 좀 생각해봐야할 것으로 보임
const BackgroundCoverLeftAreaTopContour = styled.p`
  position: relative;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    top: 120%;
    left: 0%;
    width: 97%;
    height: 1px;
    border-radius: 12px;
    background-color: var(--primary);
  }
`;

const TotalPriceAreaPosition = styled.div`
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  color: black;

  &::before {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border-top: 10px solid var(--secondary);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  @media (min-width: 360px) {
    &::before {
      bottom: -51%;
    }

    top: -51%;
  }

  @media (min-width: 480px) {
    &::before {
      bottom: -50%;
    }
  }
`;
