import { Button } from '@mui/material'
import React from 'react'
import Card from '../../../component/ServicesCard'
import content from '../../../Data/content'
//to be changed
import { Container } from '../../../styles/Container.styled'
const Guides = () => {
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
      href="/services/guides"  
           >
    Physics  Guides
    </Button>
    <Container>
  {content.map((item, index) => (
            
          
    clicked  && <Card key={index} item={item} /> 
    ))}
</Container>
     </div>
  )
}

export default Guides