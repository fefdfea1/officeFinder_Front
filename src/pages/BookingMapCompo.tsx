import { useEffect, useState } from "react";
import { BookingDataType, coordinateType } from "./Booking";
import { GiPositionMarker } from "react-icons/gi";
import { DrawMap } from "../Business/Booking/BookingPrintMap";

type propsType = {
  officePosition: coordinateType | undefined;
  BookingData: BookingDataType | null;
  setOfficePosition: React.Dispatch<React.SetStateAction<coordinateType | undefined>>;
};

export const BookingMapCompo = (props: propsType) => {
  useEffect(() => {
    DrawMap(props.BookingData, props.setOfficePosition);
  }, [props.BookingData]);

  const [loadViewToolTipState, setToolTipState] = useState<boolean>(false);
  return (
    <div id="map" style={{ width: "100%", height: "500px" }} className="mx-auto mb-8 relative">
      {props.officePosition !== undefined && (
        <button
          className="w-12 h-12 absolute top-5 left-2.5 icon z-50 bg-white rounded-xl overflow-hidden"
          onMouseOver={() => {
            setToolTipState(true);
          }}
          onMouseLeave={() => {
            setToolTipState(false);
          }}
        >
          <a
            href={`https://map.kakao.com/link/roadview/${props.officePosition.Ma},${props.officePosition.La}`}
            target="_blank"
            className="w-full h-full  flex items-center justify-center bg-primary"
          >
            <GiPositionMarker style={{ width: "40px", height: "40px", fill: "white" }} />
          </a>
          {loadViewToolTipState && <p className="whitespace-nowrap p-1">로드뷰</p>}
        </button>
      )}
    </div>
  );
};
