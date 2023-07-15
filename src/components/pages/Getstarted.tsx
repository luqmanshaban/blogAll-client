import React, { useEffect } from 'react'
import styles from '../../styles/Getstarted.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
    transition: {type: 'spring', stiffeness: 60, }
}

type Props = {
  onClick: any;
}

const Getstarted: React.FC<Props> = ({onClick}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({triggerOnce: true}) 

  useEffect(() => {
    if(inView){
        controls.start('visible')
    }
},[controls, inView])

  return (
    <motion.section className={styles.getstarted}>
        <motion.h1 ref={ref} initial='hidden' animate={controls} variants={variants}>Join BlogAll</motion.h1>
        <motion.p ref={ref} initial='hidden' animate={controls} variants={variants}>Are you ready to revolutionize your blogging journey? Sign<span><br /></span> up for BlogAll and watch your creativity soar!</motion.p>
        <motion.button ref={ref} initial='hidden' animate={controls} variants={variants} onClick={onClick}>Get Started</motion.button>
    </motion.section>
  )
}

export default Getstarted