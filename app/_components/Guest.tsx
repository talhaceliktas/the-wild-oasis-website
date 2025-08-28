"use client";

import { useAuth } from "@/app/_components/AuthContext";
import Image from "next/image";
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
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={session.user.image}
              alt={session?.user?.name ?? ""}
              className="object-cover"
              referrerPolicy="no-referrer"
              fill
              quality={100}
            />
          </div>
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
