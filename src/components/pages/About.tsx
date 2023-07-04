import React from 'react'
import styles from '../../styles/About.module.scss'
import img from '../../assets/images/schedule.jpg' 
import twit from '../../assets/images/twt.webp' 

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <article className={styles.art1}>
        <figure>
          <h1>Revolutionize Content Creation with BlogAll Dashboard</h1>
          <p>Streamline your content creation process and platform selection with BlogAll‘s user-friendly interface. Turn your messy ideas into polished blog posts in no time!</p>
        </figure>
        <img src={twit} alt="twitter" height={300}/>
      </article>
      <article className={styles.art2}>
        <img src={img} alt="schedule" height={300}/>
        <figure>
          <h1>Smart Scheduler & Cross-Platform Promotion</h1>
          <p> Schedule, publish, and promote your content across LinkedIn, Hashnode, and Dev.to with a few clicks. BlogAll’s smart scheduler ensures maximum visibility and engagement.</p>
        </figure>
      </article>
    </section>
  )
}

export default About