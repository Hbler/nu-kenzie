import React from "react";

import Filters from "./Filters";
import Card from "./Card";
import img from "../../../img/NoCard.svg";
import "./style.css";

export default function List({
  transactions,
  setTransactions,
  toShow,
  setToShow,
}) {
  return (
    <section className="home__right">
      <div className="home__right--top">
        <h2>Resumo financeiro</h2>
        <Filters transactions={transactions} setToShow={setToShow} />
      </div>
      <ul className="home__list">
        {transactions.length === 0 && <img src={img} alt="" />}
        {toShow.map((transaction) => (
          <Card
            key={transaction.id}
            transaction={transaction}
            transactions={transactions}
            setTransactions={setTransactions}
            setToShow={setToShow}
          />
        ))}
      </ul>
    </section>
  );
}
