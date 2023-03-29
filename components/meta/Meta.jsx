import { memo } from 'react';
import Head from 'next/head'

const propTypes = {};

const Meta = () => {
  return (
    <Head>
      <title>Candy Party Bus Hire</title>
      <meta name="description" content="Welcome to Candy Party Bus, the premier provider of transportation services throughout Sydney from Newcastle to Wollongong. Our company specializes in providing safe, reliable, and affordable transportation for all types of events, from weddings and corporate events to birthday parties and nights out on the town.

      Our fleet of party buses are fully equipped with the latest amenities and features to ensure that you and your guests have the time of your lives. Each bus comes with comfortable seating, state-of-the-art sound systems, trippy lighting, and even a dance floor. Whether you're looking to party all night long or simply relax and enjoy the ride, our buses have everything you need to make your event unforgettable.

      At our party bus company, we pride ourselves on our commitment to customer satisfaction. Our team of professional drivers are experienced, courteous, and always on time. We understand the importance of punctuality and reliability, and we go above and beyond to ensure that your transportation needs are met in a timely and efficient manner.

      We offer a range of packages to suit any budget and event size, from intimate gatherings to large-scale celebrations. Whether you're planning a bachelor party, a school formal, or a corporate event, our party buses are the perfect choice for a memorable and hassle-free experience.

      So why wait? Contact us today to book your next event with the best party bus company in Sydney. Let us take care of the transportation, so you can focus on having a good time!"
      />
      <meta name="keywords" content="Party bus Limousine rental Luxury transportation Group transportation Bachelor/bachelorette party Wedding transportation Prom transportation Corporate event transportation Nightlife transportation City tours Entertainment transportation Birthday party transportation Event rental Chauffeur service Shuttle service" />
      <link rel="icon" href="img/favicon/favicon.ico" />
    </Head>
  );
};

Meta.propTypes = propTypes;

export default memo(Meta);