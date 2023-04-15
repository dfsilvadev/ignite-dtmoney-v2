import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Summary } from "@/components";

describe("Summary", () => {
  it("renders the three Summary component", () => {
    renderWithTheme(<Summary />);

    expect(
      screen.queryAllByRole("card", { name: "Summary Card" })
    ).toHaveLength(3);
  });

  it("renders Entradas SummaryCard component with correct title and value", () => {
    renderWithTheme(<Summary />);

    expect(screen.getByText("Entradas")).toBeInTheDocument();
    expect(screen.getByText("R$ 17.400,00")).toBeInTheDocument();
  });

  it("renders Saídas SummaryCard component with correct title and value", () => {
    renderWithTheme(<Summary />);

    expect(screen.getByText("Saídas")).toBeInTheDocument();
    expect(screen.getByText("R$ 1.259,00")).toBeInTheDocument();
  });

  it("renders Total SummaryCard component with correct title, value, and variant", () => {
    renderWithTheme(<Summary />);

    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("R$ 16.141,00")).toBeInTheDocument();
  });
});
