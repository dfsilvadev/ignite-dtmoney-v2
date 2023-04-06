import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import SummaryCard from "../../components/SummaryCard";
import { ArrowCircleUp } from "phosphor-react";

describe("SummaryCard", () => {
  it("should render a title when passed", () => {
    renderWithTheme(<SummaryCard title="Entradas" />);

    expect(
      screen.getByRole("heading", { name: /entradas/i })
    ).toBeInTheDocument();
  });

  it("should render an icon when passed", () => {
    renderWithTheme(
      <SummaryCard
        title="Entradas"
        icon={
          <ArrowCircleUp weight="bold" color="#00B37E" data-testid="icon" />
        }
      />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toHaveStyle({
      color: "rgb(0, 179, 126);",
      width: "1rem;",
      height: "1rem;"
    });
  });

  it("should render a value when passed", () => {
    renderWithTheme(
      <SummaryCard
        title="Entradas"
        value="R$ 1.259,00"
        icon={
          <ArrowCircleUp
            weight="bold"
            size={32}
            color="#00B37E"
            data-testid="icon"
          />
        }
      />
    );

    expect(screen.getByText("R$ 1.259,00")).toBeInTheDocument();
  });

  it("should render R$0.00 if you don't pass any value", () => {
    renderWithTheme(
      <SummaryCard
        title="Entradas"
        icon={
          <ArrowCircleUp
            weight="bold"
            size={32}
            color="#00B37E"
            data-testid="icon"
          />
        }
      />
    );

    expect(screen.getByText("R$ 0,00")).toBeInTheDocument();
  });

  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <SummaryCard
        title="Entradas"
        value="R$ 1.259,00"
        icon={
          <ArrowCircleUp
            weight="bold"
            size={32}
            color="#00B37E"
            data-testid="icon"
          />
        }
      />
    );

    expect(container).toMatchSnapshot();
  });
});
