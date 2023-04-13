import { Plus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import Button from "../Button";
import Container from "../Container";
import NewTransactionModal from "../NewTransactionModal";

import * as S from "./styles";

import logoSvg from "../../assets/images/svg/logo.svg";

const Header = () => {
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

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button type="button" size="small" icon={<Plus weight="bold" />}>
                Nova Transação
              </Button>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
