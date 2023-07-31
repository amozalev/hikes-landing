import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
  }

  ${normalize}
  
  html {
    font-family: 'NEXT ART', sans-serif;
  }
`;
