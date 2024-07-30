import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Archiive is a creative photography studio founded by three architects. Together we believe in crafting unique and engaging visual content and to tell your stories through our lenses." />
        <meta name="keywords" content="photography, archive, archiive,architecture,architectural photgraphy" />
        <meta property="og:title" content="archiive" />
        <meta property="og:description" content="Archiive is a creative photography studio founded by three architects. Together we believe in crafting unique and engaging visual content and to tell your stories through our lenses." />
        <meta property="og:image" content="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
