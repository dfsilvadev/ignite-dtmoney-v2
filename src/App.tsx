import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "./styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <h1>Boilerplate</h1>
    </ThemeProvider>
  );
}

export default App;
