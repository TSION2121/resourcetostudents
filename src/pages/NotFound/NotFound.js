import React from 'react'
import { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { StyledCardTitle } from '../../styles/Card.styled'

const NotFound = () => {
  const navigate = useNavigate() 
  useEffect(() => {
  setTimeout(()=>{
    navigate("/",{state: "Error Not Page"}) 
  },1000)
},[navigate])
    return <>
    <StyledCardTitle> NotFound</StyledCardTitle>
   </>

}

export default NotFound