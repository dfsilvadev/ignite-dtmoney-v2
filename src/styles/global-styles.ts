import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  .html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }
  html,
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    transition: background 0.15s ease-in-out;
  }
  body {
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
  ol,
  ul {
    list-style: none;
  }
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem ${theme.font.family}, sans-serif;
    color: ${theme.colors.text};
    transition: color 0.15s ease-in-out;
  }
  span {
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a,
  p {
    font-size: ${theme.font.sizes.medium};
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`}
`;

export default GlobalStyle;
