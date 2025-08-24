"use client";

import { useReservation } from "./ReservationContext";
import "react-day-picker/style.css";
import {
  DateRange,
  DayButton,
  DayPicker,
  MonthsDropdown,
  Nav,
  YearsDropdown,
} from "react-day-picker";
import { MyNextMonthButton, MyPreviousMonthButton } from "./DatePickerButtons";
import { DateSelectorProps } from "@/types";
import { differenceInDays } from "date-fns";

function isAlreadyBooked(range: DateRange, datesArr: Date[]) {
  // return (
  //   range.from &&
  //   range.to &&
  //   datesArr.some((date) =>
  //     isWithinInterval(date, { start: range.from, end: range.to }),
  //   )
  // );
}

function DateSelector({ settings, cabin, bookedDates }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regularPrice = cabin.regularPrice;
  const discount = cabin.discount;
  const numNights = differenceInDays(range?.to, range?.from);
  const cabinPrice = (regularPrice - discount) * numNights;

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        onSelect={setRange}
        selected={range as DateRange | undefined}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        disabled={{ before: new Date() }}
        captionLayout="dropdown"
        numberOfMonths={2}
        classNames={{
          selected: `bg-accent-500 text-white`,
          range_start: `bg-accent-600 text-white`,
          range_end: `bg-accent-600 text-white`,
          range_middle: `bg-accent-500 text-white`,
          disabled: "text-gray-500",
          today: "text-accent-500",
        }}
        style={
          {
            "--rdp-accent-color": "var(--color-accent-600)",
            "--rdp-accent-background-color": "#eff6ff",
            "--rdp-day-width": "30px",
            "--rdp-day_button-width": "30px",
            "--rdp-day-height": "30px",
            "--rdp-day_button-height": "30px",
          } as React.CSSProperties
        }
        components={{
          PreviousMonthButton: MyPreviousMonthButton,
          NextMonthButton: MyNextMonthButton,
          MonthsDropdown: (props) => {
            return (
              <MonthsDropdown
                {...props}
                className="text-accent-300 bg-primary-900 cursor-pointer rounded border border-gray-300 p-1 text-center"
              />
            );
          },
          YearsDropdown: (props) => {
            return (
              <YearsDropdown
                {...props}
                className="text-accent-300 bg-primary-900 cursor-pointer rounded border border-gray-300 p-1 text-center"
              />
            );
          },
          Nav: (props) => {
            return (
              <Nav
                {...props}
                className="absolute top-[-2rem] left-[0rem] z-10 flex items-center gap-2"
              />
            );
          },
          DayButton: (props) => {
            return <DayButton {...props} className="hover:text-accent-400" />;
          },
        }}
      />

      <div className="bg-accent-500 text-primary-800 flex h-[72px] items-center justify-between px-8">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="text-primary-700 font-semibold line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border-primary-800 border px-4 py-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
