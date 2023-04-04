import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors["gray-900"]};
    padding: 2.5rem 0 7.5rem;
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
