import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Transactions } from "@/screens";

import { TransactionsProvider } from "@/contexts/transactionsContext";

jest.mock("@/components/Summary", () => ({
  _esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Summary" />;
  }
}));

jest.mock("@/components/TransactionsTable", () => ({
  _esModule: true,
  default: function Mock() {
    return (
      <table>
        <thead>
          <tr>
            <th>Header I</th>
            <th>Header II</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data I</td>
            <td>Data II</td>
          </tr>
        </tbody>
      </table>
    );
  }
}));

it("should test transactions component renders without errors", () => {
  renderWithTheme(<Transactions />, { wrapper: TransactionsProvider });

  expect(screen.getByTestId("Mock Summary")).toBeInTheDocument();
  expect(screen.getByRole("table")).toBeInTheDocument();
});
