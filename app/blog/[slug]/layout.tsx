import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <div>{props.children}</div>;
};
export default Layout;
