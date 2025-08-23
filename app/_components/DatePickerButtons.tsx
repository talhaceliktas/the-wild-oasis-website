import { type ButtonHTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MyPreviousMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="text-accent-100 hover:text-accent-600 cursor-pointer rounded-full p-2 duration-300"
    >
      <ChevronLeft size={18} />
    </button>
  );
}

export function MyNextMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="text-accent-100 hover:text-accent-600 cursor-pointer rounded-full p-2 duration-300"
    >
      <ChevronRight size={18} />
    </button>
  );
}
