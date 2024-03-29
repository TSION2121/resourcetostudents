import styled from 'styled-components'

export const Button = styled.button`
margin-left: ${({ margin }) => margin || '0px'};
  border-radius: ${({ border }) => border || '50px'};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ size }) => size || '30px'};
  font-weight: 700;
  padding: 15px 40px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`
export const ButtonsStyled = styled.a`
margin-left: ${({ margin }) => margin || '0px'};
  border-radius: ${({ border }) => border || '50px'};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ size }) => size || '30px'};
  font-weight: 700;
  padding: 15px 40px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  `
