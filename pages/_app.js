import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../components/layout/index';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dotsoftuz - Development Group</title>
        <meta name="title" content="DotSoftUz - Development Group" />
        <meta
          name="description"
          content="Dotsoftuz web programming company provides its services in web sites, web applications, mobile applications and designs"
        />
        <meta name="yandex-verification" content="ee4bed122ac42069" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dotsoft.uz/" />
        <meta property="og:title" content="DotSoftUz - Development Group" />
        <meta
          property="og:description"
          content="dotsoftuz web programming company provides its services in web sites, web applications, mobile applications, design "
        />
        <meta
          property="og:image"
          content="https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotsoft-dark.de3a0cde.png&w=1920&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dotsoft.uz/" />
        <meta
          property="twitter:title"
          content="DotSoftUz - Development Group"
        />
        <meta
          property="twitter:description"
          content="dotsoftuz web programming company provides its services in web sites, web applications, mobile applications, design "
        />
        <meta
          property="twitter:image"
          content="https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotsoft-dark.de3a0cde.png&w=1920&q=75"
        />
      </Head>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
