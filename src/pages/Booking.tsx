import { Title } from '../components/common/Title';
import { BackgroundCover } from '../components/common/BackgroundCover';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useState, useEffect, useRef } from 'react';
import { MaxCapacityDropDown } from '../components/common/MaxCapacityDropDown';
import { OfficeName } from '../components/booking/Officename';
import { OfficeOptions } from '../components/booking/OfficeOptions';
import { SelectDateDropDown } from '../components/agent/SelectDateDropDown';
import { ReservationComplete } from '../components/agent/ReservationComplete';
import styled from '@emotion/styled';
import 'react-day-picker/dist/style.css';

//추후 Option에서 선택한 정보들을 가

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  // 받아오는 api의
  const [reservationComplete, setReservationComplete] = useState<boolean>(false);
  const PrintDayDom = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(35.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  useEffect(() => {
    const target = PrintDayDom.current as HTMLParagraphElement;
    if (selectedDay !== undefined) {
      target.innerText = format(selectedDay, 'yyyy-MM-dd');
    }
  }, [selectedDay]);

  return (
    <>
      <div className="w-5/6 mx-auto py-8">
        <div className="mb-8">
          <Title>예약하기</Title>
        </div>
        <div className="flex mb-8">
          <ImgAreaWidht className="left-area mr-8">
            <figure>
              <div className="w-full h-96 rounded-xl overflow-hidden mb-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="오피스 이미지"
                  className="block w-full h-full"
                />
              </div>
              {/* 데이터 받아오면 넣어야함 */}
              <h3 className="mb-4">선릉 공유오피스 더공간 A</h3>
              <div className="mb-8">
                {/* 데이터 받아오면 주소에 넣어야함 */}
                <OfficeName name="" address="주소"></OfficeName>
              </div>
              <div className="flex">
                <button className="btn btn-outline btn-primary w-5/12">다른 오피스 둘러보기</button>
                <button className="btn btn-outline btn-primary w-5/12 ml-auto">문의하기</button>
              </div>
            </figure>
          </ImgAreaWidht>
          <CaledarAndOPtionWidth className="w-3/5">
            {/* flex와 div로 영역을 나누기 위해 div를 많이 쓰더라도 사용했습니다 */}
            <BackgroundCover>
              <div className="flex mb-4">
                <BackgroundCoverLeftAreaRightContour>
                  <BackgroundCoverLeftAreaTopContour className="text-center text-primary">
                    <span ref={PrintDayDom} className="text-base">
                      시작 날짜를 알려주세요
                    </span>
                  </BackgroundCoverLeftAreaTopContour>
                  <InheritanceDayPickr mode="single" selected={selectedDay} onSelect={setSelectedDay} />
                </BackgroundCoverLeftAreaRightContour>
                <div className="w-1/2 ml-4">
                  <div className="inline-block flex flex-col justify-center">
                    <div className="ml-4 text-base">
                      <p>몇 개월 사용할지 알려주세요</p>
                      <p className="mb-4">1년 이상 장기 예약은 문의가 필요합니다</p>
                    </div>
                    <div className="mb-4">
                      <SelectDateDropDown width="w-full" />
                    </div>
                    <div className="mb-4">
                      <p className="ml-4 mb-1 text-base">사용할 인원을 선택해주세요</p>
                      <MaxCapacityDropDown width="w-full" />
                    </div>
                    {/* 월 정기 결제 버튼  */}
                    <div className="flex ml-4">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input type="checkbox" className="checkbox checkbox-primary" />
                          <span className="label-text ml-4 text-base">월 정기 결제</span>
                        </label>
                      </div>
                    </div>
                    <div className="ml-12 text-base">
                      <p className="text-primary">다음 월 정기 결제일은 0000입니다</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-full"> 예약하기</button>
              {/* 컴포넌트 제작 완료대로 추가 */}
              {reservationComplete && (
                <div className="w-full h-full absolute top-0 left-0 z-50 rounded-xl">
                  <ReservationComplete />
                </div>
              )}
            </BackgroundCover>
          </CaledarAndOPtionWidth>
        </div>
        <div id="map" style={{ width: '100%', height: '500px' }} className="mx-auto mb-8"></div>
        {/* width : w-full or 숫자입력으로 width값 조절 */}
        <div>
          <OfficeOptions width="w-full" needReviewCount={true} />
        </div>
      </div>
    </>
  );
}

const ImgAreaWidht = styled.div`
  width: 40%;
`;

const CaledarAndOPtionWidth = styled.div`
  width: 60%;
`;

//캘린더 커스텀을 위한 styled
const InheritanceDayPickr = styled(DayPicker)`
  & .rdp-caption {
    position: relative;
    justify-content: center;
  }

  & .rdp-months {
    justify-content: center;
  }

  & .rdp-nav {
    position: absolute;
    top: -5px;
    left: 0;

    & > button {
      position: absolute;
      top: 0;
      left: 0;
    }

    & > button:nth-of-type(2) {
      position: absolute;
      top: 0;
      left: 240px;
    }
  }
`;
// 가상 요소를 사용하기 위해 따로 제작
const BackgroundCoverLeftAreaRightContour = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

// 가상 요소를 사용하기 위해 따로 제작
//기존에 있던 accent색상을 적용하면 거의 보이지 않아서 다른 색상을 좀 생각해봐야할 것으로 보임
const BackgroundCoverLeftAreaTopContour = styled.p`
  position: relative;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    top: 120%;
    left: 0%;
    width: 97%;
    height: 1px;
    border-radius: 12px;
    background-color: var(--primary);
  }
`;
