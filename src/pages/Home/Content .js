import React from 'react'
import Card from '../../component/Card'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import { Container } from '../../styles/Container.styled'
import content from '../../Data/content'
const Content  = () => {
  return (
    <div>
          <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        {/* About for home */}
        
        <Footer />
         </div>
  )
}

export default Content 