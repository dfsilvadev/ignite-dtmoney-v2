import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { SearchForm } from "@/components";

describe("SearchForm", () => {
  it("should render a input", () => {
    renderWithTheme(<SearchForm />);

    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should render a button", () => {
    renderWithTheme(<SearchForm />);

    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });

  it("should test disabling button while searching", async () => {
    const { getByRole } = renderWithTheme(<SearchForm />);
    const searchButton = getByRole("button", { name: "Buscar" });

    fireEvent.click(searchButton);

    await waitFor(() => expect(searchButton).toBeDisabled());
  });
});
