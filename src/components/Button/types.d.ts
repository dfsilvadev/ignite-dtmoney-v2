import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from "react";

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  ghost?: boolean;
  icon?: ReactNode;
  as?: ElementType;
} & ButtonTypes;

export type WrapperStyleProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "minimal" | "ghost">;
