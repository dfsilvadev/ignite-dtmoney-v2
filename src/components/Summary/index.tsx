import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import * as S from "./styles";

import SummaryCard from "@/components/SummaryCard";

const Summary = () => {
  return (
    <S.SummaryContainer>
      <SummaryCard
        title="Entradas"
        value="R$ 17.400,00"
        icon={<ArrowCircleUp weight="bold" color="#00B37E" />}
      />
      <SummaryCard
        title="Saídas"
        value="R$ 1.259,00"
        icon={<ArrowCircleDown weight="bold" color="#F75A68" />}
      />
      <SummaryCard
        title="Total"
        value="R$ 16.141,00"
        variant="success"
        icon={<CurrencyDollar weight="bold" color="#fff" />}
      />
    </S.SummaryContainer>
  );
};

export default Summary;
