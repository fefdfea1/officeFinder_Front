import { AllOfficeList } from "../components/common/AllOfficeList";
import { Search } from "../components/common/Search";
import styled from '@emotion/styled';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


export const Main = () => {
  const [step, setStep]= useState(0)

 const clickDiv = (key:string) => {
  if(key === 'search') {
    setStep(1);
  }
 }

  return (
  <>
    {step === 0 &&
    <div onClick={()=>clickDiv('search')} className=" mx-auto flex justify-center mt-4">
      <SearchBoxContainer className="p-4 shadow-md">
        <div className="top flex justify-center items-center border-b border-solid border-accent pb-2">
          <ContourBox className="text-info text-base p-4">
            장소
          </ContourBox>
          <ContourBox className="border-r text-info text-base p-4">
            최대인원 수
          </ContourBox>
          <ContourBox className="border-l text-info text-base p-4">
            옵션
          </ContourBox>
          <ContourBox className="text-base">
            <button className="btn btn-primary rounded-full bg-primary text-base flex items-center">
              <span>검색</span> <SearchSvg />
            </button>
          </ContourBox>
        </div>
        </SearchBoxContainer>
      </div>}
      {step === 1 && <Search />}
    <div className="p-4 mt-5">
      <AllOfficeList />
    </div>
  </>
  );
};


const SearchBoxContainer = styled.form`
  display: inline-block;
  background-color: #fff;
  border-radius: 12px;
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
