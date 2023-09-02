import { createGlobalStyle } from 'styled-components';
import * as normalize from 'normalize.css';

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
    font-family: 'Nunito Sans', sans-serif;
    overflow-x: hidden;
  }

  //TODO fix this. this is for testing
  .tns-outer {
    width: 100%;
  }
`;
