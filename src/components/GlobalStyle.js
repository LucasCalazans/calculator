import { createGlobalStyle } from 'styled-components';
import fonts from '@/helpers/fonts';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: ${fonts.regular};
    font-family: Helvetica;
  }

  html,
  body,
  #main {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: visible;
  }

  #main {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
