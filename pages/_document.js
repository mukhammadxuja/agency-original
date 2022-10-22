import { Html, Head, Main, NextScript } from "next/document";
import { description } from "../package.json";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{description}</title>
        <link rel="shortcut icon" href="/svg/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
