import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

export interface CabinProps {
  cabin: Cabin;
}

export type CabinsArray = Cabin[];

interface Settings {
  breakfastPrice: number;
  created_at: string;
  id: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  minBookingLength: number;
}

export interface DateSelectorProps {
  settings: Settings;
  cabin: Cabin;
  bookedDates: Date[];
}

export interface DataRange {
  from?: Date;
  to?: Date;
}

export interface ReservationContextType {
  range: DataRange | undefined;
  setRange: Dispatch<SetStateAction<DataRange | undefined>>;
  resetRange: () => void;
}

export interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: ReactNode;
}

export interface SelectCountryProps {
  defaultCountry: string;
  name: string;
  id: number;
  className: string;
}

type CabinInfo = {
  name: string;
  image: string;
};

export interface BookingType {
  id: number;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: CabinInfo;
}
