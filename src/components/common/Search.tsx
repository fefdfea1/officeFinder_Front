import styled from '@emotion/styled';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { startDayPicker, endDayPicker } from './search_calendarState';
import { setCalendarDay } from './search_calendarSetDay';
import { AiOutlineSearch } from 'react-icons/ai';
import { windowClickEvnetHandler } from './search_windowClickEvnet';

type calenderProps = {
  left: string;
  top: string;
};

export default function Search() {
  const today = new Date();
  const [selectedStartDay, setSelectedStartDay] = useState<Date | undefined>(today);
  const [selectEndDay, setSelectEndDay] = useState<Date | undefined>(today);
  const [startDayCalendarState, setStartDayCalendarState] = useState<boolean>(false);
  const [endDayCalendarState, setEndDayCalendarState] = useState<boolean>(false);
  const startDayDom = useRef<HTMLInputElement>(null);
  const endDayDom = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener('click', () => {
      windowClickEvnetHandler(setStartDayCalendarState, setEndDayCalendarState);
    });
  }, []);

  useEffect(() => {
    if (selectedStartDay) {
      const formatData = setCalendarDay(selectedStartDay);
      if (startDayCalendarState) {
        const target = startDayDom.current as HTMLInputElement;
        target.value = formatData;
        setStartDayCalendarState(false);
      }
    }
  }, [selectedStartDay]);

  useEffect(() => {
    if (selectEndDay) {
      const formatData = setCalendarDay(selectEndDay);
      if (endDayCalendarState) {
        const target = endDayDom.current as HTMLInputElement;
        target.value = formatData;
        setEndDayCalendarState(false);
      }
    }
  }, [selectEndDay]);

  return (
    <SearchBoxContainer className="p-4">
      <div className="top flex justify-center items-center border-b border-solid border-accent pb-2">
        <ContourBox className="text-black">
          <input
            type="text"
            placeholder="찾고싶은 지역을 검색해주세요"
            className="placeholder:text-sm mr-4 text-base"
          />
        </ContourBox>
        <ContourBox className="relative flex border-r w-40 text-black">
          <input
            type="text"
            placeholder="계약 시작일"
            className="placeholder:text-sm w-1/2 text-base"
            readOnly
            onClick={() => {
              startDayPicker(setStartDayCalendarState, setEndDayCalendarState);
            }}
            ref={startDayDom}
          />
          <input
            type="text"
            placeholder="계약 종료일"
            className="placeholder:text-sm w-1/2 text-base"
            readOnly
            onClick={() => {
              endDayPicker(setEndDayCalendarState, setStartDayCalendarState);
            }}
            ref={endDayDom}
          />
          {startDayCalendarState && (
            <DayPickerCustom
              mode="single"
              required
              selected={selectedStartDay}
              onSelect={setSelectedStartDay}
              top="30px"
              left="-110%"
            />
          )}
          {endDayCalendarState && (
            <DayPickerCustom
              mode="single"
              required
              selected={selectEndDay}
              onSelect={setSelectEndDay}
              top="30px"
              left="-58%"
            />
          )}
        </ContourBox>
        <ContourBox className="border-r text-black mr-4 text-base">인원수 components 추가</ContourBox>
        <ContourBox className="text-base">
          <button className="btn btn-primary rounded-full bg-primary text-base flex items-center">
            <span>검색</span> <SearchSvg />
          </button>
        </ContourBox>
      </div>
      <div className="bottom"></div>
    </SearchBoxContainer>
  );
}
/* 기존의 스타일변경으로는 크기와 위치를 세부적으로 조정하기 힘들어 커스텀했습니다 */
const SearchBoxContainer = styled.form`
  display: inline-block;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 3px black;
`;

const DayPickerCustom = styled(DayPicker)<calenderProps>`
  width: 250px;
  height: 300px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;

  & .rdp-caption_label {
    text-align: left;
  }

  & .rdp-months {
    width: 100%;
    height: 100%;

    & .rdp-month {
      width: 100%;
      height: 100%;
    }
  }

  & .rdp-nav {
    position: absolute;
    top: 5%;
    right: 10%;
  }

  & .rdp-table {
    width: 100%;
    height: 100%;
  }

  & .rdp-tbody {
    text-align: center;
  }
`;

const ContourBox = styled.div`
  position: relative;
  height: 100%;

  &placeholder {
    color: #ccc;
  }

  &:nth-of-type(2)::after {
    right: 3%;
  }

  &:nth-of-type(3)::after {
    right: -5%;
  }

  &:nth-of-type(4)::after {
    display: none;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 5%;
    width: 1px;
    height: 60%;
    margin: 5px 0;
    background-color: #dde1eb;
  }
`;

const SearchSvg = styled(AiOutlineSearch)`
  width: 18px;
  height: 18px;
  color: #fff;
`;
