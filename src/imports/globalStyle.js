import { createGlobalStyle } from 'styled-components';
import { color, device } from './variables';

import DINreg from '../fonts/FF DIN Regular.otf';
import DINmed from '../fonts/FF DIN Medium.otf';
import DINbold from '../fonts/FF DIN Bold.otf';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    overflow-x: hidden;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-size: 18px;
    @media ${device.tablet} {
      font-size: 16px;
    }
  }
  body {
    color: ${color.dark};
    font-family: 'DIN', cursive;
    font-weight: 400;
    visibility: hidden;
  }
  @font-face {
    font-family: "DIN";
    font-weight: 400;
    src: url(${DINreg});
  }
  @font-face {
    font-family: "DIN";
    font-weight: 600;
    src: url(${DINmed});
  }
  @font-face {
    font-family: "DIN";
    font-weight: 800;
    src: url(${DINbold});
  }
`;

export default GlobalStyle;
