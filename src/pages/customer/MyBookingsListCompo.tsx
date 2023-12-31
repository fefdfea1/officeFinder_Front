import { OfficeName } from "../../components/booking/OfficeName";
import { Heart } from "../../components/common/Heart";
import { useRef } from "react";
import { MyBookingContentType } from "./MyBookings";
import { useSetStatusText } from "./MyBookingsSetStatusText";
import { Link } from "react-router-dom";

type propsType = {
  type?: string;
  item: MyBookingContentType;
  officeNum: number;
  mathId: boolean;
};

export const MyBookingsListCompo = (props: propsType) => {
  const statePTag = useRef<HTMLParagraphElement>(null);
  useSetStatusText(statePTag, props.item.leaseStatus);

  return (
    <>
      <div className="flex px-10 sm:px-2 sm:flex-col lg:flex-row mb-8" data-officenum={props.item.officeId}>
        <figure className="overflow-hidden rounded-lg h-72 relative sm: mr-0 lg:w-2/5 lg:mr-8">
          <img
            src={
              props.item.officeImagePath !== "None" && props.item.officeImagePath !== null
                ? props.item.officeImagePath[0]
                : "/officeImg/noimage.png"
            }
            alt="오피스 이미지"
            className="w-full h-full block"
          />
          <div className="absolute right-2 top-2">{props.mathId ? <Heart fillState="active" /> : <Heart />}</div>
        </figure>
        <div className="flex flex-col justify-center sm:w-full lg:w-6/12 ">
          <div className=" sm:mb-0">
            <OfficeName name={props.item.name} address={props.item.location} />
          </div>
          <div className="p-2 text-sm">
            <p className="font-bold text-base">이용 기간</p>
            <p className="font-bold text-lg mb-3 sm:text-sm md:text-base lg:text-lg">
              {`${props.item.startDate} ~ ${props.item.endDate}`}
            </p>
            {props.type === "MyBooking" && (
              <p className="mb-4">다음 사용자를 위해 기간 내에 오피스를 깨끗히 해주세요.</p>
            )}
          </div>
          <div
            className={`p-2 text-sm ${
              props.type === "last_reservation" && "flex justify-between items-center sm:flex-col sm:items-start"
            }`}
          >
            <div className="mb-4">
              <p className="font-black text-lg">현재 상태</p>
              <p ref={statePTag} className="text-base"></p>
            </div>
            <p className="text-base mb-1">{`결제일: ${props.item.paymentDate}`}</p>
            {props.type === "last_reservation" && (
              <Link
                className="btn btn-primary sm:mt-4 sm:w-full lg:w-5/12 xl:w-4/12"
                to={`/AddOfficeReviews/${props.item.leaseId}`}
              >
                리뷰작성하기
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
