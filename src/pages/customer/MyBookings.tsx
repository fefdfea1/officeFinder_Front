import { MyBookingsListCompo } from './MyBookingsListCompo';
import { BackgroundCover } from '../../components/common/BackgroundCover';
export default function MyBookings() {
  return (
    <div className="w-11/12 mx-auto">
      {/* 각각 데이터의 갯수만큼 반복하여 제작 */}
      <BackgroundCover>
        <MyBookingsListCompo type="MyBooking" />
        <div className="mt-24">
          <MyBookingsListCompo type="last_reservation" />
        </div>
      </BackgroundCover>
    </div>
  );
}
