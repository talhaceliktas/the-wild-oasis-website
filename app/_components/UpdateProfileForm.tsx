import React, { ReactNode } from "react";
import { updateGuest } from "../_lib/actions";
import { User } from "../../types";
import SubmitButton from "./SubmitButton";
import Image from "next/image";

const UpdateProfileForm = ({
  children,
  guest,
}: {
  children: ReactNode;
  guest: User;
}) => {
  const { fullName, email, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={fullName}
          disabled
          name="fullName"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          defaultValue={email}
          disabled
          name="email"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 text-base shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 md:text-lg"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <div className="relative h-5 w-10 overflow-hidden">
            <Image
              src={countryFlag}
              alt="Country flag"
              className="object-cover"
              fill
            />
          </div>
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
