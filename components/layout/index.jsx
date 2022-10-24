import * as React from 'react';

import { Navbar, Footer } from '../';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
