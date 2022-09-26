import styled from "styled-components";

export const StyledTitledAbout = styled.div({
// background: 'blue',
color: 'gainsboro',
display: 'flex',
flexDirection: 'column',
position: 'relative',
justifyContent: 'baseline',
fontSize: '30px',
fontWeight :'900',
height: 'fit-content',
// background: '-moz-linear-gradient(top, rgba(30,87,153,1) 0%, rgba(41,137,216,1) 50%, rgba(32,124,202,1) 51%, rgba(125,185,232,1) 100%)e',
backgroundBlendMode: 'darken',
backgroundColor: 'blue',
textDecorationColor:'black',
marginTop: '20px',
marginLeft: '50px',
paddingTop: '0px',
marginBottom: '0px',
paddingBottom: '0px',

'@media (max-width: 768px )': {
    // display: 'flex',
    flexDirection: 'column',
    

  },
  '@media (min-width: 300px )': {
    // display: 'flex',
    flexDirection: 'row',
    fontSize: '80px',
  }

})
 // ${({ theme }) => theme.mobile}