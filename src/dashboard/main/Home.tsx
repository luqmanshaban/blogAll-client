import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/Header'
import styles from '../styles/Home.module.scss'
import DateFilter from './components/DateFilter';
import logo from '../../assets/images/logo.png'
import Articles from '../articles/Articles';

type Props = {
    toggle: any;
}


const Home: React.FC<Props> = ({toggle}) => {
  const [activeArticle, setActiveArticle] = useState([true, false])

  const toggleArticle = (index: number) => setActiveArticle(activeArticle.map((value,i) => i === index));

  const screen = window.innerWidth <= 600;
  return (
    <div className={styles.home}>
        <header className={`${styles.header}`} onClick={toggle}>
        <h1>
              <img src={logo} alt="Logo"/>
              <Link to='/dashboard'>BlogAll</Link>
          </h1>
            <div className={`${styles.hamburger}`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
            {!screen && <Header/>}
        </header>
        <main>
          <DateFilter toggleArticle={toggleArticle} />
          <Articles active={activeArticle} />
        </main>
    </div>
  )
}

export default Home