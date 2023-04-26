import useTransactions from "./useTransactions";

const useSummary = () => {
  const { loading, transactions } = useTransactions();

  const summary =
    transactions &&
    transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0
      }
    );

  return { summary, loading };
};

export default useSummary;
