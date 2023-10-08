import { createGlobalStyle } from "styled-components";

type Props = {
  theme: Theme;
};

export const GlobalStyle = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
    line-height: 1.3;
    color: ${(p) => p.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.text};
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.primary};
    border-radius: 50px;
  }
`;
