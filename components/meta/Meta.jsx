import { memo } from 'react';
import Head from 'next/head'

const propTypes = {};

const Meta = () => {
  return (
    <Head>
      <title>Candy Party Bus Hire</title>
      <meta name="description" content="Candy Party Bus is the premier provider of transportation services throughout Sydney from Newcastle to Wollongong. Our company specializes in providing safe, reliable, and affordable transportation for all types of events, from weddings and corporate events to birthday parties and nights out on the town."
      />
      <meta name="keywords" content="Party bus Limousine rental Luxury transportation Group transportation Bachelor/bachelorette party Wedding transportation Prom transportation Corporate event transportation Nightlife transportation City tours Entertainment transportation Birthday party transportation Event rental Chauffeur service Shuttle service" />
      <link rel="icon" href="img/favicon/favicon.ico" />
      <link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

Meta.propTypes = propTypes;

export default memo(Meta);