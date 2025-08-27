"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import MobileNavigation from "./MobileNavigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavButton open={open} setOpen={setOpen} />
      <MobileNavigation open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNav;
