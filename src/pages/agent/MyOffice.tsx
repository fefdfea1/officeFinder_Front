import { Link } from 'react-router-dom';
import { OfficeName } from '../../components/booking/Officename';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Button } from '../../components/common/Button';
import { ProfileCircle } from '../../components/common/ProfileCircle';
import { Title } from '../../components/common/Title';


export const MyOffice = () => {
  //내가 가진 officeList를 Map을 사용해 반복할 수 있도록 합니다.
  return (
    <>
      <div className="flex justify-end relative">
        <div className="absolute top-6">
          <Link to="/AddOffice"><Button style="btn btn-primary btn-outline w-32" text="새 지점 등록하기" /></Link>
        </div>
      </div>
      <BackgroundCover>
        <Title>나의 지점보기</Title>
        <div className="flex gap-4 p-4">
          <figure className="flex flex-col w-[560px] gap-1">
            <img className="rounded-xl" src="https://picsum.photos/350" alt="sample" />
          </figure>
          <div className="flex flex-col gap-2 border-black w-full">
            <OfficeName name="이름" address="주소" />
            <Link to="/SalesAnalysis"><button className="btn btn-primary w-full">매출 자세히보기</button></Link>
            {/* review */}
            <BackgroundCover margin="mt-0" padding="p-4">

              <p className="text-primary pb-4">Reviews</p>
              <div className="reviews">

                <div className="flex text-sm pb-4">
                  <ProfileCircle />

                  <div>  첫 번째 리뷰 내용입니다.</div>
                </div>
                <div className="flex text-sm">
                  <ProfileCircle />

                  <div> 두 번째 리뷰 내용입니다.</div>
                </div>

              </div>
            </BackgroundCover>


          </div>
        </div>

      </BackgroundCover >
    </>
  );
};
