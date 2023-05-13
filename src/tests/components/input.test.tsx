import { ChangeEvent } from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import Input from "@/components/Input";

const props = {
  type: "search",
  placeholder: "Busque uma transação",
  "aria-label": "search"
};

describe("Input", () => {
  it("should render a input", () => {
    renderWithTheme(<Input {...props} />);

    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should change value of input when typed", () => {
    renderWithTheme(<Input {...props} />);
    const input = screen.getByLabelText("search") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Alimentação" } });

    expect(input.value).toBe("Alimentação");
  });

  it("should call handleChange function and update state when input is changed", () => {
    const setValue = jest.fn();

    const handleChangeMock = (event: ChangeEvent<HTMLInputElement>) => {
      const inputtedValue = event.target.value;
      setValue(inputtedValue);
    };

    const { container } = renderWithTheme(
      <Input {...props} onChange={handleChangeMock} />
    );

    const input = screen.getByLabelText("search") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Alimentação" } });
    expect(setValue).toHaveBeenCalledWith("Alimentação");

    expect(container.querySelector("input")?.value).toBe("Alimentação");
  });

  it("should render with red border if error is true", () => {
    renderWithTheme(
      <Input
        type="text"
        placeholder="Descrição"
        aria-label="description"
        name="description"
        error={true}
      />
    );

    expect(screen.getByLabelText("description")).toHaveStyle({
      outline: 0,
      "box-shadow": "0 0 0 2px #AB222E"
    });
  });
});
