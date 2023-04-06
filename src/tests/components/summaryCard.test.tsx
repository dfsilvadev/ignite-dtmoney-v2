import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import SummaryCard from "../../components/SummaryCard";
import { ArrowCircleUp } from "phosphor-react";

describe("SummaryCard", () => {
  it("deve renderizar um title quando passado", () => {
    renderWithTheme(<SummaryCard title="Entradas" />);

    expect(
      screen.getByRole("heading", { name: /entradas/i })
    ).toBeInTheDocument();
  });

  it("deve renderizar um icon quando passado", () => {
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

  it("deve renderizar um valor quando passado", () => {
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

  it("deve renderizar R$ 0,00 se não passar nenhum valor", () => {
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

  it("deve renderizar corretamente", () => {
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
