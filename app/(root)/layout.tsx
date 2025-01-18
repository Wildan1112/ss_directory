import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex">{children}</div>;
};

export default Layout;
