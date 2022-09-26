import { Grid } from '@mui/material'
import { StyledCard, StyledCardBody, StyledCardSource, StyledCardTitle, StyledCardvideoTitle, StyledGroupCard } from '../styles/ServicesCard.styled'
//some Styles changed here and button stability
export default function Card({ item: { id, title, body,source, videoTitle,video,url } }) {
  return (

//     <Grid container 
    
//     sx={{ 
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       gap: '90px ', 
//       margin: '0 20px 20px 0',
//       alignItems: 'center',
//       height: 'fit-content', 
//       width:'fit-content', 
//       fontSize: '30px',     
//       position: 'relative' ,          
//     // textAlign: { xs: 'center', sm: 'start' },
     
// '@media (max-width: 768px )': {
//   // display: 'flex',
//   flexDirection: 'column',
  

// },
// '@media (min-width: 300px )': {
//   // display: 'flex',
//   flexDirection: 'row',
//   fontSize: '90px',
// }

  
// }}>

   
//          <Grid item   sx={{
          
//          }}>
 
 
    
 
  <StyledGroupCard>
  
    <StyledCard layout={id % 2  === 0 && 'row-reverse'} edit ={id % 3 === 0 && 'royalblue'} first={id  === 1 && 'azure'}>
      <div>
        <h2>
          
        <StyledCardTitle  href={url}>{title}</StyledCardTitle>
        </h2>
        <StyledCardBody>{body}</StyledCardBody>
<StyledCardSource>From:{source}</StyledCardSource>
      </div>

      <div>
      <iframe width="450" height="600" src={video}  title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <video width="450" height="600" controls loop  autoPlay poster={video} >
      <source src={image} type="video/mp4"/> 
     </video> */}
        {/* <img src={`./images/${image}`} alt='' /> */}
        <StyledCardvideoTitle> {videoTitle}</StyledCardvideoTitle>

      </div>
    </StyledCard>   
     </StyledGroupCard>
    //  </Grid></Grid>  
  )
}
