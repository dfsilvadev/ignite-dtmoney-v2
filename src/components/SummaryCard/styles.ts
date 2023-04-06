import styled, { DefaultTheme, css } from "styled-components";

import { CardStyleProps } from "./summaryCard";

const cardVariant = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors["gray-600"]};
  `,
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors["green-700"]};
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme.colors["red-500"]};
  `
};

export const Card = styled.div<CardStyleProps>`
  ${({ theme, variant }) => css`
    border-radius: ${theme.border.radius};
    padding: 1.5rem;

    ${!!variant && cardVariant[variant](theme)}
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors["gray-300"]};

    svg {
      font-size: 32px;
    }
  `}
`;

export const Text = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
`;
