import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/Service.module.css'
import Breadcrumb from "../components/breadcrumb";

const services = [
  {
    title: "BIRTHDAY PARTIES",
    description: "Got a special birthday event planned and need to get all your friends to it? We’ll help you celebrate one more rotation around the sun with our party buses for hire."
  },
  {
    title: "MUSIC FESTIVALS",
    description: "Organise reliable music festival transport today with our fleet of party buses available for hire."
  },
  {
    title: "CHRISTMAS PARTIES",
    description: "Come together for Christmas cheer with our bus charters services. Choose from our range of charter and transfer buses to get your party on the road."
  },
  {
    title: "FORMALS",
    description: "GoFor reliable chartering services for school formals, choose Candy party buses range of buses today for a cost-effective, efficient service."
  },
  {
    title: " SCHOOL EXCURSIONS",
    description: "We provide chartering services for school excursions throughout Sydney, Penrith and the Central Coast. Candy party buses will get your class to and from school without issue."
  },
  {
    title: "CORPORATE EVENTS",
    description: "Whether you are planning a corporate seminar, convention, conference, or company retreat workshop, Candy party buses has the right charter bus for your needs."
  },
  {
    title: "SPORTING EVENTS",
    description: "Get your team to the game quickly and safely with our range of party buses available for hire."
  },
  {
    title: "AIRPORT TRANSFERS",
    description: "We provide bus transfer to connect to and from airports. Candy party buses will ensure you never miss a flight."
  },
]

export default function WhatWeOffer() {
  return (
    <div className={styles.background}>
      <Nav />
      <Breadcrumb page="What we offer" link="./whatWeOffer" />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/img/m-britney.gif" alt="Its Britney" width={100} height={100} />
        </div>
        <div className={styles.middleContainer}>
          {services.map(({ title, description }) => (
            <div key={title} className={styles.service}>
              <h3 className={styles.title}>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}