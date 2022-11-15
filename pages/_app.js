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
        <title>.Softuz - Development Group</title>
        <meta
          name="description"
          content="dotsoftuz web programming company provides its services in web sites, web applications, mobile applications, design "
          key="desc"
        />
        {/* <meta property="og:title" content="dotsoft blog page" /> */}
        <meta
          property="og:description"
          content="dotSoft web development group"
        />
        <meta
          property="og:image"
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
