import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { TransactionsTable } from "@/components";

describe("TransactionsTable", () => {
  it("renders transactions table with correct data", () => {
    renderWithTheme(<TransactionsTable />);

    expect(screen.getByText("Desenvolvimento de site")).toBeInTheDocument();
    expect(screen.getByText("R$ 12.000,00")).toBeInTheDocument();
    expect(screen.getByText("Venda")).toBeInTheDocument();
    expect(screen.getByText("07/03/2023")).toBeInTheDocument();

    expect(screen.getByText("Hamburguer")).toBeInTheDocument();
    expect(screen.getByText("- R$ 59,00")).toBeInTheDocument();
    expect(screen.getByText("Alimentação")).toBeInTheDocument();
    expect(screen.getByText("10/04/2022")).toBeInTheDocument();
  });
});
