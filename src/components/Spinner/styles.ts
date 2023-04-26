import styled, { css } from "styled-components";

export const Wrapper = styled.span`
  width: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
`;

export const Loader = styled.span`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border: 3px solid ${theme.colors["gray-700"]};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
