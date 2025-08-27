"use client";

const NavButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="fixed top-8 right-5 z-999 flex h-8 w-10 flex-col items-center justify-center gap-1.5 p-1 md:hidden"
    >
      <span
        className={`bg-accent-600 block h-0.5 w-full rounded transition-all duration-300 ease-in-out ${
          open ? "bg-primary-200 translate-y-2 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`bg-accent-600 block h-0.5 w-full rounded transition-all duration-300 ease-in-out ${
          open ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`bg-accent-600 block h-0.5 w-full rounded transition-all duration-300 ease-in-out ${
          open ? "bg-primary-200 -translate-y-2 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};
export default NavButton;
