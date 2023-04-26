import formatter from "@/utils/common/formatter";
import SearchForm from "../SearchForm";
import Spinner from "../Spinner";

import * as S from "./styles";

import { TransactionsTableProps } from "./types";

const TransactionsTable = ({
  transactions,
  isLoading
}: TransactionsTableProps) => {
  return (
    <S.TableContainer>
      <SearchForm />

      {!isLoading ? (
        <S.Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && " - "}
                    {formatter({ type: "currency", value: transaction.price })}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  <small>
                    {formatter({ type: "date", value: transaction.createdAt })}
                  </small>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <Spinner isHidden={isLoading} />
      )}
    </S.TableContainer>
  );
};

export default TransactionsTable;
