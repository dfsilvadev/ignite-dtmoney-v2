import { ThemeProvider } from "styled-components";

import { Transactions } from "@/screens";

import { TransactionsProvider } from "@/contexts/transactionsContext";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
