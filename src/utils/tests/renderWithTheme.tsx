import { ReactNode } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { DefaultTheme } from "@/styles";

const renderWithTheme = (
  children: ReactNode,
  options?: RenderOptions
): RenderResult =>
  render(
    <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>,
    options
  );

export default renderWithTheme;
