import React from 'react'
import styles from '../styles/Aside.module.scss'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'

type Props = {
    unToggle: any;
    active: any;
}

const Aside: React.FC<Props> = ({unToggle, active}) => {

  return (
    <nav className={`${active ? styles.active : ''}`}>
    <section className={styles.aside}>
        <header>
          <h1>
              <img src={logo} alt="Logo"/>
              <Link to='/dashboard'>BlogAll</Link>
          </h1>
          <div className={`${styles.hamburger} `} onClick={unToggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </header>
        <ul className={styles.navMenu}>
           
            <li>Articles
               <p className={styles.hr}></p>
            </li>
            <li>
                Drafts
                <p className={styles.hr}></p>
            </li>
            <li>Analytics
                <p className={styles.hr}></p>
            </li>
            <li>
                Settings
                <p className={styles.hr}></p>
            </li>
            <li>Support
            <p className={styles.hr}></p>
            </li>

        </ul>
    </section>
    <section>Profile</section>
    </nav>
  )
}

export default Aside