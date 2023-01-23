import Image from 'next/image';
import Nav from '../components/nav';
import styles from '../styles/Fleet.module.css'
import Breadcrumb from "../components/breadcrumb";

const services = [
  {
    title: "80 passenger full size limo party bus (coming soon)",
    description: "For our untamed groups we have our full size (and almost bullet proof) 80 passenger Limo bus which includes a completely covered trippy interior design, large dance floor with multiple dance poles and DJ compatibility. <br /><br /> On the rear wall we have built an insane light show sound system which is unlike any buses available for hire as well as bespoke party lights/lasers to keep the party going. <br /><br />We can also provide an eski with ice to keep your drinks cool upon request.",
    image: {
      src: "/img/m-bigBus.gif",
      alt: "80 seat bus COMING SOON"
    }
  },
  {
    title: "24 seater mini party bus",
    description: "Laser lights, Big sound system, trippy interior. This bus has been kitted from the inside out. This 24 seater bus accomodates for the smaller, tamer groups. It includes an insane sound system (probably too big for a bus that size) and party lights/lasers.",
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
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}