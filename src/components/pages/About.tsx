import React, { useEffect } from 'react'
import styles from '../../styles/About.module.scss'
import img from '../../assets/images/schedule.jpg' 
import twit from '../../assets/images/twt.webp' 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const content = {
  hidden: {opacity: 0, x: 40},
  visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
  transition: {type: 'spring', stiffeness: 60, }
}
const image = {
  hidden: {opacity: 0, x: -40},
  visible: {opacity: 1, x: 0, transition: {duration: 0.8}},
  transition: {type: 'spring', stiffeness: 60, }
}


const About = () => {
  const contentControls = useAnimation()
  const [contentRef, contentInView] = useInView({triggerOnce: true}) 
  const imgControls = useAnimation()
  const [imgRef, imgInView] = useInView({triggerOnce: true}) 

  const contentControls1 = useAnimation()
  const [contentRef1, contentInView1] = useInView({triggerOnce: true}) 
  const imgControls1 = useAnimation()
  const [imgRef1, imgInView1] = useInView({triggerOnce: true}) 

useEffect(() => {
    if(contentInView){
        contentControls.start('visible')
    }
},[contentControls, contentInView])

useEffect(() => {
    if(imgInView){
        imgControls.start('visible')
    }
},[imgControls, imgInView])

useEffect(() => {
  if(contentInView1){
      contentControls1.start('visible')
  }
},[contentControls1, contentInView1])

useEffect(() => {
  if(imgInView1){
      imgControls1.start('visible')
  }
},[imgControls1, imgInView1])

  return (
    <section className={styles.about} id='about'>

      <motion.article className={styles.art1}>
        <motion.figure ref={contentRef} initial='hidden' animate={contentControls} variants={content}>
          <h1>Revolutionize Content Creation with BlogAll Dashboard</h1>
          <p>Streamline your content creation process and platform selection with BlogAll‘s user-friendly interface. Turn your messy ideas into polished blog posts in no time!</p>
        </motion.figure>
        <motion.img ref={imgRef} initial='hidden' animate={imgControls} variants={image} src={twit} alt="twitter" height={300}/>
      </motion.article>

      <motion.article className={styles.art2}>
        <motion.img ref={imgRef1} initial='hidden' animate={contentControls1} variants={image} src={img} alt="schedule" height={300}/>
        <motion.figure ref={contentRef1} initial='hidden' animate={contentControls1} variants={content}>
          <h1>Revolutionize Content Creation with BlogAll Dashboard</h1>
          <p>Streamline your content creation process and platform selection with BlogAll‘s user-friendly interface. Turn your messy ideas into polished blog posts in no time!</p>
        </motion.figure>
      </motion.article>

    </section>
  )
}

export default About