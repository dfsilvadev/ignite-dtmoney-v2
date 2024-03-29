import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Dialog from "@radix-ui/react-dialog";
import { renderWithTheme } from "@/utils/tests";

import { Button, NewTransactionModal } from "@/components";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

describe("NewTransactionModal", () => {
  beforeEach(() => {
    const onCloseChange = jest.fn();

    renderWithTheme(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button type="button" size="small">
            Modal
          </Button>
        </Dialog.Trigger>

        <NewTransactionModal onCloseChange={onCloseChange} />
      </Dialog.Root>
    );

    fireEvent.click(screen.getByRole("button", { name: "Modal" }));
  });
  it("should open the modal when clicked on the button", () => {
    const overlay = screen.getByLabelText("overlay");
    const modal = screen.getByRole("dialog");

    expect(overlay).toBeVisible();
    expect(overlay).toHaveAttribute("data-state", "open");
    expect(overlay).toHaveAttribute("aria-hidden", "true");

    expect(modal).toBeVisible();
    expect(modal).toHaveAttribute("data-state", "open");
  });

  it("should be visible after click", () => {
    expect(screen.getByRole("dialog")).toBeVisible();
  });

  it("should render the heading", () => {
    expect(
      screen.getByRole("heading", { name: "Nova Transação" })
    ).toBeInTheDocument();
  });

  it("should render the Descrição, Preço and Categoria inputs", () => {
    const description = screen.getByPlaceholderText("Descrição");
    const price = screen.getByPlaceholderText("Preço");
    const category = screen.getByPlaceholderText("Categoria");

    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute("type", "text");

    expect(price).toBeInTheDocument();
    expect(price).toHaveAttribute("type", "number");

    expect(category).toBeInTheDocument();
    expect(category).toHaveAttribute("type", "text");
  });

  it("should render the register button", () => {
    expect(
      screen.getByRole("button", { name: "Cadastrar" })
    ).toBeInTheDocument();
  });

  it("should render the close button of the modal", () => {
    expect(
      screen.getByRole("button", { name: "close button" })
    ).toBeInTheDocument();
  });

  it("should close modal", async () => {
    userEvent.click(screen.getByRole("button", { name: "close button" }));

    await waitFor(() =>
      expect(screen.queryByLabelText("overlay")).not.toBeInTheDocument()
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

  it("should submit valid form successfully", async () => {
    const descriptionInput = screen.getByPlaceholderText("Descrição");
    const priceInput = screen.getByPlaceholderText("Preço");
    const categoryInput = screen.getByPlaceholderText("Categoria");
    const submitButton = screen.getByRole("button", { name: "Cadastrar" });

    userEvent.type(descriptionInput, "Test Description");
    userEvent.type(priceInput, "10");
    userEvent.type(categoryInput, "Test Category");

    userEvent.click(submitButton);

    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });

  it("should zod schema validation", async () => {
    const descriptionInput = screen.getByPlaceholderText("Descrição");
    const priceInput = screen.getByPlaceholderText("Preço");
    const categoryInput = screen.getByPlaceholderText("Categoria");
    const submitButton = screen.getByRole("button", { name: "Cadastrar" });

    userEvent.type(descriptionInput, "Test Description");
    userEvent.type(priceInput, "10");
    userEvent.type(categoryInput, "Test Category");

    userEvent.click(submitButton);

    await waitFor(() => expect(submitButton).not.toBeDisabled());
  });
});
