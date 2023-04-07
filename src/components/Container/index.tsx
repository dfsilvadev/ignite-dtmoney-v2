import styled, { css } from "styled-components";

const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 1rem;
  `}
`;

export default Container;
