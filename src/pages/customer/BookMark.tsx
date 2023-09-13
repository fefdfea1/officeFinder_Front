import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { BookMarkOfficeCompo } from "./BookMarkOfficeCompo";
import { useQuery } from "react-query";
import { fetchCustomerBookMarkData } from "../../fetch/get/customer";
import { fetchAgentBookMarkData } from "../../fetch/get/agent";
import { useEffect, useState } from "react";
import { BookMarkAlert } from "./BookMarkAlert";
import { Pagination } from "../../components/common/Pagination";
import { fetchBookMarkAllDelete } from "../../fetch/delete/customer";
import { AllRemoveAlert } from "../../Business/BookMark/BookMarkRemoveItem";
import { useMyContext } from "../../contexts/MyContext";
import styled from "@emotion/styled";

export type BookMarkContentType = {
  content: {
    id: number;
    officeAddress: string;
    officeId: number;
    officeImagePath: string;
    officeName: string;
  };
};

export type BookMarkDataType = {
  content: BookMarkContentType[];
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

const defaultValue = {
  content: [],
  empty: true,
  first: true,
  last: true,
  number: 0,
  numberOfElements: 0,
  size: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  totalElements: 0,
  totalPages: 0,
};

export const BookMark = () => {
  const [BookMarkData, setBookMarkData] = useState<BookMarkDataType>(defaultValue);
  const { isAlertState, setIsAlertState } = useMyContext();
  const userType = localStorage.getItem("userType");
  const { data } = useQuery<BookMarkDataType>(
    "BookMark",
    () =>
      userType === "customer" && userType !== undefined
        ? fetchCustomerBookMarkData(1, 10)
        : fetchAgentBookMarkData(1, 10),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (data) {
      setBookMarkData(data);
    }
  }, [data]);

  return (
    <div className="mb-10">
      <BackgroundCover>
        <div className="relative mb-4">
          <Title>즐겨찾는 office</Title>
          <AllRemovePosition
            className="absolute"
            onClick={() => {
              fetchBookMarkAllDelete();
              AllRemoveAlert(setIsAlertState);
            }}
          >
            전체삭제
          </AllRemovePosition>
        </div>
        {/* breakPoint별로 grid-cols를 변경해야함 */}
        <div className="grid grid-cols-4 gap-8 mb-8 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* 데이터를 불러오면 map으로 처리해야하는 부분입니다 */}
          {BookMarkData.content.map((item, index) => {
            console.log(item);
            return (
              <BookMarkOfficeCompo
                item={item}
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-IbhTFqh9vemV_FD7WQn48tFhODBKb1kEteLagL2mw&s"
                key={item.content.officeId}
                index={index}
              />
            );
          })}
        </div>
      </BackgroundCover>
      {isAlertState && (
        <RemoveBookMarkAlertPosition>
          <BookMarkAlert alertState={isAlertState} showText={"즐겨찾기에서 제거 됨"} />
        </RemoveBookMarkAlertPosition>
      )}
      <div className="mt-6">
        <Pagination itemsPerPage={10} totalItems={BookMarkData.totalElements} />
      </div>
    </div>
  );
};

const AllRemovePosition = styled.button`
  position: absolute;
  top: 5px;
  right: 0.5rem;
`;

const RemoveBookMarkAlertPosition = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
