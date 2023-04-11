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

  it("should call onSubmit function when button clicked", () => {
    const onSubmit = jest.fn();

    renderWithTheme(<SearchForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: "Buscar" }));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("should call onSubmit when the form is submitted", () => {
    const handleSubmit = jest.fn();
    renderWithTheme(<SearchForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText("search"), {
      target: { value: "Teste" }
    });
    fireEvent.click(screen.getByRole("button", { name: "Buscar" }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
