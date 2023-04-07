import * as S from "./styles";
import { Plus } from "phosphor-react";

import Button from "../Button";
import Container from "../Container";

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

          <Button type="button" size="small" icon={<Plus weight="bold" />}>
            Nova Transação
          </Button>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
