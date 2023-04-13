import { X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import Button from "../Button";
import Input from "../Input";

import * as S from "./styles";

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
          <Input type="number" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <Button type="submit" fullWidth>
            Cadastrar
          </Button>
        </S.Form>
      </S.Content>
    </Dialog.Portal>
  );
};

export default NewTransactionModal;
