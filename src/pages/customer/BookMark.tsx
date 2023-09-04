import { BackgroundCover } from "../../components/common/BackgroundCover";
import { Title } from "../../components/common/Title";
import { BookMarkOfficeCompo } from "./BookMarkOfficeCompo";
import { useQuery } from "react-query";
import { fetchBookMarkData } from "../../fetch/get/agent";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export type BookMarkDataType = {
  officeAddress: string;
  officeName: string;
};

const defaultValue = [
  {
    officeName: "",
    officeAddress: "",
  },
];

export const BookMark = () => {
  const [BookMarkData, setBookMarkData] = useState<BookMarkDataType[]>(defaultValue);
  const { data } = useQuery("BookMark", fetchBookMarkData);
  useEffect(() => {
    if (data) {
      setBookMarkData(data.BookMark.data);
      console.log(BookMarkData);
    }
  }, [data]);

  return (
    <div className="mb-10">
      <BackgroundCover>
        <div className="relative mb-4">
          <Title>즐겨찾는 office</Title>
          <AllremovePosition className="absolute">전체삭제</AllremovePosition>
        </div>
        {/* breakPoint별로 grid-cols를 변경해야함 */}
        <div className="grid grid-cols-4 gap-8 mb-8 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* 데이터를 불러오면 map으로 처리해야하는 부분입니다 */}
          {BookMarkData.map((item, index) => {
            return (
              <BookMarkOfficeCompo
                item={item}
                imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-IbhTFqh9vemV_FD7WQn48tFhODBKb1kEteLagL2mw&s"
                key={index}
              />
            );
          })}
        </div>
      </BackgroundCover>
    </div>
  );
};

const AllremovePosition = styled.button`
  position: absolute;
  top: 5px;
  right: 0.5rem;
`;
