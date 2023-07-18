import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './DateFilter.module.scss'
import LatestIcon from '@mui/icons-material/WatchLater';
import AllIcon from '@mui/icons-material/AllInclusive';
import FiltertIcon from '@mui/icons-material/FilterAlt';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import BasicDatePicker from './DatePicker';

type Props = {
  toggleArticle: any,
}

interface UserState {
  firstname: string,
  lastname: string,
  email: string,
}

const DateFilter: React.FC<Props> = ({toggleArticle}) => {
  const [active, setActive] = useState(false)
  const [user, setUser] = useState<UserState>({
    firstname: '',
    lastname: '',
    email: '',
  });

  useEffect(()=> {
    getUserName()
  })

  const getUserName = async () => {
    const sessionToken = localStorage.getItem('authToken')
    try {
      const response = await axios.get('https://blogall-server.cyclic.app/user', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
          }
      })
      setUser({
        firstname: response.data.user.firstname,
        lastname: response.data.user.lastname,
        email: response.data.user.email,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const toggleActive = () => setActive(!active)
  const unToggleActive = () => setActive(false)

  const onClickEvent = (index: number) => {
    unToggleActive();
    toggleArticle(index);
  }

  return (
    <section className={styles.section}>
        <h1>Welcome back <span>{user.firstname}</span></h1>

        <article>
          <figure className={`${styles.figure1} ${active ? styles.active: ''}`}>
            <span onClick={() => onClickEvent(0)}>
              <p>All</p>
              <AllIcon id={styles.icon}/>
            </span>
            <span onClick={() => onClickEvent(1)}>
              <p>Latest</p>
              <LatestIcon />
            </span>
          </figure>
          <figure className={`${styles.figure1} ${active ? styles.active: ''}`} >
            <BasicDatePicker />
          </figure>
        </article>
        <button className={styles.filter} onClick={toggleActive}><FiltertIcon />Filter</button>
        <hr />
    </section>
  )
}

export default DateFilter