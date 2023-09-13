import { OfficeName } from "../../components/booking/OfficeName";
import { AddOfficeReviewsOfficeInfoCompo } from "./AddOfficeReviewsOfficeInfoCompo";
import { SlickSlider } from "../BookingSlider";
import { useEffect, useState } from "react";
import { returnImgSrc } from "../../Business/AddOfficeReviews/AddOfficeReviewsReturnImgSrc";
import { OfficeReviewsType } from "./AddOfficeReviews";

type propsTpye = {
  officeData: OfficeReviewsType;
};

type imgSrcType = string[];

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  pauseOnHover: true,
  autoplay: true,
};

export const OfficeProfile = (props: propsTpye) => {
  const [ImageSrc, setImageSrc] = useState<imgSrcType>([]);

  const defaultImagePath = "/officeImg/noimage.png";

  useEffect(() => {
    const filterSrcArr = returnImgSrc(props.officeData.officeImagePath);
    setImageSrc(filterSrcArr);
  }, [props.officeData.officeImagePath]);

  return (
    <div className="flex sm:flex-col lg:flex-row">
      <div className="h-80 sm:w-full lg:w-96">
        <SlickSlider setting={setting}>
          {ImageSrc.length >= 1 &&
            ImageSrc.map((item, index) => {
              return <AddOfficeReviewsOfficeInfoCompo imgSrc={item} key={index} />;
            })}
        </SlickSlider>
        {ImageSrc.length === 0 && <AddOfficeReviewsOfficeInfoCompo imgSrc={defaultImagePath} />}
      </div>
      <div className="flex flex-col justify-between text-base py-3 ml-4">
        <div>
          {props.officeData ? (
            <OfficeName name={props.officeData.name} address={props.officeData.location} />
          ) : (
            <OfficeName name={"찾을 수 없음"} address={"찾을 수 없음"} />
          )}

          <p className="pl-2 mt-4 font-black">이용 기간</p>
          {props.officeData ? (
            <p className="pl-2">{`${props.officeData.startDate} ~ ${props.officeData.endDate}`}</p>
          ) : (
            <p className="pl-2">{`찾을 수 없음 ~ 찾을 수 없음`}</p>
          )}
        </div>
        {props.officeData ? (
          <p className="sm:pl-2 sm:mt-10 sm:pl-2">2023년 7월 1일 결제완료</p>
        ) : (
          <p className="sm:pl-2 sm:mt-10 sm:pl-2">찾을 수 없음</p>
        )}
      </div>
    </div>
  );
};
