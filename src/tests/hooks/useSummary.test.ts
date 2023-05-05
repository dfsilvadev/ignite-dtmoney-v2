import useSummary from "@/hooks/useSummary";
import useTransactions from "@/hooks/useTransactions";

import { transactions } from "@/mocks/transactions";

jest.mock("@/hooks/useTransactions");

const mockUseTransactions = useTransactions as jest.MockedFunction<
  typeof useTransactions
>;

describe("useSummary", () => {
  it("test_summary_with_both_income_and_outcome_transactions", () => {
    mockUseTransactions.mockReturnValue({
      transactions,
      loading: false,
      fetchTransactions: jest.fn(),
      createTransaction: jest.fn()
    });

    const { summary, loading } = useSummary();

    expect(loading).toBe(false);
    expect(summary.income).toBe(14000);
    expect(summary.outcome).toBe(50);
    expect(summary.total).toBe(13950);
  });
});
