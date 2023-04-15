import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type TransactionTypeButtonProps = {
  children: ReactNode;
  variant: "income" | "outcome";
  icon?: ReactNode;
  as?: ElementType;
} & ButtonTypes;
