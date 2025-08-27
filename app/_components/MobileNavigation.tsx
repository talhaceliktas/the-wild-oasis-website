"use client";

import Link from "next/link";
import User from "./Guest";

export default function MobileNavigation({ open, setOpen }) {
  const onClick = () => setOpen(false);
  return (
    <nav
      className={`fixed top-0 left-0 z-10 h-screen w-screen text-2xl transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
    >
      <ul
        className={`bg-primary-800 mt-24 flex w-screen transform flex-col items-center gap-y-2 p-4 transition-transform duration-500 ${open ? "translate-y-0" : "-translate-y-[200px]"}`}
      >
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
            onClick={onClick}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
            onClick={onClick}
          >
            About
          </Link>
        </li>
        <div onClick={onClick}>
          <User />
        </div>
      </ul>
    </nav>
  );
}
