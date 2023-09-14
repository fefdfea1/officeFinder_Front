import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";
import { AllOfficeList } from "../components/common/AllOfficeList";
import { Search } from "../components/common/Search";
import { AiOutlineSearch } from "react-icons/ai";
import { getSearchApi } from "../fetch/get/main";
import { cookies } from "../fetch/common/axiosApi"; // Import cookies
import type { OfficeResponse } from "../type/mainTypes";
import { NotLogin } from "../components/main/NotLogin";


export const Main = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const [filterObject, setFilterObject] = useState({});
  const [filterAddress, setFilterAddress] = useState({
    legion: "",
    city: "",
    town: "",
  });
  const [selectPeople, setSelectPeople] = useState({
    maxCapacity: 0,
  });

  const [checkfetch, setCheckfetch] = useState(true);
  const token = cookies.get("Authorization");
  const { data } = useQuery<OfficeResponse>(["getSearchApi", checkfetch], () =>
    getSearchApi({ ...filterObject, ...filterAddress, ...selectPeople }), {
    enabled: isLogin
  }
  );
  useEffect(() => {
    setIsLogin(!!token);
  }, [token]);

  if (!isLogin) {
    return (<>
      <NotLogin />
    </>)
  }
  const clickFilter = (filters: any) => {
    setFilterObject(filters);
  };

  const clickSearch = () => {
    setCheckfetch((prev) => !prev);
    setIsClicked(false);
  };

  const clickButton = (e: any) => {
    e.preventDefault();
    setIsClicked(true);
  };

  const handleChangeFilterAddress = (e: any) => {
    let { name, value } = e.target;
    setFilterAddress((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSelectPeople = (number: any) => {
    console.log(number);
    setSelectPeople({
      maxCapacity: number,
    });
  };

  return (
    <>
      {data ? (
        <>
          <div className="mx-auto mt-4 w-fit">
            {isClicked ? (
              <Search
                clickFilter={clickFilter}
                clickSearch={clickSearch}
                handleChangeFilterAddress={handleChangeFilterAddress}
                filterAddress={filterAddress}
                handleSelectPeople={handleSelectPeople}
                setMaxPeople={setSelectPeople}
              />
            ) : (
              <SearchBoxContainer className="p-3 shadow-md">
                <div className="flex justify-center">
                  <ContourBox className="text-info text-base p-4">주소</ContourBox>
                  <ContourBox className="text-info text-base p-4">최대인원 수</ContourBox>
                  <ContourBox className="text-info text-base p-4">옵션</ContourBox>
                  <ContourBox className="text-base">
                    <button
                      onClick={clickButton}
                      className="btn btn-primary rounded-full bg-primary text-base flex items-center"
                    >
                      <span>검색</span> <SearchSvg />
                    </button>
                  </ContourBox>
                </div>
              </SearchBoxContainer>
            )}
          </div>
          <div className="p-4 mt-5">
            <AllOfficeList data={data} />
          </div></>
      ) : (
        <NotLogin />
      )}
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