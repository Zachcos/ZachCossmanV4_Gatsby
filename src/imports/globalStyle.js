/* eslint-disable import/no-named-as-default-member */
import { createGlobalStyle } from 'styled-components';
import { color, device } from './variables';

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
    font-family: "DIN", sans-serif;
    font-weight: 400;
    visibility: hidden;
  }

  @font-face {
    font-family: 'DIN';
    font-weight: 400;
    src: url('/fonts/DIN-Regular.eot'),
         url('/fonts/DIN-Regular.woff2') format('woff2'),
         url('/fonts/DIN-Regular.woff') format('woff'),
         url('/fonts/DIN-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DIN';
    font-weight: 600;
    src: url('/fonts/DIN-Medium.eot'),
         url('/fonts/DIN-Medium.woff2') format('woff2'),
         url('/fonts/DIN-Medium.woff') format('woff'),
         url('/fonts/DIN-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'DIN';
    font-weight: 800;
    src: url('/fonts/DIN-Bold.eot'),
         url('/fonts/DIN-Bold.woff2') format('woff2'),
         url('/fonts/DIN-Bold.woff') format('woff'),
         url('/fonts/DIN-Bold.ttf') format('truetype');
  }
`;

export default GlobalStyle;
