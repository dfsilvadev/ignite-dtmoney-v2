import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import SummaryCard from "@/components/SummaryCard";

import useSummary from "@/hooks/useSummary";

import formatter from "@/utils/common/formatter";

import * as S from "./styles";

const Summary = () => {
  const { summary, loading } = useSummary();

  return (
    <S.SummaryContainer>
      <SummaryCard
        title="Entradas"
        value={formatter({ type: "currency", value: summary.income })}
        icon={<ArrowCircleUp weight="bold" color="#00B37E" />}
        aria-label="income"
        isLoading={loading}
      />
      <SummaryCard
        title="Saídas"
        value={formatter({ type: "currency", value: summary.outcome })}
        icon={<ArrowCircleDown weight="bold" color="#F75A68" />}
        aria-label="outcome"
        isLoading={loading}
      />
      <SummaryCard
        title="Total"
        value={formatter({ type: "currency", value: summary.total })}
        variant="success"
        icon={<CurrencyDollar weight="bold" color="#fff" />}
        aria-label="total"
        isLoading={loading}
      />
    </S.SummaryContainer>
  );
};

export default Summary;
