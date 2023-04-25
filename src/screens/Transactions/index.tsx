import { Summary, TransactionsTable } from "@/components";

import { BaseTemplate } from "@/templates";

import useTransactions from "@/hooks/useTransactions";

const Transactions = () => {
  const { transactions, loading } = useTransactions();

  return (
    <BaseTemplate>
      <Summary />
      <TransactionsTable transactions={transactions} isLoading={loading} />
    </BaseTemplate>
  );
};

export default Transactions;
