import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * 

  body {
    background: ${({ theme }) => theme.colors.header};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    // justify-content: center;
    // align-items: center;
    // display:flex
    // flex-direction: column;
    // background-image: url('https://images.pexels.com/photos/1998922/pexels-photo-1998922.jpeg?auto=compress&cs=tinysrgb&w=600');

    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
    }    
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyles
