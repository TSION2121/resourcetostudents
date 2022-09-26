import { Button } from '@mui/material'
import React from 'react'
import Promotion from '../../component/promo/Promotion'
import { Container } from '../../styles/Container.styled'
import Books from './Physics/Books'
import Visuals from './Physics/Visuals'
import Concepts from './Physics/Concepts'
import Labs from './Physics/Labs'
import Experiments from './Physics/Experiments'
import Guides from './Physics/Guides'
import { StyledButtons, StyledGroupButtons } from '../../styles/NavBarHeader.styled'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Card from '../../component/Card'
import content from '../../Data/content'
import Footer from '../../component/Footer'
export const Services = ({clicked}) => {


//   const handleBooks = ()=> {
// setClicked(!clicked)
//   }
//   const handleConcepts = ()=> {
//     setClicked(!clicked)

//   }
//   const handleExperiments = ()=> {
//     setClicked(()=>{<Card />})

//   }
//   const handleGuides = ()=> {
//     setClicked(()=>{<Card />})

//   }
//   const handleLabs = ()=> {
//     setClicked(()=>{<Card />})

//   }
//   const handleVisuals = ()=> {
//     setClicked(()=>{<Card />})

//   }
  
  return (
    <div>
     
      <div>
        <Books clicked={false}
        
        // onClick={handleBooks}
        />
</div>

  <StyledButtons>
<Concepts
// onClick={handleConcepts}
/>
  </StyledButtons>



    <Experiments 
    // onClick={handleExperiments}
    />


  <StyledButtons>
    <Guides 
    // onClick={handleGuides}
    />
    </StyledButtons>


    <Labs 
    // onClick={handleLabs}
    />


    <StyledButtons>
    <Visuals 
    // onClick={handleVisuals}
    />
    </StyledButtons>


        <Container>
<Promotion /></Container>
<Footer />

    </div>
  )
}
 