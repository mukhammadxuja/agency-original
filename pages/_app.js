import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { name, description } from "../package.json";

import "../styles/globals.css";
import Layout from "../components/layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Head>
        <title>{description}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
