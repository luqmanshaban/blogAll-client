import React from 'react'
import Add from '@mui/icons-material/Add'

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    backgroundColor: 'aliceblue',
    padding: '10px 20px',

    btn: {
        cursor: 'pointer',
        color: '#fff',
        backgroundColor: '#000',
        border: 'none',
        borderRadius: '5px',
        padding: '20px',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

}


const Header = () => {
  return (
    <div style={styles}>
        <h1>Schedule</h1>
        <button style={styles.btn}>
            <Add />
            Write a blog
        </button>
    </div>
  )
}

export default Header