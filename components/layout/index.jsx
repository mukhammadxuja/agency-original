import * as React from 'react';

import { Navbar, Footer, Cookie } from '../';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cookie />
      <main>{children}</main>
      <Footer />
    </>
  );
}
