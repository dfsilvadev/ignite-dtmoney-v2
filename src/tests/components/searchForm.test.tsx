import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import { SearchForm } from "../../components";

describe("SearchForm", () => {
  it("should render a input", () => {
    renderWithTheme(<SearchForm />);

    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should render a button", () => {
    renderWithTheme(<SearchForm />);

    expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument();
  });

  it("should change value of input when typed", () => {
    renderWithTheme(<SearchForm />);
    const input = screen.getByLabelText("search") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Alimentação" } });

    expect(input.value).toBe("Alimentação");
  });

  it("should call onSubmit function when button clicked", () => {
    const onSubmit = jest.fn();

    renderWithTheme(<SearchForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: "Buscar" }));
    expect(onSubmit).toHaveBeenCalled();
  });
});
