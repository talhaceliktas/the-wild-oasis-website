import ReservationCard from "@/app/_components/ReservationCard";
import Link from "next/link";
import { getBookings } from "../../_lib/data-service";
import { auth } from "../../_lib/auth";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const sesion = await auth();
  const bookings = await getBookings(sesion.user.guestId);

  console.log(bookings);
  return (
    <div>
      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="text-accent-500 underline" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
