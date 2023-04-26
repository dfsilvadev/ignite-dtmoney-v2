import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { TransactionsTable } from "@/components";

import useTransactions from "@/hooks/useTransactions";

jest.mock("@/hooks/useTransactions");

const mockUseTransactions = useTransactions as jest.MockedFunction<
  typeof useTransactions
>;

describe("TransactionsTable", () => {
  it("renders transactions table with correct data", () => {
    mockUseTransactions.mockReturnValue({
      transactions: [
        {
          id: 1,
          description: "Desenvolvimento de site",
          type: "income",
          category: "Venda",
          price: 14000,
          createdAt: "2023-04-20T20:14:16.489Z"
        }
      ],
      loading: false
    });

    const transactions = mockUseTransactions().transactions;

    renderWithTheme(
      <TransactionsTable transactions={transactions} isLoading={false} />
    );

    expect(screen.getByText("Desenvolvimento de site")).toBeInTheDocument();
    expect(screen.getByText("R$ 14.000,00")).toBeInTheDocument();
    expect(screen.getByText("Venda")).toBeInTheDocument();
    expect(screen.getByText("20/04/2023 20:14:16")).toBeInTheDocument();
  });

  it("render spinner when isLoading is false", () => {
    mockUseTransactions.mockReturnValue({
      transactions: [
        {
          id: 1,
          description: "Desenvolvimento de site",
          type: "income",
          category: "Venda",
          price: 14000,
          createdAt: "2023-04-20T20:14:16.489Z"
        }
      ],
      loading: false
    });

    const transactions = mockUseTransactions().transactions;

    renderWithTheme(
      <TransactionsTable transactions={transactions} isLoading={true} />
    );

    const spinner = screen.getByLabelText("loader");

    expect(spinner).toBeVisible();
  });
});
