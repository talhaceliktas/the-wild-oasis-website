import { Dispatch, ReactNode, SetStateAction } from "react";
import "next-auth";
import { DefaultSession } from "next-auth";

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
  cabinId: number;
  cabins: { name: string; image: string };
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  countryFlag: string;
  created_at: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      guestId: number;
    } & DefaultSession["user"];
  }

  interface User {
    guestId?: number;
    email?: string;
    image?: string;
    name?: string;
  }
}

export type AuthUser = DefaultSession["user"] & {
  guestId: number;
};

export type AuthSession = DefaultSession & {
  user: AuthUser;
};
