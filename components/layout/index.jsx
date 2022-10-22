import * as React from "react";
import Navbar from "../navbar/index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
