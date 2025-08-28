import { PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  format,
  formatDistance,
  isBefore,
  isPast,
  isToday,
  parseISO,
  startOfDay,
} from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import { BookingType } from "../../types";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({
  booking,
  onDelete,
}: {
  booking: BookingType;
  onDelete: (bookingId: number) => Promise<void>;
}) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div
      className={`border-primary-800 grid grid-cols-2 border md:flex ${
        isBefore(startDate, startOfDay(new Date()))
          ? "bg-orange-300/20"
          : "bg-green-200/20"
      }`}
    >
      <div className="w relative aspect-square h-32 w-full md:w-max">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-primary-800 border-r object-cover"
        />
      </div>

      <div className="col-span-2 row-start-2 flex-grow flex-col px-6 py-3 md:flex">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold text-yellow-200 uppercase">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold text-green-200 uppercase">
              upcoming
            </span>
          )}
        </div>

        <p className="text-primary-300 text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-auto flex items-baseline gap-5">
          <p className="text-accent-400 text-xl font-semibold">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-primary-300 text-lg">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-primary-400 ml-auto text-sm">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy")}
            <span className="hidden md:inline">
              , {format(new Date(created_at), "p")}
            </span>
          </p>
        </div>
      </div>

      <div className="border-primary-800 flex flex-col border-l md:w-[100px]">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group text-primary-300 border-primary-800 hover:bg-accent-600 hover:text-primary-900 flex flex-grow items-center gap-2 border-b px-3 text-xs font-bold uppercase transition-colors"
            >
              <PencilSquareIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
