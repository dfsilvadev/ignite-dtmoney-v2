import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";
import { ShoppingCart } from "phosphor-react";

import { Button } from "../../components";

describe("<Button />", () => {
  it("should render the medium button by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3.125rem",
      padding: "1rem",
      "font-size": "1rem"
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small button when size small is passed", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "2.5rem",
      "font-size": "0.875rem"
    });
  });

  it("should render the large button when size large is passed", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3.3125rem",
      padding: "1rem 1.5rem",
      "font-size": "1rem"
    });
  });

  it("should render the full width button when fullWidth option is passed", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render an icon", () => {
    renderWithTheme(
      <Button
        icon={<ShoppingCart size={20} weight="bold" data-testid="icon" />}
      >
        Buy now
      </Button>
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render a ghost button", () => {
    renderWithTheme(
      <Button
        icon={<ShoppingCart size={20} weight="bold" data-testid="icon" />}
        ghost
      >
        Buy now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      background: "none",
      color: "#00875F",
      border: "2px solid #00875F"
    });

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "background",
      "#015F43",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render a minimal", () => {
    renderWithTheme(
      <Button
        icon={<ShoppingCart size={20} weight="bold" data-testid="icon" />}
        minimal
      >
        Buy now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      background: "none",
      color: "#00875F"
    });

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "color",
      "#015F43",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render a disabled Button", () => {
    renderWithTheme(<Button disabled>Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "cursor",
      "not-allowed",
      {
        modifier: ":disabled"
      }
    );
  });

  it("should render button as a link", () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });
});
