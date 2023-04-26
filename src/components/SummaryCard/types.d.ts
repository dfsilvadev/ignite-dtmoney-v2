import { ReactNode } from "react";

export type SummaryCardProps = {
  title?: string;
  icon?: ReactNode;
  value?: string;
  variant?: "default" | "success" | "danger";
  isLoading?: boolean;
};

export type CardStyleProps = Pick<SummaryCardProps, "variant">;
