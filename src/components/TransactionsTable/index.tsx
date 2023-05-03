import { useEffect, useState } from "react";

import SearchForm, { SearchFormInputs } from "@components/SearchForm";
import Spinner from "@components/Spinner";

import formatter from "@/utils/common/formatter";

import * as S from "./styles";

import { TransactionsTableProps } from "./types";
import { Transaction } from "@/screens/Transactions/types";

const TransactionsTable = ({
  transactions,
  isLoading
}: TransactionsTableProps) => {
  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactionList(transactions);
  }, [transactions]);

  async function handleSearchTransactions(data: SearchFormInputs) {
    const filteredTransaction = transactions.filter((tx) => {
      const lowerCaseDescription = tx.description.toLowerCase();

      return lowerCaseDescription.includes(data.query.toLocaleLowerCase());
    });

    setTransactionList(filteredTransaction);
  }

  return (
    <S.TableContainer>
      <SearchForm handleSearchTransactions={handleSearchTransactions} />

      {!isLoading ? (
        <S.Table>
          <tbody>
            {transactionList.map((transaction) => (
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
