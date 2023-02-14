import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Uni Finder</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <script
          src='https://code.jquery.com/jquery-3.6.3.min.js'
          integrity='sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU='
          crossOrigin='anonymous'
        ></script>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
