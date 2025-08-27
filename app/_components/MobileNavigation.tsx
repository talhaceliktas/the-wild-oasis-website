"use client";

import Link from "next/link";
import User from "./Guest";
import Logo from "./Logo";

export default function MobileNavigation({ open, setOpen }) {
  const onClick = () => setOpen(false);

  if (!open)
    return (
      <nav
        className={`fixed top-0 left-0 z-500 block text-2xl transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      ></nav>
    );

  return (
    <nav
      className={`fixed top-0 left-0 z-500 block text-2xl transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
    >
      <ul
        className={`bg-primary-800 flex w-screen transform flex-col items-center justify-center gap-y-2 p-4 duration-500`}
      >
        <li className="mb-4">
          <Logo></Logo>
        </li>

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
