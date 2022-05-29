import React from "react";
import { FaTrash } from "react-icons/fa";

import { AppCard } from "../../../Global/GlobalComponents";
import "./style.css";

export default function Card({
  transaction,
  transactions,
  setTransactions,
  setToShow,
}) {
  const removeTransaction = (e) => {
    console.log(transactions);
    const id = e.currentTarget.id;
    const removed = transactions.filter((obj) => obj.id !== id);

    setTransactions(removed);
    setToShow(removed);
  };

  return (
    <div className="home__card">
      <AppCard type={transaction.type}>
        <h3>{transaction.description}</h3>
        <p>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.value)}
        </p>
        <div id={transaction.id} onClick={removeTransaction}>
          <FaTrash className="remove" />
        </div>
        <small>
          {transaction.type.slice(0, 1).toUpperCase() +
            transaction.type.slice(1)}
        </small>
      </AppCard>
    </div>
  );
}
