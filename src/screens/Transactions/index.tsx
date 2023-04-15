import { Summary, TransactionsTable } from "@/components";

import { BaseTemplate } from "@/templates";

const Transactions = () => {
  return (
    <BaseTemplate>
      <Summary />
      <TransactionsTable />
    </BaseTemplate>
  );
};

export default Transactions;
