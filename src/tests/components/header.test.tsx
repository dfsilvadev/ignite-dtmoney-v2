import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Header from "../../components/Header";

describe("Header", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(<Header />);

    expect(
      screen.getByRole("img", { name: /logotipo dt money/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("should render the button to open the modal with property aria-expanded false", () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("the aria-expanded property must be true and the data-state open when clicking on the button to open the modal", () => {
    renderWithTheme(<Header />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("data-state", "open");
  });

  it("should open the modal on button click", () => {
    renderWithTheme(<Header />);

    fireEvent.click(screen.getByRole("button"));

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

    fireEvent.click(screen.getByRole("button"));

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
