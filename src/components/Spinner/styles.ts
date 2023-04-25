import styled from "styled-components";
import { css } from "styled-components";

export const Loader = styled.span`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: ${theme.colors["gray-700"]};
    box-shadow: -24px 0 ${theme.colors["gray-700"]},
      24px 0 ${theme.colors["gray-700"]};
    box-sizing: border-box;
    animation: shadowPulse 1.5s linear infinite;

    @keyframes shadowPulse {
      33% {
        background: ${theme.colors["gray-700"]};
        box-shadow: -24px 0 ${theme.colors["green-300"]},
          24px 0 ${theme.colors["gray-700"]};
      }
      66% {
        background: ${theme.colors["green-300"]};
        box-shadow: -24px 0 ${theme.colors["gray-700"]},
          24px 0 ${theme.colors["gray-700"]};
      }
      100% {
        background: ${theme.colors["gray-700"]};
        box-shadow: -24px 0 ${theme.colors["gray-700"]},
          24px 0 ${theme.colors["green-300"]};
      }
    }
  `}
`;
