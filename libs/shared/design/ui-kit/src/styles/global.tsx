/** @format */

import { injectGlobal } from '@emotion/css';
import './normalize';
import './fonts';

export default injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }

  body {
    padding: 0;
    font-family: 'Pilat', sans-serif;
  }

`;
