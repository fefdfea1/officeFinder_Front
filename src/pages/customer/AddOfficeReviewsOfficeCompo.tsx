import { Heart } from '../../components/common/Heart';
import { OfficeName } from '../../components/booking/OfficeName';

export const OfficeProfile = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row">
      <figure className="h-80 rounded-lg overflow-hidden mr-6 relative sm:w-full lg:w-96">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHBP4Mb-Yi9zZovnacK-KaJm1N6WrtvaOdZHbR3rA-g&s"
          alt="오피스 이미지"
          className="w-full h-full"
        />
        <div className="absolute right-2 top-2">
          <Heart />
        </div>
      </figure>
      <div className="flex flex-col justify-between text-base py-3">
        <div>
          <OfficeName name="선릉 공유오피스 더공간B" address="서울시 강남구 테헤란로70길 14-10 번" />
          <p className="pl-2 mt-4 font-black">이용 기간</p>
          <p className="pl-2">{`2023년 7월 8일 ~ 2023년 8월 7일`}</p>
        </div>
        <p className="sm:pl-2 sm:mt-10 sm:pl-2">2023년 7월 1일 결제완료</p>
      </div>
    </div>
  );
};
