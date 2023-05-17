import Desktop from '../components/desktop'
import Mobile from '../components/mobile'
import styles from '../styles/Home.module.css'
import { useWindowSize } from '../hooks/useWindowSize'

export default function Home() {
  const { deviceSize } = useWindowSize();
  return (
    <div className={styles.container}>
      {deviceSize === 'desktop' ? <Desktop /> : <Mobile />}
    </div>
  )
}
