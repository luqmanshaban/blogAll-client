import React from 'react'
import styles from '../styles/Aside.module.scss'
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

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
           
            <li>Articles
               <p className={styles.hr}></p>
            </li>
            <li>
                Drafts
                <p className={styles.hr}></p>
            </li>
            <li>Analytics
                <p className={styles.hr}></p>
            </li>
            <li>
                Settings
                <p className={styles.hr}></p>
            </li>
            <li>Support
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