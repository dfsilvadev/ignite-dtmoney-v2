import * as S from "./styles";

import Button from "../Button";

import logoSvg from "../../assets/images/svg/logo.svg";
import { Plus } from "phosphor-react";

const Header = () => {
  return (
    <S.HeaderContainer>
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
    </S.HeaderContainer>
  );
};

export default Header;
