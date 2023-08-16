import { format } from 'date-fns';

export const setCalendarDay = (selectedDay: Date) => {
  return format(selectedDay, 'yyyy-MM-dd');
};
