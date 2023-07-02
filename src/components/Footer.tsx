import React from 'react'
import styles from '../styles/Footer.module.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const Footer = () => {
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
                <a href="https://twitter.com/luqmanshaban01" target='_blank' rel="noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://linkedin.com/in/luqman-shaban" target='_blank' rel="noreferrer">
                    <LinkedIn />
                </a>
                <a href="https://github.com/luqmanshaban/blogAll-client" target='_blank' rel="noreferrer">
                    <GitHub />
                </a>
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