import SocialIcons from '../component/SocialIcons'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { StyledFooter } from '../styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
          <ul>
            <li>
              StAR
            </li>
            <li>+251-964-786-578</li>
            <li>StAR@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
<ul>
  Follow  us on
            <li> <SocialIcons /></li> 
          </ul>
        </Flex>

        <p>&copy; 2022 StAR. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
