import { CardHeader, Grid } from '@mui/material'
import React from 'react'
import Cards from '../../component/card/Cards'
import TeamCard from '../../component/card/TeamCard'
import ReusableCard from '../../component/card/ReusableCard'

import { StyledTitledAbout } from '../../styles/Pages.styled'
// import image from '../../assets/image/Founders.jpg'
//   import logo from '../../assets/image/logo.jpg'
//   import resource from '../../assets/image/resource.jpg'
  // import about from '../../Data/About/DataAbout'
  import {team, about} from '../../Data/About/DataAbout'

  import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Footer from '../../component/Footer'
import { Box } from '@mui/joy'
import { TeamCardTitle } from '../../styles/About.styled'

export const About = (props) => {
  return (
    <div>
       <StyledTitledAbout>
        About StAR  <AutoGraphIcon sx={{
        color: 'white',
        height: 'fit-content',
        fontSize: '100px'
        }} />
       </StyledTitledAbout>
       {/* <Cards /> */}
       <Box 
        sx={{ 
          display: 'flex',
          // flexDirection: 'row',
          gap:{xs:'10px', sm: '50px', md: '80px'}, 
          margin: '60px',
          flexDirection: {xs : 'column', sm:'column' , md: 'column', lg : 'row'},   
           
          fontSize:{xs:'30px', sm: '20px', md: '10px', lg :"5px"},
          width : {xl:'50%', },
          height : {xl:'100%',},
flex: '1 1 20%'  ,        

        // textAlign: { xs: 'center', sm: 'start' },
        mt: { xs: 1.5, sm: 0, },
    
    }}>
       {/* <Grid container 
    
    sx={{ 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '90px ', 
      margin: '0 20px 20px 0',
      alignItems: 'center',
      height: 'fit-content', 
      width:'fit-content', 
      fontSize: '30px',     
      position: 'relative' ,          
    // textAlign: { xs: 'center', sm: 'start' },
     
'@media (max-width: 768px )': {
  // display: 'flex',
  flexDirection: 'column',
  

},
'@media (min-width: 300px )': {
  // display: 'flex',
  flexDirection: 'row',
  fontSize: '90px',
}

  
}}> */}

    {/* <Cards /> */}
    {about.map((data, index) => {
      return(
        <>
         {/* <Grid item   key={index} sx={{
          
         }}> */}
    <ReusableCard  key={index}
    id={data.id}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
  

     
   
  </>
  )})}
  
    </Box>

<TeamCardTitle> Our TEAM</TeamCardTitle>
    <Box 
    
    sx={{ 
      display: 'flex',
      // flexDirection: 'row',
      gap:{xs:'10px', sm: '50px', md: '80px'}, 
      margin: '60px',
      flexDirection: {xs : 'column', sm:'column' , md: 'column', lg : 'row'},   
       
      fontSize:{xs:'30px', sm: '20px', md: '10px', lg :"5px"},
      width : {xl:'50%', },
      height : {xl:'80%',},
// flex: '1 1 20%'  ,        
      marginLeft:"1000px",

    // textAlign: { xs: 'center', sm: 'start' },
    mt: { xs: 1.5, sm: 0, },

}}
    >
    {team.map((data, index) => {
      return(
        <>
      
    <TeamCard  key={index}
    id={data.id}
    name={data.name}
    role={data.role}
    content={data.content}
    avatar={data.avatar}
    clickede={false}
    />
    
  </>
  )})}
    </Box>

     
    <Footer />
      </div>
  )
}
