import styled, { css, DefaultTheme } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { StyleButtonProps } from "./types";

const buttonVariant = {
  income: (theme: DefaultTheme) => css`
    &[data-state="checked"] {
      color: ${theme.colors.white};
      background: ${theme.colors["green-500"]};
      svg {
        color: ${theme.colors["gray-300"]};
      }
    }

    svg {
      color: ${theme.colors["green-500"]};
    }

    &:hover {
      background: ${theme.colors["green-500"]};

      svg {
        color: ${theme.colors["gray-300"]};
      }
    }
  `,
  outcome: (theme: DefaultTheme) => css`
    &[data-state="checked"] {
      color: ${theme.colors.white};
      background: ${theme.colors["red-500"]};
      svg {
        color: ${theme.colors["gray-300"]};
      }
    }

    svg {
      color: ${theme.colors["red-500"]};
    }

    &:hover {
      background: ${theme.colors["red-500"]};

      svg {
        color: ${theme.colors["gray-300"]};
      }
    }
  `
};

export const Button = styled(RadioGroup.Item)<StyleButtonProps>`
  ${({ theme, variant }) => css`
    background: ${theme.colors["gray-700"]};
    padding: 1rem;
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.colors["gray-300"]};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    ${!!variant && buttonVariant[variant](theme)}
  `}
`;
