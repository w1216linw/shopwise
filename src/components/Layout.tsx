import React from "react";
import NavBar from "./Navbar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
