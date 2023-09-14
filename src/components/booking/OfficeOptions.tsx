import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeOptionName } from "../../Business/Booking/BookingOptionIcon";
import { ObjectType } from "../../Business/Booking/BookingOptionIcon";
import { moneyExp } from "../../Business/moneyExp/moneyExp";

type PropsOptionType = {
  [key: string]: boolean;
};

type propsType = {
  width?: string;
  needReviewCount?: boolean;
  maxPeople?: number;
  price?: number;
  totalReview: string;
  OptionData: PropsOptionType;
};

export const OfficeOptions = (props: propsType) => {
  const [optionData, setOptionData] = useState<ObjectType[]>([]);
  const maxPeopleArray = Array.from({ length: props.maxPeople || 0 });
  const price = props.price || 0;

  useEffect(() => {
    if (props.OptionData) {
      const keys = Object.keys(props.OptionData);
      const changeArr = changeOptionName(keys);
      setOptionData(changeArr);
    }
  }, [props.OptionData]);

  return (
    <>
      <div className={`shadow-lg ${props.width && props.width}  py-4 rounded-lg sm:px-4 md:px-12 lg:px-16`}>
        <h3 className="text-lg text-primary mb-4">Price</h3>
        <div className="border-b border-solid border-accent pb-4 mb-4 rounded-sm">
          <div className="grid grid-rows-2 grid-cols-2 gap-y-3 text-base sm:w-11/12 lg:w-4/6">
            {maxPeopleArray.map((_, index) => {
              return <span key={index}>{`${index + 1}인실 월 ${moneyExp(price * (index + 1))}포인트`}</span>;
            })}
          </div>
        </div>
        <h3 className="text-lg text-primary mb-4">Options</h3>
        <div className={`${props.needReviewCount && "border-b border-solid border-accent pb-4 mb-4"}`}>
          <div className="w-full text-base grid grid-cols-3 ">
            {/* p태그로 서버에서 받아오는 옵션을 반복문으로 넣어야함 */}
            {optionData.length >= 1 &&
              optionData.map((item, index) => {
                return (
                  <>
                    <p key={index} className="flex items-center text-base mb-1">
                      <span className="mr-1">{item.Icon}</span>
                      <span>{item.name}</span>
                    </p>
                  </>
                );
              })}
          </div>
        </div>
        {props.needReviewCount && (
          <h3 className="text-lg text-primary mb-4">
            <Link to={"/AllReviews"}>
              <span className="mr-2">Reviews</span>
              {/* 데이터를 받으면 동적으로 추가 */}
              <span>({props.totalReview})</span>
            </Link>
          </h3>
        )}
      </div>
    </>
  );
};
