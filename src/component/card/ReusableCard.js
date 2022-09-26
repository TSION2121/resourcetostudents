import { AspectRatio, Box, Button, Card, IconButton, Typography } from '@mui/joy';
import { CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react'
// import { StyledImage } from '../../styles/NavBarHeader.styled';
import CardDate from './CardDate';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
// import Home from '../Home';
import { StyledReadMoreButtons } from '../../styles/NavBarHeader.styled';
import { StyledCard } from '../../styles/Card.styled';
import { About } from '../../pages/About/About';
import { Home } from '../../trash/Home';





const ReusableCard = (props) => {

    const {id,title,content,date, image} = props;

   const [clicked,setClicked] = React.useState(false)
  // const clicked = props.clicked;

  if (clicked) {
   return <About />
   //to be replaced by the other details
  }

  let readMore;

  if (clicked) {
    readMore = <About />;
  } else {
    readMore = "Read More";
  }
 

   const handleClick = () => {
setClicked(()=> !clicked);
   }



  return (
    <>
    {/* <StyledCard  layout={id % 2 === 0 && 'row-reverse'}> */}
    <Card
    id ={id}
    variant="contained"
    sx={{ 
      // minWidth: '550px',
      backgroundColor: 'beige', 
      position: 'relative', 
      wordSpacing: '0.5rem', 
      display: 'flex',
      // objectFit:'cover',
      // backgroundSize:'cover', 
      flexDirection: 'column',
      height: 'fit-content',
      justifyContent: 'left',
      fontSize: '30px',
      width: 'fit-content',
      '@media (max-width: 768px )': {
        display: 'flex',
        flexDirection: 'column',
      },
      '@media (min-width: 300px )': {
        // display: 'flex',
        flexDirection: 'column',
        fontSize: '90px',
      }
      
      }}
    >

    
    <AspectRatio
    ratio='16/7'
          objectFit="contain" 

    >
      <CardMedia
      // sx={{
      //   backgroundSize:'cover',
      //   backgroundRepeat:'no-repeat'
      // }}
    image={        
        image
    }
    ></CardMedia>  
    </AspectRatio>
    <Box
     sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 0.5 }}
    >

    
    <CardDate
     date ={date}
     
    >

    </CardDate>
    <CardHeader
    title={
      <Typography 
      children={title}
      level="h1"
      fontSize="xl"
    
      sx={{ alignSelf: 'flex-start', 
      // minHeight:"300px",
      // fontSize:"25px",
      // fontWeight:"1000", 
      fontWeight:'900',
      fontSize: '130px',
    }} />
    }
    //consitency like Typography
    >
        </CardHeader> 
    </Box>
    <Box
     sx={{
        display: 'flex',
        flexDirection: 'column', 
       
        }}
    >

    <CardContent 
    children={content}
    level="body3"  
  sx={{ alignSelf: 'flex-start', 
  // minHeight:"300px",
  fontSize:"70px",
  fontFamily: 'Inter',
  fontWeight:"400", }}
    ></CardContent>
    </Box>
   <StyledReadMoreButtons>
      <Button
          onClick={handleClick}
          variant="outlined"
          size="sm"
        
          aria-label="Explore Bahamas Islands"
        children={clicked?<About />:<Home /> }
        >
         {readMore}<IconButton >
<ArrowForwardTwoToneIcon />
          </IconButton>
        </Button>
        </StyledReadMoreButtons>
    </Card>
    {/* </StyledCard> */}
    </>
  )
}

export default ReusableCard