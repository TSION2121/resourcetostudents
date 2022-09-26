import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin-top: 90px;
  }
`
export const StyledLogoDefinitions = styled.h1(
  {
       marginLeft: '40px', 
       fontSize: '60px',
       fontWeight: 600, 
       color:"white",
      backgroundColor: 'skyblue', 
      display:'flex',
    flexDirection: 'row',
      // text: 'black',
      "&:hover":{
          color:  'white',
          backgroundColor:'black',
          
  }
}
)

export const Logo = styled.img`
    width: 90px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    width: 100px;
  }
`

export const Image = styled.img`
  width: 100px;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
    width: 80px;
  }
`
