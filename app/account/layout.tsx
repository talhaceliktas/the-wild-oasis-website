import React, { ReactNode } from "react";
import SideNavigation from "../_components/SideNavigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid h-full gap-6 md:gap-12 lg:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default Layout;
