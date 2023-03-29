import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/Service.module.css'
import Breadcrumb from "../components/breadcrumb";

export default function HensBucks() {
  return (
    <div className={styles.background}>
      <Nav />
      <Breadcrumb page="Hens and bucks nights" link="./hensBucksNights" />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/img/m-the-girls.gif" className={styles.imgBorder} alt="Its Britney" width={500} height={400} />
        </div>
        <div className={styles.middleContainer}>
          <div className={`${styles.mainService}`}>
            <h2 className={styles.heading}>Hens and bucks nights</h2>
            <p>Welcome to Candy Party Bus, where we offer the most exciting and unforgettable party experiences on wheels! Whether you're looking to celebrate a special occasion or just want to have a fun night out with your friends, our party buses are the perfect way to make your night one to remember.</p>
            
            <p>At Candy Party Bus, we specialize in providing hens and bucks nights parties that are second to none. We understand that these events are a once-in-a-lifetime celebration, and we take pride in ensuring that your party is everything you've ever dreamed of and more. Our hens and bucks nights parties are designed to cater to your every need, from the music selection to the destination, and everything in between.</p>

            <p>Our party buses are fully equipped with state-of-the-art sound systems, laser lighting, dance floors, and plush seating to ensure that you and your guests are comfortable and entertained throughout the duration of your trip. Our professional and experienced crew will take you on a tour of the city's hottest nightlife spots, ensuring that you don't miss out on any of the action.</p>

            <p>Our hens and bucks nights parties include a range of exciting activities. We offer a range of packages to suit any budget and event size, from intimate gatherings to large-scale celebrations. Whether you're planning a bachelor party, a school formal, or a corporate event, our party buses are the perfect choice for a memorable and hassle-free experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}