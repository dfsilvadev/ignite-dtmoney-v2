import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: -5rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 1rem;
  `}
`;
