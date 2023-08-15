export const startDayPicker = (
  setCalendarState: React.Dispatch<React.SetStateAction<boolean>>,
  setCalendarEnd: React.Dispatch<React.SetStateAction<boolean>>,
  startDayDom: React.RefObject<HTMLInputElement>,
  endDayDom: React.RefObject<HTMLInputElement>,
) => {
  setCalendarState(true);
  setCalendarEnd(false);
  if (startDayDom.current && endDayDom.current) {
    startDayDom.current.classList.add('active');
    endDayDom.current.classList.remove('active');
  }
};

export const endDayPicker = (
  setCalendarEnd: React.Dispatch<React.SetStateAction<boolean>>,
  setCalendarState: React.Dispatch<React.SetStateAction<boolean>>,
  startDayDom: React.RefObject<HTMLInputElement>,
  endDayDom: React.RefObject<HTMLInputElement>,
) => {
  setCalendarState(false);
  setCalendarEnd(true);

  if (startDayDom.current && endDayDom.current) {
    startDayDom.current.classList.add('active');
    endDayDom.current.classList.remove('active');
  }
};
