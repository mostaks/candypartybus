import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/Fleet.module.css'
import Breadcrumb from "../components/breadcrumb";

const services = [
  {
    title: "80 passenger full size limo party bus (coming soon)",
    description: "Includes: Dance floor, Dance poles, Trippy interior, laser lights, crazy good sound system, Dj compatible, Smoke machine",
    image: {
      src: "/img/m-bigBus.gif",
      alt: "80 seat bus COMING SOON"
    }
  },
  {
    title: "24 seater party bus",
    description: "Laser lights, Big sound system",
    image: {
      src: "/img/m-bus.gif",
      alt: "80 seat bus"
    }
  },
]

export default function Fleet() {
  return (
    <div className={styles.background}>
      <Nav />
      <Breadcrumb page="Fleet" link="./fleet" />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/img/m-gazoo.gif" alt="Its Britney" width={100} height={100} />
        </div>
        <div className={styles.middleContainer}>
          {services.map(({ title, description, image }) => (
            <div key={title} className={styles.service}>
              {image.src && (
                <Image style={{margin: '0 auto'}} src={image.src} width="200" height="150" alt={image.alt} />
              )}
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}