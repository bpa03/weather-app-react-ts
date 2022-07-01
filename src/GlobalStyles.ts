import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-raleway: 'Raleway', sans-serif;
    --root-size: 18px;
    --sidebar-bg-color: rgb(30, 33, 58);
    --dashboard-bg-color: rgb(16, 14, 29);
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
`;

export default GlobalStyles;
