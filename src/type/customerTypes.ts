type returnReservationType = {
  customerEmail: string;
  endDate: string;
  officeName: string;
  price: number;
  startDate: string;
};

export type reservationType = (
  officeId: number,
  startDate: string,
  usePeopleCount: number,
  month: number,
  setReservationComplete: React.Dispatch<React.SetStateAction<boolean>>,
) => Promise<returnReservationType> | undefined;
