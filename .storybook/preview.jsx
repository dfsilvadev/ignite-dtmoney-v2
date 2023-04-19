import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Introdução",
        "Pages",
        ["Transactions"],
        "Layout",
        "Components",
        "Form",
        "Icons"
      ]
    },
    storyCategory: {
      open: false
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "primary",
    values: [
      {
        name: "primary",
        value: DefaultTheme.colors["gray-800"]
      },
      {
        name: "light",
        value: DefaultTheme.colors["gray-100"]
      }
    ]
  },
  layout: "fullscreen"
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
