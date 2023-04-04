import "styled-components";

import { DefaultTheme } from "../styles";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
