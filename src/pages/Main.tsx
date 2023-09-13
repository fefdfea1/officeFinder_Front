import { AllOfficeList } from "../components/common/AllOfficeList";
import { Search } from "../components/common/Search";
import styled from "@emotion/styled";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "react-query";
import { getSearchApi } from "../fetch/get/main";
import { useQueryClient } from "react-query";
// import { useMutation } from "react-query";
export const Main = () => {
  const queryClient = useQueryClient();
  const [isHovering, setIsHovering] = useState(0);
  const [filterObject, setFilterObject] = useState({});
  const [checkfetch, setCheckfetch] = useState(true);
  const { data } = useQuery(["getSearchApi", checkfetch], () => getSearchApi(filterObject), {
    refetchOnWindowFocus: false,
  });

  const clickFilter = (filters: any) => {
    setFilterObject(filters);
  };
  const clickSearch = () => {
    setCheckfetch(prev => !prev);
  };
  return (
    <>
      <div
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => {
          setIsHovering(0);
        }}
        className="mx-auto mt-4 w-fit"
      >
        {isHovering ? (
          <Search clickFilter={clickFilter} clickSearch={clickSearch} />
        ) : (
          <SearchBoxContainer className="p-3 shadow-md">
            <div className="flex justify-center">
              <ContourBox className="text-info text-base p-4">주소</ContourBox>
              <ContourBox className="text-info text-base p-4">최대인원 수</ContourBox>
              <ContourBox className="text-info text-base p-4">옵션</ContourBox>
              <ContourBox className="text-base">
                <button className="btn btn-primary rounded-full bg-primary text-base flex items-center">
                  <span>검색</span> <SearchSvg />
                </button>
              </ContourBox>
            </div>
          </SearchBoxContainer>
        )}
      </div>
      <div className="p-4 mt-5">
        <AllOfficeList data={data} />
      </div>
    </>
  );
};
const SearchBoxContainer = styled.form`
  display: inline-block;
  background-color: #fff;
  border-radius: 20px;
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
    content: "";
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
