import React from 'react'
import styles from '../styles/Aside.module.scss'
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import DraftsIcon from '@mui/icons-material/Drafts';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Help';

type Props = {
    unToggle: any;
    active: any;
}

const Aside: React.FC<Props> = ({unToggle, active}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
    alert('Logged Out');
  }

  return (
    <nav className={`${styles.dashboardNav} ${active ? styles.active : ''}`}>
    <section className={styles.aside}>
        <header>
          <h1>
              <img src={logo} alt="Logo"/>
              <Link to='/dashboard'>BlogAll</Link>
          </h1>
          <div className={`${styles.hamburger} `} onClick={unToggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </header>
        <ul className={styles.navMenu}>
           
            <li>
              <article>
                <ArticleIcon />
                <h3>Articles</h3>
              </article>
               <p className={styles.hr}></p>
            </li>
            <li>
                <article>
                  <DraftsIcon />
                  <h3>Drafts</h3>
                </article>
                <p className={styles.hr}></p>
            </li>
            <li>
              <article>
                <AnalyticsIcon />
                <h3>Analytics</h3>
              </article>
                <p className={styles.hr}></p>
            </li>
            <li>
                <article>
                  <SettingsIcon />
                  <h3>Settings</h3>
                </article>
                <p className={styles.hr}></p>
            </li>
            <li>
              <article>
                <SupportIcon />
                <h3>Support</h3>
              </article>
              <p className={styles.hr}></p>
            </li>
            <li className={styles.logout} onClick={logout}>
              <LogoutIcon />
              <button>Logout</button>
            </li>
        </ul>
    </section>
    <section>Profile</section>
    </nav>
  )
}

export default Aside