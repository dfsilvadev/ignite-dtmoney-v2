import { useContextSelector } from "use-context-selector";

import { TransactionsContext } from "@/contexts/transactionsContext";

const useTransactions = () =>
  useContextSelector(TransactionsContext, (ctx) => ({
    createTransaction: ctx.createTransaction,
    fetchTransactions: ctx.fetchTransactions,
    transactions: ctx.transactions,
    loading: ctx.loading
  }));

export default useTransactions;
