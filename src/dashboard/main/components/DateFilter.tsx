import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './DateFilter.module.scss'
import CalendarIcon from '@mui/icons-material/CalendarToday';


interface UserState {
  firstname: string,
  lastname: string,
  email: string,
}

const DateFilter = () => {
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
        <h1>Welcome back {user.firstname}</h1>
        <article>
          <figure>
            <p>filters</p>
            <CalendarIcon id={styles.icon}/>
          </figure>
          {/* <figure></figure> */}
        </article>
    </section>
  )
}

export default DateFilter