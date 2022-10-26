import { Html, Head, Main, NextScript } from "next/document";
import { description } from "../package.json";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{description}</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
      </body>
    </Html>
  );
}
