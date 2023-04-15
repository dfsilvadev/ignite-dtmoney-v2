import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import Button from "../Button";
import Input from "../Input";

import * as S from "./styles";
import TransactionTypeButton from "../TransactionTypeButton";

const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <S.Overlay aria-label="overlay" />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.Close aria-label="close button">
          <X size={24} />
        </S.Close>

        <S.Form>
          <Input type="text" placeholder="Descrição" required />
          <Input type="number" min="1" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={20} weight="bold" />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={20} weight="bold" />
              Saída
            </TransactionTypeButton>
          </S.TransactionType>

          <Button type="submit" fullWidth>
            Cadastrar
          </Button>
        </S.Form>
      </S.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
