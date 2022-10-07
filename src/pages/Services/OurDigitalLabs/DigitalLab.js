import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../component/ServicesCard'

import content from '../../../Data/content'
//to be changed
import { Container } from '../../../styles/Container.styled'
import { StyledCardTitle } from '../../../styles/ServicesCard.styled'
const DigitalLab = () => {
  const [clicked,setClicked] = React.useState(false)
//   const navigate = useNavigate() 
        // useEffect(() => { return (

        // // setTimeout(()=>{
        // // //   navigate("/digitalLab",
        // // //    ) 

        // // },1000)
        //  ) },[])

  const handleBooks = ()=> {


      


    return ( setClicked(!clicked
 ))}
  return (
    <div>
           <Button
             //  aria-controls={open ? 'fade-menu' : undefined}
      //  aria-haspopup="true"
      //  aria-expanded={open ? 'true' : undefined}
      //  onClick={handleClick}
      //  onMouseEnter={handleClick}
      onMouseEnter={handleBooks}
      onClick={handleBooks}
      // onFocus={handleBooks}
      onDoubleClick={handleBooks}
      // onChange={clicked}
                                 
       variant="text"  
    //    children={clicked? <Card /> : null}
      href="/digitalLAB"  
           >
           Our Digital Lab
    </Button>
    <Container>
  {
            
          
    clicked  &&     alert(" NOT Developed YET Will Be Released IN PROCESS")
}
 

{/* <StyledCardTitle> NOT Developed YET Will Be Released IN PROCESS</StyledCardTitle> */}
</Container>
     </div>
  )
}

export default DigitalLab