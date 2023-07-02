import Cancel  from '@mui/icons-material/Cancel'
import React from 'react'

type Props = {
    onClick: any,
    children: any
}

const Backdrop: React.FC<Props> = ({onClick, children}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
        <Cancel onClick={onClick} style={{color: '#fff', fontSize: 40, position: 'absolute', right: '10px', top: '10px', cursor: 'pointeryarn '}}/>
        {children}
    </div>
  )
}

export default Backdrop