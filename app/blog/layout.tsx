"use client";
import React from "react";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      {props.children}
      <Sidebar />
    </div>
  );
};
export default Layout;
