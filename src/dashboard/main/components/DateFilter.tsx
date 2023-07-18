import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './DateFilter.module.scss'
import LatestIcon from '@mui/icons-material/WatchLater';
import AllIcon from '@mui/icons-material/AllInclusive';
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

  return (
    <section className={styles.section}>
        <h1>Welcome back <span>{user.firstname}</span></h1>
        <article>
          <figure id={styles.fg1}>
            <span onClick={() => toggleArticle(0)}>
              <p>All</p>
              <AllIcon id={styles.icon}/>
            </span>
            <span onClick={() => toggleArticle(1)}>
              <p>Latest</p>
              <LatestIcon />
            </span>
          </figure>
          <figure id={styles.fg2}>
            <BasicDatePicker />
          </figure>
        </article>
    </section>
  )
}

export default DateFilter