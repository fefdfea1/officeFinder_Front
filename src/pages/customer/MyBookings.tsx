import { MyBookingsListCompo } from './MyBookingsListCompo';
import { BackgroundCover } from '../../components/common/BackgroundCover';
import { Title } from '../../components/common/Title';

const arr = Array.from({ length: 10 });

export const MyBookings = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* 각각 데이터의 갯수만큼 반복하여 제작 */}
      <div className="mt-10 mb-10">
        <BackgroundCover>
          <Title>나의 예약</Title>
          <div className="mt-8"></div>
          {arr.map((_, index) => {
            return <MyBookingsListCompo type="MyBooking" key={index} />;
          })}
          <Title>지난 예약</Title>
          <div className="mt-8">
            {arr.map((_, index) => {
              return <MyBookingsListCompo type="last_reservation" key={index} />;
            })}
          </div>
        </BackgroundCover>
      </div>
    </div>
  );
};
