import { Transaction } from "@/screens/Transactions/types";

export type PriceHighlightProps = {
  variant: "income" | "outcome";
};

export type TransactionsTableProps = {
  transactions: Transaction[];
  isLoading: boolean;
};
