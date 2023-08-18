import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Helvetica, pretendard;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyle;