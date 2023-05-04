import { Plus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import NewTransactionModal from "@/components/NewTransactionModal";

import * as S from "./styles";

import logoSvg from "@/assets/images/svg/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleCloseModal() {
    setOpen(false);
  }

  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <img
            src={logoSvg}
            alt="Logotipo DT Money"
            title="Logotipo DT Money"
            aria-label="Logotipo DT Money"
          />

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                type="button"
                size="small"
                icon={<Plus weight="bold" />}
                aria-label="new transaction"
              >
                Nova Transação
              </Button>
            </Dialog.Trigger>

            <NewTransactionModal onCloseChange={handleCloseModal} />
          </Dialog.Root>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
