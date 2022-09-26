import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from '../component/Card'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { AppBar } from '../component/NavBar/AppBar'
// import { About } from '../About/About'
import { Advices } from '../pages/Advices/Advices'
import { Contact } from '../pages/Contact/Contact'
import { Services } from '../pages/Services/Services'
import {Container} from '../styles/Container.styled'
import content from '../Data/content'
import { About } from '../pages/About/About'
export const Home = () => {
  return (
    <div>
          <AppBar />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        
        <Footer />
        <Routes>
        {/* <Route path="/" element={< />}  /> */}
        <Route path="/advices" element={<Advices />}  />
        <Route path="/services" element={<Services />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/about" element={<About />}  />
      </Routes>
    </div>
  )
}
