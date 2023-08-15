import { Officename } from '../../components/booking/Officename';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';

export const MyOffice = () => {
  return (
    <>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        <div className="flex gap-4 p-4">
          <figure className="flex flex-col w-80 gap-1">
            <img className="rounded-xl" src="https://picsum.photos/350" alt="sample" />
            <Officename officename="오피스명" address="주소" />
          </figure>
        </div>
      </BackgroundCover>
    </>
  );
}
