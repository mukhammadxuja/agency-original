import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'footer'])),
    },
  };
}

const FourOvFour = () => {
  // Language support
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div>
        <h1 className="text-center">404</h1>
        <p className="text-center"> {t('home:page_not_found_404')}</p>
      </div>
    </div>
  );
};

export default FourOvFour;
