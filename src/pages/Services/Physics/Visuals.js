import { Button } from '@mui/material'
import React from 'react'
import Card from '../../../component/ServicesCard'
import visuals from '../../../Data/Services/VisualsData'
import { Container } from '../../../styles/Container.styled'
const Visuals = () => {
  const [clicked,setClicked] = React.useState(false)

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
       children={clicked? <Card /> : null}
      href="/services/visuals"  
    >
    Physics Visuals
    </Button>
    <Container>
  {visuals.map((item, index) => (
            
          
    clicked  && <Card key={index} item={item} /> 
    ))}
</Container>
      </div>
  )
}

export default Visuals