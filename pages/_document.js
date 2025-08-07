import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  // Get the current route path from Next.js data
  const currentPath = props.__NEXT_DATA__.page || '';

  // Check if this is the homepage (adjust if you want other pages)
  const isHomePage = currentPath === '/';

  return (
    <Html
      lang="en"
      style={{ backgroundColor: isHomePage ? 'black' : 'white' }}
    >
      <Head>
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
