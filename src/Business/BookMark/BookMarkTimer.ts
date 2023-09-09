let timerId: any = "";

export const alertRemoveTimer = (setAlertState: React.Dispatch<React.SetStateAction<boolean>>) => {
  setAlertState(true);
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    setAlertState(false);
  }, 1300);
};
