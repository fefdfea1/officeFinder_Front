import { OfficeName } from '../../components/booking/Officename';
import { AiFillStar } from 'react-icons/ai';
import { Heart } from '../../components/common/Heart';
import { Link } from 'react-router-dom';

type propsType = {
  imgSrc: string;
};

export const BookMarkOfficeCompo = (props: propsType) => {
  return (
    <div className="flex flex-col relative">
      {/* 데이터를 받아올때 오피스 id를 받아와 이동 */}
      <Link to={'#'}>
        <figure className="overflow-hidden rounded-xl w-72 h-60">
          <img src={props.imgSrc} alt="즐겨찾기한 오피스 목록입니다" className="w-full h-full" />
        </figure>
      </Link>
      <div className="flex justify-between relative">
        <OfficeName name="오피스 이름입니다" address="주소" />
        <div className="flex items-center absolute top-2 right-2 font-bold text-sm tracking-tight">
          <AiFillStar className="mr-1" />
          <span className="mr-1">(4.91)</span>
          <span>484</span>
        </div>
      </div>
      <p className="text-sm pl-2 ">현재 위치와의 거리 200m</p>
      <button className="absolute right-2 top-2" type="button">
        <Heart />
      </button>
    </div>
  );
};
