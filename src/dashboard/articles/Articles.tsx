import React from 'react'
import styles from './Articles.module.scss'
import AllDevArticles from './dev.to/AllArticles';
import LatestArticles from './dev.to/LatestArticles';

type Props = {
  active: boolean[]
}
const Articles: React.FC<Props> = ({active}) => {
  return (
    <div className={styles.AllArticles}>
      <section className={styles.devTo}>
        { active[0] && <AllDevArticles /> }
        { active[1] && <LatestArticles /> }
      </section>
      <section className={styles.medium}></section>
      <section className={styles.hashnode}></section>
    </div>
  )
}

export default Articles;