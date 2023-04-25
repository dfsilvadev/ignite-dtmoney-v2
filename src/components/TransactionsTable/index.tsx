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
                    {transaction.price}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      ) : (
        <Spinner />
      )}
    </S.TableContainer>
  );
};

export default TransactionsTable;
