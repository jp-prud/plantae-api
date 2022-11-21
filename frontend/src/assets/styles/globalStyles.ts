import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
