import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { BookMarkOfficeCompo } from './BookMarkOfficeCompo';
import styled from '@emotion/styled';
import { useRef } from 'react';
export default function BookMark() {
  const arr = Array.from({ length: 20 });

  return (
    <div className="mb-10">
      <BackgroundCover>
        <div className="relative mb-4">
          <Title>즐겨찾는 office</Title>
          <AllremovePosition className="absolute">전체삭제</AllremovePosition>
        </div>
        {/* breakPoint별로 grid-cols를 변경해야함 */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* 데이터를 불러오면 map으로 처리해야하는 부분입니다 */}
          {arr.map(() => {
            return (
              <BookMarkOfficeCompo imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-IbhTFqh9vemV_FD7WQn48tFhODBKb1kEteLagL2mw&s" />
            );
          })}
        </div>
      </BackgroundCover>
    </div>
  );
}

const AllremovePosition = styled.button`
  position: absolute;
  top: 5px;
  right: 0.5rem;
`;
