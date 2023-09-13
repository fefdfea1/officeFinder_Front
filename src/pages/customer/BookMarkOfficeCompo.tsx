import { OfficeName } from "../../components/booking/OfficeName";
import { AiFillStar } from "react-icons/ai";
import { Heart } from "../../components/common/Heart";
import { Link } from "react-router-dom";
import { BookMarkContentType } from "./BookMark";

type propsType = {
  imgSrc: string;
  item: BookMarkContentType;
  index: number;
};

export const BookMarkOfficeCompo = (props: propsType) => {
  return (
    <div data-index={props.index} data-officenum={props.item.officeId} className="BookMarkItem">
      <div className="flex flex-col relative">
        {/* 데이터를 받아올때 오피스 id를 받아와 이동 */}
        <Link to={"#"}>
          <figure className="overflow-hidden rounded-xl w-full md:h-44 ">
            <img src={props.item.officeImagePath} alt="즐겨찾기한 오피스 목록입니다" className="w-full h-full" />
          </figure>
        </Link>
        <div className="flex justify-between relative">
          <OfficeName name={`${props.item.officeName}`} address={`${props.item.officeAddress}`} />
          <div className="flex items-center absolute top-2 right-2 font-bold text-sm tracking-tight">
            <AiFillStar className="mr-1" />
            <span className="mr-1">({props.item.officeReviewRate})</span>
            <span>{props.item.officeReviewAmount}</span>
          </div>
        </div>

        <Heart fillState="active" />
      </div>
    </div>
  );
};
