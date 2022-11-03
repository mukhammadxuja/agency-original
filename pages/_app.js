import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

import '../styles/globals.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from '../components/layout/index';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
