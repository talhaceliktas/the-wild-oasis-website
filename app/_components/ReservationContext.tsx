"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface DataRange {
  from?: Date;
  to?: Date;
}

export interface ReservationContextType {
  range: DataRange | undefined;
  setRange: Dispatch<SetStateAction<DataRange | undefined>>;
  resetRange: () => void;
}

export interface ReservationProviderProps {
  children: ReactNode;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const initialState: DataRange = {
  from: undefined,
  to: undefined,
};

export function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<DataRange | undefined>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation(): ReservationContextType {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("Context was used outside provider");
  return context;
}
