export type corrdinateType = {
  La: number;
  Ma: number;
};

export const changeLoadView = (coordinate: corrdinateType) => {
  const roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
  const roadview = new window.kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
  const roadviewClient = new window.kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

  const position = new window.kakao.maps.LatLng(coordinate.La, coordinate.Ma);

  // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
  roadviewClient.getNearestPanoId(position, 50, function (panoId: any) {
    console.log(panoId);
    roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
  });
};
