export type Country = {
  name: string;
  flag: string;
};

export type bookingData = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  numNights: number;
  cabinPrice: number;
  cabinId: number;
};
