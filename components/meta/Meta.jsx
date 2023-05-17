import { memo } from 'react';
import Head from 'next/head'

const propTypes = {};

const Meta = () => {
  return (
    <Head>
      <title>CANDY PARTY BUS HIRE ⭐️⭐️⭐️⭐️⭐️</title>
      <meta name="description" content="Candy Party Bus is the premier transportation provider in Sydney. We specialise in providing fun and affordable transportation for all event types, from weddings to birthday parties to nights out on the town."
      />
      <meta name="keywords" content="Party bus Limousine rental Luxury transportation Group transportation Bachelor/bachelorette party Wedding transportation Prom transportation Corporate event transportation Nightlife transportation City tours Entertainment transportation Birthday party transportation Event rental Chauffeur service Shuttle service" />
      <link rel="icon" href="img/favicon/favicon.ico" />
      <link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11181810861"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11181810861', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

Meta.propTypes = propTypes;

export default memo(Meta);