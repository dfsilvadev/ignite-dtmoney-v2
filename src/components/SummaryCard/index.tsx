import Spinner from "../Spinner";
import * as S from "./styles";

import { SummaryCardProps } from "./types";

const SummaryCard = ({
  title,
  icon,
  value = "R$ 0,00",
  variant = "default",
  isLoading,
  ...props
}: SummaryCardProps) => {
  return (
    <S.Card variant={variant} role="sumarycard" {...props}>
      <S.Header>
        <h4>{title}</h4>

        {!!icon && icon}
      </S.Header>

      {isLoading ? (
        <Spinner aria-hidden={isLoading} />
      ) : (
        <S.Text>{value}</S.Text>
      )}
    </S.Card>
  );
};

export default SummaryCard;
