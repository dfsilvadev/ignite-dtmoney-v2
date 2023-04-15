import { fireEvent, screen } from "@testing-library/react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { renderWithTheme } from "@/utils/tests";

import TransactionTypeButton from "@/components/TransactionTypeButton";

describe("TransactionTypeButton", () => {
  beforeEach(() => {
    renderWithTheme(
      <RadioGroup.Root>
        <TransactionTypeButton variant="income" value="income">
          Entrada
        </TransactionTypeButton>
        <TransactionTypeButton variant="outcome" value="outcome">
          Saída
        </TransactionTypeButton>
      </RadioGroup.Root>
    );
  });
  it("should render radio buttons unchecked", () => {
    const income = screen.getByRole("radio", { name: /entrada/i });
    const outcome = screen.getByRole("radio", { name: /saída/i });

    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(2);

    expect(income).toHaveAttribute("data-state", "unchecked");
    expect(income).toHaveAttribute("aria-checked", "false");

    expect(outcome).toHaveAttribute("data-state", "unchecked");
    expect(outcome).toHaveAttribute("aria-checked", "false");
  });

  it("should mark as checked when clicked", () => {
    const income = screen.getByRole("radio", { name: /entrada/i });
    const outcome = screen.getByRole("radio", { name: /saída/i });

    fireEvent.click(income);

    expect(income).toHaveAttribute("data-state", "checked");
    expect(income).toHaveAttribute("aria-checked", "true");

    expect(outcome).not.toHaveAttribute("data-state", "checked");
    expect(outcome).not.toHaveAttribute("aria-checked", "true");

    fireEvent.click(outcome);

    expect(outcome).toHaveAttribute("data-state", "checked");
    expect(outcome).toHaveAttribute("aria-checked", "true");

    expect(income).not.toHaveAttribute("data-state", "checked");
    expect(income).not.toHaveAttribute("aria-checked", "true");
  });
});
