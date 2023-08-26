
import { ProfileCircle } from "../common/ProfileCircle";
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

export const Reviews = () => {
  // 동적으로 추가될 예정 / 리뷰가 담긴 Array의 length가 1이면 border이 추가되지 않도록 구현이 필요함.
  return (
    <>
      <h3 className="p-4 text-primary text-base font-bold">Reviews</h3>
      {/* 리뷰 영역 */}
      <div className="border-b border-solid border-accent p-3">
        <div className="relative">
          <ProfileCircle />
          <div className="text-sm absolute top-6 left-12 flex">
            <span className="">23년 8월 10일</span>
            <div className="pl-2 flex items-center">
              <ImStarFull className="text-base" />
              <ImStarFull className="text-base" />
              <ImStarFull className="text-base" />
              <ImStarHalf className="text-base" />
              <ImStarEmpty className="text-base" />
            </div>
          </div>
        </div>
        <div className="p-2 pl-12 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis, voluptate labore voluptates quibusdam voluptatibus ipsam ullam quas, eligendi sunt obcaecati, sint nemo delectus culpa officia eum dolores dolore assumenda!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae ipsum dolorum, deserunt atque vel tenetur ea? Necessitatibus labore tenetur dolor sequi dolore? Nam illo, est quis accusamus perferendis sit?
        </div>
      </div>

    </>
  );
}

