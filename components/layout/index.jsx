import * as React from "react";
import Navbar from "../navbar/index";
import { useEffect, useState } from "react"

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setLoading(false)
    }, 1000)
  }, [])
  console.log(loading);
  return (
    <>
      {loading ? <p>loading...</p> :
        <>
          <Navbar />
          <main>{children}</main>
        </>
      }

    </>
  );
}
