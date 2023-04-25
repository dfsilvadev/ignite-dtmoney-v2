import { useContext } from "react";

import { TransactionsContext } from "@/contexts/transactionsContext";

const useTransactions = () => useContext(TransactionsContext);

export default useTransactions;
