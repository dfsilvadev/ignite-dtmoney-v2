import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Summary } from "@/components";

import { TransactionsProvider } from "@/contexts/transactionsContext";

import useSummary from "@/hooks/useSummary";

jest.mock("@/hooks/useSummary");

const mockUseSummary = useSummary as jest.MockedFunction<typeof useSummary>;

describe("Summary", () => {
  it("renders the three Summary component", async () => {
    await waitFor(() => {
      mockUseSummary.mockReturnValue({
        summary: {
          income: 10,
          outcome: 10,
          total: 10
        },
        loading: false
      });

      renderWithTheme(<Summary />, { wrapper: TransactionsProvider });
      expect(screen.queryAllByRole("sumarycard")).toHaveLength(3);

      expect(screen.getByLabelText("income")).toBeInTheDocument();
      expect(screen.getByLabelText("outcome")).toBeInTheDocument();
      expect(screen.getByLabelText("total")).toBeInTheDocument();
    });
  });
});
