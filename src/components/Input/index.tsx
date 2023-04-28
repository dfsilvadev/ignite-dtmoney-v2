import { ForwardRefRenderFunction, forwardRef } from "react";

import * as S from "./styles";

import { InputProps } from "./types";

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props },
  ref
) => {
  return (
    <S.InputComponent>
      <input {...props} ref={ref} />
    </S.InputComponent>
  );
};

export default forwardRef(Input);
