import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Summary } from "@/components";

import { TransactionsProvider } from "@/contexts/transactionsContext";
describe("Summary", () => {
  it("renders the three Summary component", () => {
    renderWithTheme(<Summary />, { wrapper: TransactionsProvider });

    expect(screen.queryAllByRole("sumarycard")).toHaveLength(3);

    expect(screen.getByLabelText("income")).toBeInTheDocument();
    expect(screen.getByLabelText("outcome")).toBeInTheDocument();
    expect(screen.getByLabelText("total")).toBeInTheDocument();
  });
});
