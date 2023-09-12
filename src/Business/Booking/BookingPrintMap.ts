import { BookingDataType } from "../../pages/Booking";
import { coordinateType } from "../../pages/Booking";

export const DrawMap = (
  BookingData: BookingDataType | null,
  setOfficePosition: React.Dispatch<React.SetStateAction<coordinateType | undefined>>,
) => {
  if (BookingData !== null) {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(35.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    let geocoder = new window.kakao.maps.services.Geocoder();
    //실제 데이터를 받으면 해당 데이터의 주소로 변경
    geocoder.addressSearch(BookingData.address, (result: any, status: any) => {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        setOfficePosition(coords);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0; border-radius:15px;" id="infoWindow">${BookingData.officeName}</div>`,
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        const infoWindowDom = document.querySelector("#infoWindow");
        const infoWindowParentDom = infoWindowDom?.parentNode?.parentNode as HTMLElement;
        infoWindowParentDom ? (infoWindowParentDom.style.borderRadius = "15px") : null;
      }
    });
  } else {
    //아무 주소도 없으면 기본값으로 리턴
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(35.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }
};
