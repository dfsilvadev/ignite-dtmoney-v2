import * as S from "./styles";

import { SpinnerProps } from "./type";

const Spinner = ({ isHidden }: SpinnerProps) => {
  return <S.Loader role="loader" aria-label="loader" aria-hidden={isHidden} />;
};

export default Spinner;
