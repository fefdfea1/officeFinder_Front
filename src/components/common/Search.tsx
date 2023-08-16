import styled from '@emotion/styled';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { startDayPicker, endDayPicker } from './search_calendarState';
import { setCalendarDay } from './search_calendarSetDay';
import { AiOutlineSearch } from 'react-icons/ai';
import { OptionsCheckbox } from './OptionsCheckbox';
import { MaxCapacityDropDown } from './MaxCapacityDropDown';
import 'react-day-picker/dist/style.css';

type calenderProps = {
  left: string;
  top: string;
};

export const Search = () => {
  const today = new Date();
  const [selectedStartDay, setSelectedStartDay] = useState<Date | undefined>(today);
  const [selectEndDay, setSelectEndDay] = useState<Date | undefined>(today);
  const [startDayCalendarState, setStartDayCalendarState] = useState<boolean>(false);
  const [endDayCalendarState, setEndDayCalendarState] = useState<boolean>(false);
  const startDayDom = useRef<HTMLInputElement>(null);
  const endDayDom = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 클린업 함수 작성을 위해 이 함수만 따로 파일로 빼지 않았습니다
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.classList.contains('startSelect') && !target.classList.contains('endSelect')) {
        if (startDayDom.current?.classList.contains('active') || endDayDom.current?.classList.contains('active')) {
          setStartDayCalendarState(false);
          setEndDayCalendarState(false);
          if (startDayDom.current && endDayDom.current) {
            startDayDom.current.classList.remove('active');
            endDayDom.current.classList.remove('active');
          }
        }
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
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
    <SearchBoxContainer className="p-4 shadow-md">
      <div className="top flex justify-center items-center border-b border-solid border-accent pb-2">
        <ContourBox className="mr-4">
          <input
            type="text"
            placeholder="찾고싶은 지역을 검색해주세요"
            className="placeholder:text-sm text-base input"
          />
        </ContourBox>
        <ContourBox className="relative flex border-r w-52">
          <input
            type="text"
            placeholder="계약 시작일"
            className="placeholder:text-sm w-1/2 text-sm input  mr-1 startSelect"
            readOnly
            onClick={() => {
              startDayPicker(setStartDayCalendarState, setEndDayCalendarState, startDayDom, endDayDom);
            }}
            ref={startDayDom}
          />
          <input
            type="text"
            placeholder="계약 종료일"
            className="placeholder:text-sm w-1/2 text-sm input mr-3 endSelect"
            readOnly
            onClick={() => {
              endDayPicker(setEndDayCalendarState, setStartDayCalendarState, startDayDom, endDayDom);
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
              className="shadow-md"
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
        <ContourBox className="border-r text-base mr-4">
          <MaxCapacityCopy width="w-44" />
        </ContourBox>
        <ContourBox className="text-base">
          <button className="btn btn-primary rounded-full bg-primary text-base flex items-center">
            <span>검색</span> <SearchSvg />
          </button>
        </ContourBox>
      </div>
      <div className="bottom">
        <OptionsCheckbox />
      </div>
    </SearchBoxContainer>
  );
};
/* 기존의 스타일변경으로는 크기와 위치를 세부적으로 조정하기 힘들어 커스텀했습니다 */
const SearchBoxContainer = styled.form`
  display: inline-block;
  background-color: #fff;
  border-radius: 12px;
`;

const DayPickerCustom = styled(DayPicker)<calenderProps>`
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

  &:nth-of-type(1)::after {
    right: -4%;
  }

  &:nth-of-type(2)::after {
    right: 1%;
  }

  &:nth-of-type(3)::after {
    display: none;
  }

  &:nth-of-type(4)::after {
    display: none;
  }

  ::after {
    content: '';
    position: absolute;
    top: 30%;
    right: 5%;
    width: 1px;
    height: 30%;
    margin: 5px 0;
    background-color: #dde1eb;
  }
`;

const SearchSvg = styled(AiOutlineSearch)`
  width: 18px;
  height: 18px;
  color: #fff;
`;

const MaxCapacityCopy = styled(MaxCapacityDropDown)`
  & .form-control {
    position: absolute;
  }
`;
