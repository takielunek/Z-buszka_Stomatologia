import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${(props) => (props.$primary ? "#3d795f" : "#fff")};
  background-color: ${(props) => (props.$primary ? "#fff" : "#91b4a5")};
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 600ms;
  &:hover {
    color: ${(props) => (props.$primary ? "#fff" : "#91b4a5")};
    background-color: ${(props) => (props.$primary ? "#91b4a5" : "#fff")};
  }
`;


export default StyledButton