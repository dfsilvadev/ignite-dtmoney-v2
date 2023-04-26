import * as S from "./styles";

const Spinner = ({ ...props }) => {
  return (
    <S.Wrapper>
      <S.Loader role="loader" aria-label="loader" {...props} />
    </S.Wrapper>
  );
};

export default Spinner;
