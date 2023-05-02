import styled from "styled-components"

export const Header = styled.h5`
   color: green;
   background-color: ${(props) => {
      return props.isOn ? "yellow" : "orange"
   }};
   &:hover {
      background-color: lightblue;
   }
`
