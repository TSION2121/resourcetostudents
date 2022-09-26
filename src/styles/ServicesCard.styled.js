import styled from 'styled-components'

export const StyledGroupCard = styled.div`
// display: grid;
// grid-template-columns: repeat(,40px);

`


export const StyledCard = styled.div`
  display: flex;
  align-items: ${({ first,edit }) => first ||edit|| 'center'};;
  background-color: ${({ edit ,first}) => edit  ||first|| 'navy'};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  
  flex-direction: ${({ layout }) => layout || 'column'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  
  &:hover {
    opacity: 9.9;
    transform: scale(0.98);
     background-color: transparent

  }
`
export const StyledCardTitle = styled.a({
// color:'ButtonShadow',
backgroundColor: 'skyblue',
fontFamily: 'Helvetica Neue',
color:'navy',
opacity: 4,
' &:hover' :{
  opacity: '0.9',
  transform: 'scale(1.98)',
  // backgroundColor: `${({first})=>first || 'red'}`,
  // backgroundColor: `'${({first})=>first || 'green'}'`,
backgroundColor: 'pear',
}

})
export const StyledCardvideoTitle = styled.h2({
  // color:'ButtonShadow',
  backgroundColor: 'royalblue',
  fontFamily: 'Helvetica Neue',
  color:'navy',
  opacity: 4,
  ' &:hover' :{
    opacity: '0.9',
    transform: 'scale(1.98)',
    // backgroundColor: `${({first})=>first || 'red'}`,
    // backgroundColor: `'${({first})=>first || 'green'}'`,
  backgroundColor: 'pear',
  }
  
  })

export const StyledCardBody = styled.p({
  color:'skyblue',
  backgroundColor: 'darkblue',
  opacity: 1,
  fontFamily: 'Helvetica Neue',
  fontWeight: 'italic',
  marginRight: '15px',
  marginLeft: '10px',
  fontSize: '30px',
  pageBreakBefore: 'break-before',
 ' &:hover' :{
    opacity: '0.9',
    transform: 'scale(0.98)',
    backgroundColor: `${({first})=>first || 'blue'}`
    

  }
  })
  export const StyledCardSource = styled.h2({
    color:'skyblue',
    backgroundColor: 'darkblue',
    opacity: 1,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'italic',
    marginRight: '15px',
    marginLeft: '10px',
    fontSize: '30px',
    pageBreakBefore: 'break-before',
   ' &:hover' :{
      opacity: '0.9',
      transform: 'scale(0.98)',
      backgroundColor: `${({first})=>first || 'blue'}`
      
  
    }
    })
