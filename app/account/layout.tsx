import React from "react";
import SideNavigation from "../_components/SideNavigation";

const Layout = ({ children }) => {
  return (
    <div className="grid h-full gap-6 md:grid-cols-[16rem_1fr] md:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default Layout;
