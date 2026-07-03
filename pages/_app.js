import { ThemeProvider } from 'next-themes';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../components/layout/index';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('home');
  const router = useRouter();
  const { locale, asPath } = router;

  const cleanPath = asPath.split(/[?#]/)[0];
  const canonicalLocale = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `https://www.dotsoft.uz${canonicalLocale}${cleanPath === '/' ? '' : cleanPath}`;
  const rawPath = cleanPath === '/' ? '' : cleanPath;

  const title = t('home:seo_title');
  const description = t('home:seo_description');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} key="title" />
        <meta name="description" content={description} key="description" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} key="og:url" />
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta
          property="og:image"
          content="https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotsoft-dark.de3a0cde.png&w=1920&q=75"
          key="og:image"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} key="twitter:url" />
        <meta property="twitter:title" content={title} key="twitter:title" />
        <meta property="twitter:description" content={description} key="twitter:description" />
        <meta
          property="twitter:image"
          content="https://www.dotsoft.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdotsoft-dark.de3a0cde.png&w=1920&q=75"
          key="twitter:image"
        />

        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <link rel="alternate" hrefLang="en" href={`https://www.dotsoft.uz${rawPath}`} key="alternate-en" />
        <link rel="alternate" hrefLang="uz" href={`https://www.dotsoft.uz/uz${rawPath}`} key="alternate-uz" />
        <link rel="alternate" hrefLang="ru" href={`https://www.dotsoft.uz/ru${rawPath}`} key="alternate-ru" />
        <link rel="alternate" hrefLang="x-default" href={`https://www.dotsoft.uz${rawPath}`} key="alternate-default" />
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
