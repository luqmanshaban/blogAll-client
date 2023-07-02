import React from 'react'
import styles from '../../styles/Features.module.scss'

const Features = () => {
  return (
    <section className={styles.features} id='features'>
        <h1>Hassle-Free Tools</h1>

        <div>
        <article>
            <figure>
                <h3>Social Sharing</h3>
                <p>Increase your reach by seamlessly sharing posts across multiple platforms.</p>
            </figure>
            <figure>
                <h3>Performance Analytics</h3>
                <p>Gain insights and track performance with BlogAll’s analytics dashboard.</p>
            </figure>
        </article>
        <article>
            <figure>
                <h3>Effortless Scheduling</h3>
                <p>Simplify your posting routine with our user-friendly scheduler.</p>
            </figure>
            <figure>
                <h3>Cross-Platform</h3>
                <p>Multiply your reach by connecting with diverse audiences on various platforms.</p>
            </figure>
        </article>
        </div>
    </section>
  )
}

export default Features