import { css } from '@emotion/react';

import Verdana from '../assets/fonts/Verdana.woff';
import VerdanaBold from '../assets/fonts/Verdana-Bold.woff';
import GothamproBold from '../assets/fonts/gothampro_bold.woff';
import GothamproLight from '../assets/fonts/gothampro_light.woff';

export const GlobalStyles = theme => css`
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @font-face {
    font-family: 'Verdana';
    src: url(${Verdana}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }
  @font-face {
    font-family: 'VerdanaBold';
    src: url(${VerdanaBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }
  @font-face {
    font-family: 'GothamproBold';
    src: url(${GothamproBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }
  @font-face {
    font-family: 'GothamproLight';
    src: url(${GothamproLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    font-display: swap;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    font-family: 'Verdana';
    font-size: 14px;
    background-color: ${theme.backgrounds.bodyPrimary};
    color: ${theme.fontColors.primary};
    transition: background-color
      ${theme.transitions.primary};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    padding: 0;
  }
`;
