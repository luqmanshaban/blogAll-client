import React, { useState } from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active)
  }
  const unToggleActive = () => {
    setActive(false)
  }


  return (
    <nav className={styles.navbar}>

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
            <li onClick={unToggleActive}>Home</li>
            <li onClick={unToggleActive}>About</li>
            <li onClick={unToggleActive}>Contact</li>
        </ul>

        <ul className={`${styles.buttons} ${active ? styles.active : ''}`} onClick={unToggleActive}>
            <button id={styles.login}>Login</button>
            <button id={styles.signup}>Sign Up</button>
        </ul>

        <ul className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleActive}>
          <li className={styles.bar}></li>
          <li className={styles.bar}></li>
          <li className={styles.bar}></li>
        </ul>
    </nav>
  )
}

export default Navbar;