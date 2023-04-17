import { ReactNode } from "react";

export type SummaryCardProps = {
  title?: string;
  icon?: ReactNode;
  value?: string;
  variant?: "default" | "success" | "danger";
};

export type CardStyleProps = Pick<SummaryCardProps, "variant">;
