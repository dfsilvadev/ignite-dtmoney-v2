import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
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
    }
  `}
`;
