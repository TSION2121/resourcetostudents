import { StyledCard, StyledCardBody, StyledCardSource, StyledCardTitle, StyledCardvideoTitle } from '../styles/Card.styled'

export default function Card({ item: { id, title, body,source, videoTitle,video,url } }) {
  return (
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
  )
}
