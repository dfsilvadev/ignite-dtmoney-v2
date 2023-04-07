import styled, { DefaultTheme, css } from "styled-components";

import { PriceHighlightProps } from "./transactionsTable";

export const TableContainer = styled.main`
  margin-top: 4rem;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
      padding: 1.25rem 2rem;
      background-color: ${theme.colors["gray-700"]};

      &:first-child {
        width: 45%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

const priceHighlightVariant = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors["green-300"]};
  `,
  outcome: (theme: DefaultTheme) => css`
    color: ${theme.colors["red-300"]};
  `
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    ${!!variant && priceHighlightVariant[variant](theme)}
  `}
`;
