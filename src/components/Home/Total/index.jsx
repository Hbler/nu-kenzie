import { AppBox } from "../../Global/GlobalComponents";
import BarChart from "./BarChart";
import "./style.css";

export default function Total({ transactions }) {
  const data1 = transactions.reduce((data, obj) => {
    return obj.type === "entrada" ? (data += obj.value) : data;
  }, 0);
  const data2 = transactions.reduce((data, obj) => {
    return obj.type === "saída" ? (data += obj.value * -1) : data;
  }, 0);

  const transactionData = {
    series: [
      {
        name: "entradas",
        data: [data1],
      },
      {
        name: "despesas",
        data: [data2],
      },
    ],
  };

  return (
    <section className="home__total">
      <AppBox>
        <div className="total__container">
          <h2>Valor total:</h2>
          <h2>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(
              transactions.reduce((total, obj) => (total += obj.value), 0)
            )}
          </h2>
          <div className="total__bar">
            <BarChart transactionData={transactionData} />
          </div>
          <small>O valor se refere ao saldo</small>
        </div>
      </AppBox>
    </section>
  );
}
