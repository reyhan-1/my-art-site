import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  const currentPath = props.__NEXT_DATA__.page || '';
  const isHomePage = currentPath === '/';

  return (
    <Html
      lang="en"
      style={{ backgroundColor: isHomePage ? 'black' : 'white' }}
    >
      <Head>
        {/* ✅ Add viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@300&family=Quicksand:wght@300&family=Urbanist&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: isHomePage ? 'black' : 'white' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
