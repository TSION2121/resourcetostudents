import { AspectRatio, Box, Button, Card, IconButton, Typography } from '@mui/joy';
import { Avatar, CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react'
// import { StyledImage } from '../../styles/NavBarHeader.styled';
import CardDate from './CardDate';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
// import Home from '../Home';
import { StyledReadMoreButtons } from '../../styles/NavBarHeader.styled';
import { StyledCard } from '../../styles/Card.styled';
import { About } from '../../pages/About/About';
import { Home } from '../../trash/Home';
import CardRole from './CardRole';
import { RoleCardTitle } from '../../styles/About.styled';





const TeamCard = (props) => {

    const {id,content, avatar , name , role} = props;

   const [clickede,setClickede] = React.useState(false)
  // const clickede = props.clickede;

  if (clickede) {
   return <About />
   //to be replaced by the other details
  }

  let readMore;

  if (clickede) {
    readMore = <About />;
  } else {
    readMore = "Read More";
  }
 

   const handleClick = () => {
setClickede(()=> !clickede);
   }



  return (
    <>
    {/* <StyledCard  layout={id % 2 === 0 && 'row-reverse'}> */}
    <Card
    id ={id}
    variant="contained"
    sx={{ 
      // minWidth: '550px',
      borderRadius: '190px',
      backgroundColor: 'lightblue', 
      position: 'relative', 
      wordSpacing: '0.5rem', 
      display: 'flex',
      // objectFit:'cover',
      // backgroundSize:'cover', 
      flexDirection: 'column',
      height: 'auto',
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

    
<AspectRatio>
 <Avatar 
 alt="helo"
 src={avatar}
 />
</AspectRatio>  
    

    <Box
     sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 0.5 }}
    >

    

    <CardHeader
    title={
      <Typography 
      children={name}
      level="h1"
      fontSize="xl"
    
      sx={{ alignSelf: 'flex-start', 
      // minHeight:"300px",
      // fontSize:"25px",
      // fontWeight:"1000", 
      fontWeight:'900',
      fontSize: '70px',
    }} />
    }
    //consitency like Typography
    >
        </CardHeader> 
        <RoleCardTitle>
        <CardRole
role={role}

></CardRole></RoleCardTitle>
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
   
    </Card>
    {/* </StyledCard> */}
    </>
  )
}

export default TeamCard