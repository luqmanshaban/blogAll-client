import React, { useEffect } from 'react'
import styles from '../styles/Footer.module.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variant = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5,}},
    transition: {type: 'spring', stiffeness: 60, }
}
const variant2 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}},
    transition: {type: 'spring', stiffeness: 60, }
}
const variant3 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.8}},
    transition: {type: 'spring', stiffeness: 60, }
}

const Footer = () => {
  const controls = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true}) 
  const [ref2, inView2] = useInView({triggerOnce: true}) 
  const [ref3, inView3] = useInView({triggerOnce: true}) 

  useEffect(() => {
    if(inView){
        controls.start('visible')
    }
},[controls, inView])

  useEffect(() => {
    if(inView2){
        controls2.start('visible')
    }
},[controls2, inView2])

  useEffect(() => {
    if(inView3){
        controls3.start('visible')
    }
},[controls3, inView3])

  return (
    <div className={styles.footer}>
        <section className={styles.links}>
            <article>
                <h3>Sections</h3>
                <a href="#about">About</a>
                <a href="#features">Features</a>
            </article>
            <article>
                <h3>Contact</h3>
                <a href="mailto:luqmanshaban02@gmail.com" target='_blank' rel="noreferrer">Email</a>
                <a href="tel:+254115166470" target='_blank' rel="noreferrer">Phone</a>
            </article>
            <article>
                <h3>Connect With us</h3>
                <figure>
                <motion.a ref={ref} initial='hidden' animate={controls} variants={variant}
                 href="https://twitter.com/luqmanshaban01" target='_blank' rel="noreferrer">
                    <TwitterIcon />
                </motion.a>
                <motion.a ref={ref2} initial='hidden' animate={controls2} variants={variant2}
                href="https://linkedin.com/in/luqman-shaban" target='_blank' rel="noreferrer">
                    <LinkedIn />
                </motion.a>
                <motion.a ref={ref3} initial='hidden' animate={controls3} variants={variant3}
                href="https://github.com/luqmanshaban/blogAll-client" target='_blank' rel="noreferrer">
                    <GitHub />
                </motion.a>
                </figure>
            </article>
        </section>
        <section className={styles.hr}></section>
        <section className={styles.rights}>
            <p>&copy; BlogAll. All Rights Reserved |</p>
            <a href="https://linkedin.com/in/luqman-shaban" target='_blank' rel="noreferrer">Luqman Shaban</a>
        </section>
    </div>
  )
}

export default Footer;