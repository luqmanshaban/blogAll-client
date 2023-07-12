import React, { useState } from 'react'
import styles from './styles/Dashboard.module.scss'
import Aside from './aside/Aside'
import Home from './main/Home'

const Dashboard = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
      setActive(!active)
  }
  const unToggleActive = () => {
      setActive(false)
  }
  
  
  return (
    <div className={styles.dashboard}>
      <aside>
        <Aside unToggle={unToggleActive} active={active}/>
      </aside>
      <section>
        <main>
          <Home toggle={toggleActive} />
        </main>
      </section>
    </div>
  )
}

export default Dashboard