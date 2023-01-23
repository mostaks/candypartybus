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
          <Image src="/img/m-the-girls.gif" className={styles.imgBorder} alt="Its Britney" width={500} height={400} />
        </div>
        <div className={styles.middleContainer}>
          <div className={`${styles.mainService}`}>
            <h2 className={styles.heading}>What we offer</h2>
            <p>
              At the first Candy Party Bus board meeting, we had our team members who are all seasoned rave heads sit down and pin point exactly what makes or breaks a night out on the town. We understand the frustration of paying top dollar for some almost standard school bus to show up, claiming to be your “go-to bus hire company”, and that’s if they dont make up some BS about how your bus has broken down, leaving you at a bus stop with no way to get to your event. 
            </p>
            <p>
              Here at Candy Party Bus we pride ourselves on being the “casual professionals”, this includes the craziest and most out there party buses with staff who are within the party industry that can help get the party started while maintaining the professional logistics of a gold standard transport company. 
            </p>
            <p>
              Options for hire include:
            </p>
            <ul>
              <li>One way (pickup and drop off) </li>
              <li>Return (pickup/drop off, picked up later and returned home)</li>
              <li>Drive around-this is for groups that have no final destination, the bus is the party. We offer an agreed amount of hours which we drive around, stopping at your request for food/toilet breaks, allowing you to party within the safety of the bus.</li>
            </ul>
            <p>
              Our buses have been kitted from the inside out. Our smaller 24 seat buses accomodate for the smaller, tamer groups. They include an insane sound system (probably too big for a bus that size) and party lights/lasers.
            </p>
            <p>
              For our untamed groups we have our full size (and almost bullet proof) 80 passenger Limo buses which include a completely covered trippy design interior, large dance floor with multiple dance poles, DJ compatibility, an insane light show sound system rear wall which is unlike any buses available for hire aswell as seperate party lights/lasers. We can also provide an eski with ice to keep your drinks cool upon request.
            </p>
          </div>
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