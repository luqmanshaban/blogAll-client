import React from 'react'
import styles from '../../styles/Getstarted.module.scss'

type Props = {
  onClick: any;
}

const Getstarted: React.FC<Props> = ({onClick}) => {
  return (
    <section className={styles.getstarted} >
        <h1>Join BlogAll</h1>
        <p>Are you ready to revolutionize your blogging journey? Sign<span><br /></span> up for BlogAll and watch your creativity soar!</p>
        <button onClick={onClick}>Get Started</button>
    </section>
  )
}

export default Getstarted