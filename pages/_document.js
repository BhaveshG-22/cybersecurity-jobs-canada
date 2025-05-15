

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Cyber Jobs" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon0.svg" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/web-app-manifest-512x512.png" />

        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
