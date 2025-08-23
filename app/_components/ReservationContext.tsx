"use client";

import { createContext, use, useState } from "react";
import { DateRange } from "react-day-picker";

const ReservationContext = createContext(null);

const initialState = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = use(ReservationContext);
  if (!context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
