import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import { OptionsCheckbox } from "./OptionsCheckbox";
import { MaxCapacityDropDown } from "./MaxCapacityDropDown";
import "react-day-picker/dist/style.css";
import { SetStateAction } from "react";
import { selectValueType } from "../../pages/Booking";

export const Search = ({ clickFilter, clickFiltersearch }: any) => {
  return (
    <SearchBoxContainer className="p-4 shadow-md">
      <div className="flex justify-center items-center border-b border-solid border-accent pb-2 lg:flex-row md:flex-col sm:flex-col">
        <ContourBox className="flex border-r border-solid border-accent mx-4 lg:border-solid md:mx-auto sm:border-none sm:mx-auto sm:p-2">
          <input
            type="text"
            placeholder="시/도"
            className="w-24 placeholder:text-sm text-info input md:mr-3 md:items-center sm:mr-2"
            // onChange={clickFilter}
          />
          <input
            type="text"
            placeholder="시/군/구"
            className="w-24 placeholder:text-sm text-info input md:mr-3 md:items-center sm:mr-2"
            // onChange={clickFilter}
          />
          <input
            type="text"
            placeholder="읍/면/동/리"
            className="w-24 placeholder:text-sm text-info input md:mr-3 md:items-center sm:mr-2"
            // onChange={clickFilter}
          />
        </ContourBox>

        <div className="flex flex-row w-full justify-around md:justify-around sm:justify-between">
          <ContourBox className="text-info mx-3 md:mr-6 sm:mr-6">
            {/* <MaxCapac width="w-32" /> */}
            {/* <MaxCapacityDropDown /> */}
            <MaxCapacityDropDown
              width={"w-32"}
              maxPeople={10}
              setSelectValue={function (value: SetStateAction<selectValueType>): void {
                throw new Error("Function not implemented.");
              }}
              selectValue={{
                selectDay: "",
                month: 0,
                maxPeople: 0,
              }}
            />
          </ContourBox>
          <ContourBox className="text-base">
            <button
              onClick={clickFiltersearch}
              className="btn btn-primary rounded-full bg-primary text-base flex items-center"
            >
              <span className="lg:inline md:hidden sm:hidden">검색</span>
              <SearchSvg />
            </button>
          </ContourBox>
        </div>
      </div>
      <div className="bottom">
        <OptionsCheckbox onOptionChange={clickFilter} />
      </div>
    </SearchBoxContainer>
  );
};
/* 기존의 스타일변경으로는 크기와 위치를 세부적으로 조정하기 힘들어 커스텀했습니다 */
const SearchBoxContainer = styled.div`
  min-height: 230px;
  background-color: #fff;
  border-radius: 12px;
  z-index: 10;
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

  /* ::after {
    content: '';
    position: absolute;
    top: 30%;
    right: 5%;
    width: 1px;
    height: 30%;
    margin: 5px 0;
    background-color: #dde1eb;
  } */
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
