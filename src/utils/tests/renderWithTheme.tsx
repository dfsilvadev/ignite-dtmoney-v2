import { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "../../styles";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>);
