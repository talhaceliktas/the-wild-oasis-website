"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBooking, getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId: number) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData: FormData) {
  // 1.Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  // 2.Authorization
  const bookingId = formData.get("bookingId");
  if (!bookingId) throw new Error("Reservation ID is missing");
  const reservationId = Number(bookingId);

  const booking = await getBooking(reservationId);
  if (!booking) throw new Error("Booking not found");

  if (session.user.guestId !== booking.guestId)
    throw new Error("You can change only your bookings!");

  // 3.Building update data
  const updatedFields = {
    numGuests: Number(formData.get("numGuests") ?? 0),
    observations: formData.get("observations").slice(0, 1000) ?? "",
  };

  // 4. Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", reservationId)
    .select()
    .single();

  // 5. Error handling
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  // 6. Revalite
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/${bookingId}`);

  // 7. Redirect
  redirect("/account/reservations");
}

export async function signInActionGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signInActionGitHub() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
