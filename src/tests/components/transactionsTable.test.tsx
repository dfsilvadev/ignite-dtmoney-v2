import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { TransactionsTable } from "@/components";

import { transactions } from "@/mocks/transactions";
describe("TransactionsTable", () => {
  it("renders transactions table with correct data", () => {
    renderWithTheme(
      <TransactionsTable transactions={[transactions[0]]} isLoading={false} />
    );

    expect(screen.getAllByRole("row").length).toBe(1);

    expect(screen.getByText("Desenvolvimento de site")).toBeInTheDocument();
    expect(screen.getByText("R$ 14.000,00")).toBeInTheDocument();
    expect(screen.getByText("Venda")).toBeInTheDocument();
    expect(screen.getByText("20/04/2023 20:14:16")).toBeInTheDocument();
  });

  it("render spinner when isLoading is false", () => {
    renderWithTheme(
      <TransactionsTable transactions={[transactions[0]]} isLoading={true} />
    );

    const spinner = screen.getByLabelText("loader");

    expect(spinner).toBeVisible();
  });
});
