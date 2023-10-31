import styled from "@emotion/styled";
import { BackgroundCover } from "../components/common/BackgroundCover";
import React, { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { SelectDateDropDown } from "../components/agent/SelectDateDropDown";
import { BookingDataType, selectValueType } from "./Booking";
import { MaxCapacityDropDown } from "../components/common/MaxCapacityDropDown";
import { fetchReservation } from "../fetch/post/customer";
import { moneyExp } from "../Business/moneyExp/moneyExp";
import { BookingSuccess } from "./BookingSuccess";
import { format } from "date-fns";
import { useMutation } from "react-query";
import { BookingLoadingCompo } from "./BookingLoadingCompo";
import { alertRemoveTimer } from "../Business/BookMark/BookMarkTimer";
import { WrongApproachAlertCompo } from "../components/common/wrongApproachAlertCompo";

type propsType = {
  setSelectValue: React.Dispatch<React.SetStateAction<selectValueType>>;
  selectValue: selectValueType;
  BookingData: BookingDataType | null;
  officeId: number;
};

type mutateType = {
  officeId: number;
  selectDay: string;
  maxPeople: number;
  month: number;
  setAlertState: React.Dispatch<React.SetStateAction<string>>;
  setFaildState: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BookingCalendarAndOption = (props: propsType) => {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [selectMonth, setMonth] = useState<boolean>(false);
  const [selectMaxPeople, setSelectMaxPeople] = useState<boolean>(false);
  const [BookingFaildAlertState, setFaildState] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [LoadingState, setLoadingState] = useState<boolean>(false);
  const PrintDayDom = useRef<HTMLSpanElement>(null);

  const { mutate, isError, isSuccess } = useMutation(
    ["fetchBooking"],
    async (data: mutateType) => {
      if (fetchReservation !== undefined) {
        await fetchReservation(
          data.officeId,
          data.selectDay,
          data.maxPeople,
          data.month,
          data.setAlertState,
          data.setFaildState,
          data.setLoadingState,
        );
      }
    },
    {
      onError: (error: any) => {
        const errorMessage = error.response.data.errorMessage;
        setErrorText(errorMessage);
        setFaildState(true);
        alertRemoveTimer(setFaildState, 2000);
      },
    },
  );

  const mutateProps: mutateType = {
    officeId: props.officeId,
    selectDay: props.selectValue.selectDay,
    maxPeople: props.selectValue.maxPeople,
    month: props.selectValue.month,
    setAlertState: setErrorText,
    setFaildState: setFaildState,
    setLoadingState: setLoadingState,
  };

  useEffect(() => {
    const target = PrintDayDom.current as HTMLParagraphElement;
    if (selectedDay !== undefined) {
      const formatDate = format(selectedDay, "yyyy-MM-dd");
      target.innerText = formatDate;
      props.setSelectValue({ ...props.selectValue, selectDay: formatDate });
    }
  }, [selectedDay]);

  useEffect(() => {
    if (isError) {
      setLoadingState(false);
      setFaildState(true);
      alertRemoveTimer(setFaildState, 2000);
    }
  }, [isError]);

  return (
    <>
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
                      setSelectValue={props.setSelectValue}
                      selectValue={props.selectValue}
                    />
                  </div>
                  <div>
                    <p className="ml-4 mb-1 text-base">사용할 인원을 선택해주세요</p>
                    {props.BookingData !== null ? (
                      <MaxCapacityDropDown
                        width="w-full"
                        setSelectMaxPeople={setSelectMaxPeople}
                        maxPeople={props.BookingData.maxCapacity}
                        selectValue={props.selectValue}
                        setSelectValue={props.setSelectValue}
                      />
                    ) : (
                      <MaxCapacityDropDown
                        width="w-full"
                        setSelectMaxPeople={setSelectMaxPeople}
                        maxPeople={0}
                        selectValue={props.selectValue}
                        setSelectValue={props.setSelectValue}
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
                mutate(mutateProps);
              }}
            >
              예약하기
              {selectedDay && selectMonth && selectMaxPeople && props.BookingData !== null ? (
                <TotalPriceAreaPosition className="rounded-full bg-secondary whitespace-nowrap">
                  <span>
                    총 결제 금액은 {moneyExp(props.BookingData.leaseFee * props.selectValue.maxPeople)}원입니다
                  </span>
                </TotalPriceAreaPosition>
              ) : null}
            </button>
            {LoadingState ? (
              <BookingLoadingCompo />
            ) : isSuccess ? (
              <div className="w-full h-full absolute top-0 left-0  z-10">
                <BookingSuccess />
              </div>
            ) : null}
          </BackgroundCover>
        </div>
      </CalendarAndOPtionWidth>
      {BookingFaildAlertState && <WrongApproachAlertCompo textString={errorText} top="2%" />}
    </>
  );
};

const CalendarAndOPtionWidth = styled.div`
  @media (min-width: 360px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`;

const BackgroundCoverLeftAreaRightContour = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (min-width: 360px) {
    width: 100%;
  }
`;

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
