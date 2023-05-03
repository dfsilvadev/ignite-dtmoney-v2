import { ReactNode, createContext, useEffect, useState } from "react";
import qs from "qs";

import axiosInstance from "@/services/common/axios-instance";

import { Transaction } from "@/screens/Transactions/types";
import { AxiosRequestConfig } from "axios";

type TransactionsContextType = {
  transactions: Transaction[];
  loading: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchTransactions(query?: string) {
    const url = "transactions";

    try {
      setLoading(true);

      let options = {} as AxiosRequestConfig;

      if (query) {
        options = {
          params: {
            _sort: "createdAt",
            _order: "desc",
            q: query
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, { encode: true });
          }
        };
      }

      const response = await axiosInstance.get<Transaction[]>(url, options);
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
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ fetchTransactions, loading, transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
