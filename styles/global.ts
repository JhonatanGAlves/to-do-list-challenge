import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-0: #FFFFFF;
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #191919;
    --gray-700: #0D0D0D;
    --blue-500: #4EA8DE;
    --blue-700: #1E6F9F;
    --purple-500: #8284FA;
    --purple-700: #5E60CE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--gray-600);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
