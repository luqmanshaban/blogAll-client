import React from 'react'
import {motion} from 'framer-motion'
import styles from '../../styles/Header.module.scss'
import img from '../../assets/images/obj.png'

const imgVariations = {
  hidden: {opacity: 0, y: 100},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
  transition: {type: 'spring', stiffeness: 60, }
}
const h2Variations = {
  hidden: {opacity: 0, y: 100},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.3}},
  transition: {type: 'spring', stiffeness: 60, }
}
const h1Variations = {
  hidden: {opacity: 0, y: 100},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}},
  transition: {type: 'spring', stiffeness: 60, }
}

const Header = () => {
  return (
    <section className={styles.header}>
        <motion.img initial='hidden' animate='visible' variants={imgVariations} src={img} alt="object" />
        <div>
            <motion.h2 initial='hidden' animate='visible' variants={h2Variations}>Unleash Your</motion.h2>
            <motion.h1 initial='hidden' animate='visible' variants={h1Variations}>Bloggin Superpower</motion.h1>
        </div>
    </section>
  )
}

export default Header