import { StyledHeader, Nav, Logo, Image, StyledLogoDefinitions } from '../styles/Header.styled'
import { Container } from '../styles/Container.styled'
import {  FlexHeader, FlexParagraph, FlexPromo, Share } from '../styles/Flex.styled'
// import { Buttons } from '../styles/Button.styled'
import image from '../assets/image/logo.jpg'
import Promotion from './promo/Promotion'
import { Button } from '@mui/material'
import { ButtonsStyled } from '../styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={image} alt='' /> <StyledLogoDefinitions>Students And Resources</StyledLogoDefinitions>

          <ButtonsStyled size='20px' bg='navy' color='white' border='20' margin='40px' >    StAR</ButtonsStyled>
          {/* <Button>Try It Free</Button> */}
        </Nav>

        <FlexHeader>
          <div>
            <h1>We are Here for you ,<br/>
              Get your Study Resources from StAR</h1>
            {/* <h1>Link and Save The Community  with the right resources</h1> */}

            <FlexParagraph>
              StAR let the clients shine with our accurate and simple services  . We do researchs as of you  and
               save the costs of searching for the right resources at the right time.
              </FlexParagraph>  <br/>
             <ButtonsStyled bg='royalblue' color='black' href="services">
               
               
             {/* Share your Experience */}
             Get our Services
            </ButtonsStyled>
              

            
          </div>

          <Image  src={image} alt='' />
        </FlexHeader>
       <Promotion />
          
      </Container>
    </StyledHeader>
  )
}
