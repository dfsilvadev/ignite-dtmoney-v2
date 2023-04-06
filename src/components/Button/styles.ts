import styled, { css, DefaultTheme } from "styled-components";

import { ButtonProps } from "./button";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "minimal">;

const wrapperModifiers = {
  small: () => css`
    height: 2.5rem;
    font-size: 0.875rem;
  `,
  medium: () => css`
    height: 3.125rem;
    padding: 1rem;
    font-size: 1rem;
  `,
  large: () => css`
    height: 3.3125rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.5rem;
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors["green-500"]};

    &:hover {
      color: ${theme.colors["green-700"]};
      background: none;
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors["green-500"]};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: 1rem;

    &:hover {
      background: ${theme.colors["green-700"]};
    }

    ${!!size && wrapperModifiers[size]()}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon()}
    ${!!disabled && wrapperModifiers.disabled}
  `}
`;
