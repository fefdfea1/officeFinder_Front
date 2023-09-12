let timerId: any = "";
//다른 컴포넌트 상태도 변경 할 수 있도록 타입을변경
export const alertRemoveTimer = (setAlertState: React.Dispatch<React.SetStateAction<boolean>>, timing: number) => {
  setAlertState(true);
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    setAlertState(false);
  }, timing);
};
