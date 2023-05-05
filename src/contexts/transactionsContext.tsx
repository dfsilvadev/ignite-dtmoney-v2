import { ReactNode, createContext, useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import qs from "qs";

import axiosInstance from "@/services/common/axios-instance";

import { Transaction } from "@/screens/Transactions/types";

type CreateTransactionInput = {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
};

type TransactionsContextType = {
  transactions: Transaction[];
  loading: boolean;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
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

  async function createTransaction(data: CreateTransactionInput) {
    try {
      const { description, price, type, category } = data;

      const response = await axiosInstance.post<Transaction>("transactions", {
        description,
        price,
        type,
        category,
        createdAt: new Date()
      });

      setTransactions((currentState) => [response.data, ...currentState]);
    } catch {
      throw new Error("Erro ao cadastrar nova transação");
    }
  }

  return (
    <TransactionsContext.Provider
      value={{ createTransaction, fetchTransactions, loading, transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
