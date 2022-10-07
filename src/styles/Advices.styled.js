import styled from "styled-components";

export const  AdvicesTitle = styled.h1 (({layout, first, edit, main}) =>({
    marginLeft: layout|| "80px",
    fontSize: "6rem",
    marginRight: "80px",
  display: "flex",
  flexDirection: "column",
  flex:' 0 1 70%',
  color: edit || layout || main|| "dodgerblue",
  ' &:hover' :{
    opacity: '0.9',
    transform: 'scale(1.18)',
    position: 'relative',
    // backgroundColor: `${({first})=>first || 'red'}`,
    // backgroundColor: `'${({first})=>first || 'green'}'`,
  // backgroundColor: 'black',
  color: 'black',
  }


    }))
    export const StyledCard = styled.div`
  display: flex;
  align-items: ${({ first,edit }) => first ||edit|| 'center'};;
  background-color: ${({ edit ,first}) => edit  ||first|| 'skyblue'};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.95);
  margin: 40px 0;
  padding: 60px;
  width: fit-content;
  position: relative;
  
  
  flex-direction: ${({ layout }) => layout || 'row'};

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
    padding:
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

    export const AdviceBody= styled.body({
  
        height: '100%',
        pageBreakBefore: 'break-before',
            backgroundImage: "url('https://th.bing.com/th/id/OIP.ZphSWdBF2uxy2jtxNmGE_gHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7')",
            backgroundSize:'cover',
       ' &:hover' :{
          opacity: '0.9',
          transform: 'scale(0.98)',
          backgroundColor: `${({first})=>first || 'blue'}`
          
      
        }
        })