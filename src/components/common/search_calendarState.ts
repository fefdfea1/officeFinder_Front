export const startDayPicker = (
  setCalendarState: React.Dispatch<React.SetStateAction<boolean>>,
  setCalendarEnd: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  setCalendarState(true);
  setCalendarEnd(false);
};

export const endDayPicker = (
  setCalendarEnd: React.Dispatch<React.SetStateAction<boolean>>,
  setCalendarState: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  setCalendarState(false);
  setCalendarEnd(true);
};
