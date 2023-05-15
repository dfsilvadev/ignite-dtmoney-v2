import styled, { DefaultTheme, css } from "styled-components";

import { InputComponentProps } from "./types";

const variant = {
  withError: (theme: DefaultTheme) => css`
    outline: 0;
    box-shadow: 0 0 0 2px ${theme.colors["red-500"]};

    &:hover,
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors["red-500"]};
    }
  `
};

export const InputComponent = styled.div<InputComponentProps>`
  ${({ theme, error }) => css`
    flex: 1;

    input {
      width: 100%;
      border-radius: ${theme.border.radius};
      border: 0;
      background: ${theme.colors["gray-900"]};
      color: ${theme.colors["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${theme.colors["gray-500"]};
      }

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${theme.colors["green-500"]};
      }

      ${error && variant.withError(theme)}
    }
  `}
`;
