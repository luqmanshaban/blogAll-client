import React, { useEffect } from 'react'
import styles from '../../styles/Features.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const content1 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5,}},
    transition: {type: 'spring', stiffeness: 60, }
}
const content2 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}},
    transition: {type: 'spring', stiffeness: 60, }
}
const content3 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.4}},
    transition: {type: 'spring', stiffeness: 60, }
}
const content4 = {
    hidden: {opacity: 0, y: 40},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}},
    transition: {type: 'spring', stiffeness: 60, }
}

const Features = () => {
    const controls1 = useAnimation()
    const controls2 = useAnimation()
    const controls3 = useAnimation()
    const controls4 = useAnimation()
    const [ref1, inView1] = useInView({triggerOnce: true}) 
    const [ref2, inView2] = useInView({triggerOnce: true}) 
    const [ref3, inView3] = useInView({triggerOnce: true}) 
    const [ref4, inView4] = useInView({triggerOnce: true}) 

    useEffect(() => {
        if(inView1){
            controls1.start('visible')
        }
    },[controls1, inView1])

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

    useEffect(() => {
        if(inView4){
            controls4.start('visible')
        }
    },[controls4, inView4])
    
  return (
    <section className={styles.features} id='features'>
        <h1>Hassle-Free Tools</h1>

        <div>
        <article>
            <motion.figure ref={ref1} initial='hidden' animate={controls1} variants={content1}>
                <h3>Social Sharing</h3>
                <p>Increase your reach by seamlessly sharing posts across multiple platforms.</p>
            </motion.figure >
            <motion.figure ref={ref2} initial='hidden' animate={controls2} variants={content2}>
                <h3>Performance Analytics</h3>
                <p>Gain insights and track performance with BlogAll’s analytics dashboard.</p>
            </motion.figure>
        </article>
        <article>
            <motion.figure ref={ref3} initial='hidden' animate={controls3} variants={content3}>
                <h3>Effortless Scheduling</h3>
                <p>Simplify your posting routine with our user-friendly scheduler.</p>
            </motion.figure>
            <motion.figure ref={ref4} initial='hidden' animate={controls4} variants={content4}>
                <h3>Cross-Platform</h3>
                <p>Multiply your reach by connecting with diverse audiences on various platforms.</p>
            </motion.figure>
        </article>
        </div>
    </section>
  )
}

export default Features