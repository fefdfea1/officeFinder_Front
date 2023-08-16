import { OfficeName } from '../../components/booking/Officename';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { ProfileCircle } from '../../components/common/ProfileCircle';
import { Title } from '../../components/common/Title';


export const MyOffice = () => {
  return (
    <>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        <div className="flex gap-4 p-4">
          <figure className="flex flex-col w-[500px] gap-1">
            <img className="rounded-xl" src="https://picsum.photos/350" alt="sample" />
          </figure>
          <div className="flex flex-col gap-2 border-black w-full">
            <OfficeName name="이름" address="주소" />
            <button className="btn btn-primary w-full">매출 자세히보기</button>
            {/* review */}
            <div className="w-full shadow-md rounded-xl p-4">
              <p className="text-primary pb-4">Reviews</p>
              <div className="flex text-sm">
                <ProfileCircle />

                <div> 리뷰 내용입니다.</div>
              </div>

            </div>

          </div>
        </div>

      </BackgroundCover >
    </>
  );
};
