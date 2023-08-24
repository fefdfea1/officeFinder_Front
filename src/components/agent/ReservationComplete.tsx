import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ReservationComplete = () => {
  // Link태그로 하면 className이 적용이 안 되는 부분이 많아 Navigate로 처리했습니다
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center align-center flex-col bg-base-100  text-center p-32">
      <h3 className="text-2xl mb-2">🎉예약이 완료되었습니다.🎉</h3>
      <p className="text-primary mb-8">예약 날짜를 잘 확인해주세요.</p>

      <button
        className="btn btn-outline btn-primary w-full"
        onClick={() => {
          navigate('/');
        }}
      >
        목록으로
      </button>
    </div>
  );
};
