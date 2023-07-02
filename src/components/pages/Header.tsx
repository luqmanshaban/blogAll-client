import React from 'react'
import styles from '../../styles/Header.module.scss'
import img from '../../assets/images/obj.png'

const Header = () => {
  return (
    <section className={styles.header}>
        <img src={img} alt="object" />
        <div>
            <h2>Unleash Your</h2>
            <h1>Bloggin Superpower</h1>
        </div>
    </section>
  )
}

export default Header