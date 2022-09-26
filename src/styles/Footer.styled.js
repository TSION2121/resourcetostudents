import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  position: ${({ margin }) => margin || 'relative'};
  margin-top: ${({top}) => top || '0px'};
  relative;
  bottom: 0;
  width: 100%;
  z-index:1;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
