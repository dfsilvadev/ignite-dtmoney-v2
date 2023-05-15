import { renderHook, waitFor } from "@testing-library/react";

import axiosInstance from "@/services/common/axios-instance";

import { TransactionsProvider } from "@/contexts/transactionsContext";

import { transactions } from "@/mocks/transactions";
import useTransactions from "@/hooks/useTransactions";

describe("Transactions Context", () => {
  it("should test transactions successfully", async () => {
    const axiosInstanceMock = jest
      .spyOn(axiosInstance, "get")
      .mockResolvedValueOnce({ data: transactions });

    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider
    });

    await waitFor(() => result.current.transactions.length > 0);

    expect(result.current.transactions).toEqual(transactions);
    expect(axiosInstanceMock).toHaveBeenCalledWith("transactions", {});
  });

  it("should test create transaction successfully", async () => {
    const mockTransaction = {
      id: 3,
      description: "Aluguel",
      type: "outcome",
      category: "Casa",
      price: 1200,
      createdAt: "2023-05-10T20:10:16.489Z"
    };

    const axiosInstanceMock = jest
      .spyOn(axiosInstance, "post")
      .mockResolvedValueOnce({ data: mockTransaction });

    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider
    });

    await waitFor(() =>
      result.current.createTransaction({
        description: "Aluguel",
        price: 1200,
        category: "Casa",
        type: "outcome"
      })
    );

    expect(result.current.transactions).toEqual([mockTransaction]);
    expect(axiosInstanceMock).toHaveBeenCalledWith("transactions", {
      description: "Aluguel",
      type: "outcome",
      category: "Casa",
      price: 1200,
      createdAt: expect.any(Date)
    });
  });
});
