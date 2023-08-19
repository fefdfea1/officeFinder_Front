import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';
import { AllOfficeList } from '../../components/common/AllOfficeList';
import styled from '@emotion/styled';
export default function BookMark() {
  const arr = new Array({ length: 10 });
  return (
    <BackgroundCover>
      <div className="relative mb-4">
        <Title>즐겨찾는 office</Title>
        <AllremovePosition className="absolute">전체삭제</AllremovePosition>
      </div>
      <div>
        {/* 데이터를 불러오면 map으로 처리해야하는 부분입니다 */}
        <AllOfficeList />
      </div>
    </BackgroundCover>
  );
}

const AllremovePosition = styled.button`
  position: absolute;
  top: 5px;
  right: 0.5rem;
`;
