import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHeighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHeighLight variant="income">R$ 12.000,00</PriceHeighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Amburguer</td>
              <td>
                <PriceHeighLight variant="outcome">R$ 50,00</PriceHeighLight>
              </td>
              <td>FastFood</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Consultoria</td>
              <td>
                <PriceHeighLight variant="income">R$ 1.250,00</PriceHeighLight>
              </td>
              <td>Trabalho</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Parcela da faculdade</td>
              <td>
                <PriceHeighLight variant="outcome">R$ 450,00</PriceHeighLight>
              </td>
              <td>Educação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
