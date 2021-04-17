import React from "react";
import { Layout as ALayout } from "antd";
import SNavbar from "./Navbar";
import SFooter from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <ALayout>
        <SNavbar />
        <div>{children}</div>
        <SFooter />
      </ALayout>
    </>
  );
}
