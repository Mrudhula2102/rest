import { Button, Rating } from '@mui/material'
import React from 'react'

const Rating1 = () => {
  return (
    <div align="center" className='txt'>
       <h3>Restaurant Rating</h3>
       Rating Approved by Govt&nbsp;&nbsp;<Rating name="size-small" defaultValue={3} size='small' /><br/><br/>
       <Button align="center" variant='contained'>Submit</Button>
      
    </div>
  )
}

export default Rating1
