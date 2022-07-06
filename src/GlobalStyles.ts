import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-raleway: 'Raleway', sans-serif;
    --root-size: 18px;
    --sidebar-bg-color: rgb(30, 33, 58);
    --dashboard-bg-color: rgb(16, 14, 29);
    --button-text-color: rgb(231, 231, 235);
    --button-bg-color: rgb(110, 112, 122);
    --unit-text-color: rgb(160, 159, 177);
    --location-text-color: rgb(136, 134, 157);
    --yellow: rgb(255, 236, 101);
  }

  html {
    box-sizing: border-box;
    font-family: var(--font-raleway);
    font-size: var(--root-size);
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  * {
    margin:0;
    padding:0;
  }

  button {
    outline: none;
    border: none;
    font-family: var(--font-raleway);
  }

  ul {
    list-style-type: none;
    list-style: none;
  }
`;

export default GlobalStyles;
