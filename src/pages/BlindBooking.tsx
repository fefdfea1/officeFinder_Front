import { Link } from 'react-router-dom';
export const BlindBooking = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-base-100 rounded-xl sm:p-4">
      <h3 className="mb-4 w-full text-center font-black text-2xl sm:text-xl">🎉예약이 완료되었습니다🎉</h3>
      <p className="mb-4 w-full text-center text-primary sm:text-lg">예약 날짜를 잘 확인해주세요</p>
      <button className="btn btn-outline btn-primary w-full p-0">
        <Link to={'/'} className="block w-full h-full flex justify-center items-center">
          목록으로
        </Link>
      </button>
    </div>
  );
};
