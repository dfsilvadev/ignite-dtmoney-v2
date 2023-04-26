import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import SummaryCard from "@/components/SummaryCard";

import useTransactions from "@/hooks/useTransactions";

import formatter from "@/utils/common/formatter";

import * as S from "./styles";

const Summary = () => {
  const { transactions } = useTransactions();

  const summary =
    transactions &&
    transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0
      }
    );

  return (
    <S.SummaryContainer>
      <SummaryCard
        title="Entradas"
        value={formatter({ type: "currency", value: summary.income })}
        icon={<ArrowCircleUp weight="bold" color="#00B37E" />}
        aria-label="income"
      />
      <SummaryCard
        title="Saídas"
        value={formatter({ type: "currency", value: summary.outcome })}
        icon={<ArrowCircleDown weight="bold" color="#F75A68" />}
        aria-label="outcome"
      />
      <SummaryCard
        title="Total"
        value={formatter({ type: "currency", value: summary.total })}
        variant="success"
        icon={<CurrencyDollar weight="bold" color="#fff" />}
        aria-label="total"
      />
    </S.SummaryContainer>
  );
};

export default Summary;
