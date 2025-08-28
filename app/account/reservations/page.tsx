import Link from "next/link";
import { getBookings } from "../../_lib/data-service";
import { auth } from "../../_lib/auth";
import ReservationList from "../../_components/ReservationList";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();

  if (!session) throw new Error("No session found!");

  const bookings = await getBookings(session.user.guestId);

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
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
