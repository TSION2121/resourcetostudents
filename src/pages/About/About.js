import { Grid } from '@mui/material'
import React from 'react'
import Cards from '../../component/card/Cards'
import ReusableCard from '../../component/card/ReusableCard'
import { StyledTitledAbout } from '../../styles/Pages.styled'
// import image from '../../assets/image/Founders.jpg'
//   import logo from '../../assets/image/logo.jpg'
//   import resource from '../../assets/image/resource.jpg'
  import about from '../../Data/About/DataAbout'
  import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Footer from '../../component/Footer'

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
       <Grid container 
    
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

  
}}>

    {/* <Cards /> */}
    {about.map((data, index) => {
      return(
        <>
         <Grid item   key={index} sx={{
          
         }}>
    <ReusableCard  key={index}
    id={data.id}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
    </Grid>
    
    {/* <Grid item xs={2} sm={4} md={7} key={index}>
     <ReusableCard 
     key={index}
    title={data.title}
    content={data.content}
    date={data.date}
    image={data.pic}
    clicked={false}
    />
        </Grid> */}

     
     {/* <ReusableCard 
    title={news2.title}
    content={news2.content}
    date={news2.date}
    image={image}
    clicked={false}
    />
         <ReusableCard 
    title={news3.title}
    content={news3.content}
    date={news3.date}
    image={resource}
    clicked={false}
    /> */}
  </>
  )})}
  
    {/* < Cards /> */}
    </Grid>  
    <Footer />
      </div>
  )
}
