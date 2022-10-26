import { useState, useEffect } from 'react';
import Script from 'next/script';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Header, About, Portfolio, Contact } from '../components';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="container mx-auto">
      <Script src="https://third-party-script.js"></Script>
      <div className="noise"></div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
