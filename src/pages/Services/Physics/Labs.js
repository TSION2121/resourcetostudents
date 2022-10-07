import { Button } from '@mui/material'
import React from 'react'
import { StyledButtons } from '../../../styles/NavBarHeader.styled'
// import content from '../../../Data/content'
import { Container } from '../../../styles/Container.styled'
import Card from '../../../component/ServicesCard'
import labs from '../../../Data/Services/LabsData'
const Labs = () => {
  const [clicked,setClicked] = React.useState(false)

  const handleBooks = ()=> {
    return ( setClicked(!clicked
 ))}
  return (
    <div>   
            <StyledButtons>
  
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
      href="/services/labs"  
      >
    Physics Labs
    </Button></StyledButtons>
    <Container>
  {labs.map((item, index) => (
            
          
    clicked  && <Card key={index} item={item} /> 
    ))}
</Container>
    </div>
  )
}

export default Labs