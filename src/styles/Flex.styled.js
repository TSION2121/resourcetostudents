import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  color : white;
  opacity:0/9;
  background-color : transparent;
  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
export const FlexHeader = styled.div`
display: flex;
align-items: center;
text-align: left;
margin-bottom:30px;
color : white;
opacity:0/9;
background-color : navy;
& > div,
& > ul {
  flex: 1;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-direction: column;
  text-align: center;
}
`
export const FlexPromo = styled.h2({
  textAlign: 'center',
  fontSize: '90px',
  marginBottom:'20px',
})
export const FlexPage = styled.div({
 
  marginBottom:'90px',
})
export const Share = styled.h2({
  textAlign: 'center',
  fontSize: '50px',
  backgroundColor:'royalblue',
  borderRadius:'30px',
  width: 'fit-content',
})
export const FlexParagraph = styled.p({
  textAlign: 'center',
  fontSize: '25px',
  marginBottom: '20px',
})