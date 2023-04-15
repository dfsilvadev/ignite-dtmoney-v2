import { forwardRef, ForwardRefRenderFunction } from "react";

import * as S from "./styles";

import { TransactionTypeButtonProps } from "./transactionTypeButton";

const TransactionTypeButton: ForwardRefRenderFunction<
  S.StyleButtonProps,
  TransactionTypeButtonProps
> = ({ children, variant, icon, ...props }, ref) => {
  return (
    <S.Button variant={variant} ref={ref} {...props}>
      {!!icon && icon}
      {!!children && children}
    </S.Button>
  );
};

export default forwardRef(TransactionTypeButton);
