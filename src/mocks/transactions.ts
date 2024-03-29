import { Transaction } from "@/screens/Transactions/types";

export const transactions = [
  {
    id: 1,
    description: "Desenvolvimento de site",
    type: "income",
    category: "Venda",
    price: 14000,
    createdAt: "2023-04-20T20:14:16.489Z"
  },
  {
    id: 2,
    description: "Hambúrguer",
    type: "outcome",
    category: "Alimentação",
    price: 50,
    createdAt: "2023-04-20T20:03:16.489Z"
  }
] as Transaction[];
