import { ThemeProvider } from "styled-components";

import { Transactions } from "./screens";

import { DefaultTheme, GlobalStyles } from "./styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  );
}

export default App;
