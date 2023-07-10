import React from 'react'
import Header from './components/Header'
import styles from '../styles/Home.module.scss'

type Props = {
    toggle: any;
}


const Home: React.FC<Props> = ({toggle}) => {
  const screen = window.innerWidth <= 600;
  return (
    <div className={styles.home}>
        <header className={`${styles.header}`} onClick={toggle}>
            <div className={`${styles.hamburger}`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            {!screen && <Header/>}
        </header>
    </div>
  )
}

export default Home