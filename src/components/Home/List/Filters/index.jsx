import { useState } from "react";

import { EventButton } from "../../../Global/AppBtns";
import "./style.css";

export default function Filters({ transactions, setToShow }) {
  const [active, setActive] = useState([true, false, false]);

  const changeActive = (e) => {
    const clicked = e.target.innerText.toLowerCase();

    switch (clicked) {
      case "entradas":
        setActive([false, true, false]);
        break;
      case "despesas":
        setActive([false, false, true]);
        break;
      default:
        setActive([true, false, false]);
        break;
    }
  };

  const filterTransactions = (e) => {
    const clicked = e.target.innerText.toLowerCase();

    switch (clicked) {
      case "entradas":
        const filteredIn = transactions.filter((obj) => obj.type === "entrada");
        setToShow(filteredIn);
        break;
      case "despesas":
        const filteredOut = transactions.filter((obj) => obj.type === "saída");
        setToShow(filteredOut);
        break;
      default:
        setToShow(transactions);
        break;
    }
  };

  return (
    <ul className="home__filters">
      <li>
        <EventButton
          onClick={(e) => {
            changeActive(e);
            filterTransactions(e);
          }}
          btnColor={"gray-pink"}
          btnSize={"small"}
          active={active[0]}
        >
          Todas
        </EventButton>
      </li>
      <li>
        <EventButton
          onClick={(e) => {
            changeActive(e);
            filterTransactions(e);
          }}
          btnColor={"gray-pink"}
          btnSize={"small"}
          active={active[1]}
        >
          Entradas
        </EventButton>
      </li>
      <li>
        <EventButton
          onClick={(e) => {
            changeActive(e);
            filterTransactions(e);
          }}
          btnColor={"gray-pink"}
          btnSize={"small"}
          active={active[2]}
        >
          Despesas
        </EventButton>
      </li>
    </ul>
  );
}
