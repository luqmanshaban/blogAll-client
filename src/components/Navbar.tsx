import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Navbar.module.scss'

type Props = {
  contact: any,
  signup: any,
  login: any,
}

const variations = {
  hidden: {opacity: 0, y: -40},
  visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
  transition: {type: 'spring', stiffeness: 60, }
}


const Navbar: React.FC<Props> = ({contact, signup, login}) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active)
  }
  const unToggleActive = () => {
    setActive(false)
  }


  return (
    <motion.nav initial='hidden' animate='visible' variants={variations} className={styles.navbar}>

        <h1>
            <span id={styles.blogText}>B</span>
            <span id={styles.blogText}>l</span>
            <span id={styles.blogText}>o</span>
            <span id={styles.blogText}>g</span>
            <span id={styles.allText}>A</span>
            <span id={styles.allText}>l</span>
            <span id={styles.allText}>l</span>
        </h1>

        <ul className={`${styles.navMenu} ${active ? styles.active : ''}`}>
            <li onClick={unToggleActive}>
              <a href="#features">Features</a>
            </li>
            <li onClick={unToggleActive}>
              <a href="#about">About</a>
            </li>
            <li onClick={unToggleActive}>
              <a href="#contact" onClick={contact}>Contact</a>
            </li>
            <li onClick={unToggleActive}>
            <button onClick={login} id={styles.login}>Login</button>
            </li>
            <li onClick={unToggleActive}>
            <button onClick={signup} id={styles.signup}>Sign Up</button>
            </li>
        </ul>

        <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
          <li className={styles.bar}></li>
          <li className={styles.bar}></li>
          <li className={styles.bar}></li>
        </ul>
    </motion.nav>
  )
}

export default Navbar;