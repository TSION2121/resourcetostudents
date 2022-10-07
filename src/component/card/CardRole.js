import { Typography } from '@mui/joy';
import React from 'react'

const CardRole = ({role}) => {
    // const {role} = props;
  return (
    <div>
        <Typography 
       
        level="body2">{role} </Typography>
    </div>
  )
}

export default CardRole