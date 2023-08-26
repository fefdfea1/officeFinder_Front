import { useEffect } from 'react';

export const useSetStatusText = (Progress: React.RefObject<HTMLParagraphElement>, status: string) => {
  useEffect(() => {
    if (Progress.current) {
      switch (status) {
        case 'AWAIT':
          Progress.current.innerText = '임대업자의 승인을 기다리는중입니다';
          break;
        case 'ACCEPTED':
          Progress.current.innerText = '임대 업자의 승인하였습니다';
          break;
        case 'DENIED':
          Progress.current.innerText = '임대 업자가 거절했습니다';
          break;
        case 'PROCEEDING':
          Progress.current.innerText = '오피스를 이미 사용중입니다';
          break;
        case 'CANCELED':
          Progress.current.innerText = '예약을 취소하였습니다';
          break;
        case 'EXPIRED':
          Progress.current.innerText = '임대 기간이 만료되었습니다';
          break;
      }
    }
  }, []);
};
