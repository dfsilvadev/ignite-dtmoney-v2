import * as S from "./styles";

import { InputProps } from "./input";

const Input = ({ ...props }: InputProps) => {
  return (
    <S.InputComponent>
      <input {...props} />
    </S.InputComponent>
  );
};

export default Input;
