import * as S from "./styles";

const TransactionsTable = () => {
  return (
    <S.TableContainer>
      <S.Table>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <S.PriceHighlight variant="income">R$ 12.000,00</S.PriceHighlight>
            </td>
            <td>Venda</td>
            <td>07/03/2023</td>
          </tr>

          <tr>
            <td>Hamburguer</td>
            <td>
              <S.PriceHighlight variant="outcome">- R$ 59,00</S.PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default TransactionsTable;
