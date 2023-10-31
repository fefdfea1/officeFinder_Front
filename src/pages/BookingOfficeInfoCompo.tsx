import { OfficeName } from "../components/booking/OfficeName";
import { BookingDataType } from "./Booking";

type propsType = {
  BookingData: BookingDataType | null;
};

export const BookingOfficeInfoCompo = (props: propsType) => {
  return (
    <div className="mb-8 sm:mb-3">
      {/* 데이터 받아오면 주소에 넣어야함 */}
      {props.BookingData !== null ? (
        <OfficeName name={props.BookingData.officeName} address={props.BookingData.address} />
      ) : (
        <OfficeName name="정보 없음" address="정보 없음" />
      )}
    </div>
  );
};
