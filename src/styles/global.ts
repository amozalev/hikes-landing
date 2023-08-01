import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
  }

  ${normalize}
  
  html {
    font-family: 'NEXT ART', sans-serif;
  }
`;
