import { ReactNode, createContext, useEffect, useState } from "react";

import axiosInstance from "@/services/common/axios-instance";

import { Transaction } from "@/screens/Transactions/types";

type TransactionsContextType = {
  transactions: Transaction[];
  loading: boolean;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadTransactions() {
    try {
      setLoading(true);
      const response = await axiosInstance.get<Transaction[]>("transactions");
      const { data } = response;

      setTransactions(data);
    } catch {
      setLoading(false);
      throw new Error("Erro ao carregar as transações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, loading }}>
      {children}
    </TransactionsContext.Provider>
  );
}
