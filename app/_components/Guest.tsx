"use client";

import { useAuth } from "@/app/_components/AuthContext";
import Link from "next/link";

export default function User() {
  const session = useAuth();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 flex flex-col-reverse items-center gap-2 transition-colors md:flex-row md:gap-4"
        >
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-8 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}
