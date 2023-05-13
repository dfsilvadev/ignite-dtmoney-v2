import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = {
  error?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputComponentProps = Pick<InputProps, "error">;
