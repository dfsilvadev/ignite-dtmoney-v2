import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { SearchForm } from "@/components";

describe("SearchForm", () => {
  it("should render a input", () => {
    const handleSearchTransactions = jest.fn();
    renderWithTheme(
      <SearchForm handleSearchTransactions={handleSearchTransactions} />
    );

    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should render a button", () => {
    const handleSearchTransactions = jest.fn();
    renderWithTheme(
      <SearchForm handleSearchTransactions={handleSearchTransactions} />
    );

    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });

  it("should test disabling button while searching", async () => {
    const handleSearchTransactions = jest.fn();
    renderWithTheme(
      <SearchForm handleSearchTransactions={handleSearchTransactions} />
    );

    const searchButton = screen.getByRole("button", { name: "Buscar" });

    fireEvent.click(searchButton);

    await waitFor(() => expect(searchButton).toBeDisabled());
  });
});
