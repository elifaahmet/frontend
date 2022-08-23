/** @format */

import { injectGlobal } from '@emotion/css';
import PilatRegularWoff2 from '../assets/fonts/Pilat-Regular.woff2';
import PilatRegularWoff from '../assets/fonts/Pilat-Regular.woff';
import PilatBoldWoff2 from '../assets/fonts/Pilat-Bold.woff2';
import PilatBoldWoff from '../assets/fonts/Pilat-Bold.woff';
import PilatCondensedBoldWoff2 from '../assets/fonts/PilatCondensed-Bold.woff2';
import PilatCondensedBoldWoff from '../assets/fonts/PilatCondensed-Bold.woff';

export default injectGlobal`
    @font-face {
        font-family: 'Pilat';
        src: url(${PilatRegularWoff2}) format('woff2'),
        url(${PilatRegularWoff}) format('woff');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: 'Pilat';
        src: url(${PilatBoldWoff2}) format('woff2'),
        url(${PilatBoldWoff}) format('woff');
        font-style: normal;
        font-weight: bold;
    }

    @font-face {
        font-family: 'Pilat Condensed';
        src: url(${PilatCondensedBoldWoff2}) format('woff2'),
        url(${PilatCondensedBoldWoff}) format('woff');
        font-style: normal;
        font-weight: bold;
    }

    @font-face {
      font-family: 'headline';
      src: url(${PilatRegularWoff2}) format('woff2'),
      url(${PilatRegularWoff}) format('woff');
      font-style: normal;
      font-weight: normal;
    }
`;
