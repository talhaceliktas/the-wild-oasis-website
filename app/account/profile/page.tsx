import { User } from "../../../types";
import SelectCountry from "../../_components/SelectCountry";
import UpdateProfileForm from "../../_components/UpdateProfileForm";
import { auth } from "../../_lib/auth";
import { getGuest } from "../../_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  const session = await auth();

  if (!session) {
    throw new Error("User is not logged in");
  }

  const guest: User = await getGuest(session.user.email!);

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update your guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id={4}
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
