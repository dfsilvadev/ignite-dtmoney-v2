import { screen } from "@testing-library/react";
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
});
