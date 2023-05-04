import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import Header from "@/components/Header";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

describe("Header", () => {
  it("should render the heading", async () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByLabelText(/logotipo dt money/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/new transaction/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should render the button to open the modal with property aria-expanded false", () => {
    renderWithTheme(<Header />);

    expect(screen.getByLabelText(/new transaction/i)).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("the aria-expanded property must be true and the data-state open when clicking on the button to open the modal", () => {
    renderWithTheme(<Header />);

    const button = screen.getByLabelText(/new transaction/i);

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("data-state", "open");
  });

  it("should open the modal on button click", () => {
    renderWithTheme(<Header />);

    fireEvent.click(screen.getByLabelText(/new transaction/i));

    const overlay = screen.getByLabelText("overlay");
    const modal = screen.getByRole("dialog");

    expect(overlay).toBeVisible();
    expect(overlay).toHaveAttribute("data-state", "open");
    expect(overlay).toHaveAttribute("aria-hidden", "true");

    expect(modal).toBeVisible();
    expect(modal).toHaveAttribute("data-state", "open");
  });

  it("should close the modal on clicking the close button", () => {
    renderWithTheme(<Header />);

    fireEvent.click(screen.getByLabelText(/new transaction/i));

    const overlay = screen.getByLabelText("overlay");
    const modal = screen.getByRole("dialog");
    const close = screen.getByLabelText("close button");

    fireEvent.click(close);

    expect(overlay).not.toBeVisible();
    expect(overlay).toHaveAttribute("data-state", "closed");

    expect(modal).not.toBeVisible();
    expect(modal).toHaveAttribute("data-state", "closed");
  });
});
