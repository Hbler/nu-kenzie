import { useState } from "react";
import GrayPinkButton from "../../../../Global/GreyPinkButton";

export default function Filters({ original, setter, windowWidth }) {
  const [active, setActive] = useState([true, false, false]);

  const styles = {
    ul: {
      width: windowWidth > 425 ? "60%" : "100%",

      display: "flex",
      justifyContent: "space-between",
    },
    li: {
      width: windowWidth > 425 ? "30%" : "25%",
      height: "6vh",
    },
  };

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
        const filteredIn = original.filter((obj) => obj.type === "entrada");
        setter(filteredIn);
        break;
      case "despesas":
        const filteredOut = original.filter((obj) => obj.type === "saída");
        setter(filteredOut);
        break;
      default:
        setter(original);
        break;
    }
  };

  return (
    <ul style={styles.ul}>
      <li
        style={styles.li}
        onClick={(e) => {
          changeActive(e);
          filterTransactions(e);
        }}
      >
        <GrayPinkButton str={"Todos"} bool={active[0]} />
      </li>
      <li
        style={styles.li}
        onClick={(e) => {
          changeActive(e);
          filterTransactions(e);
        }}
      >
        <GrayPinkButton str={"Entradas"} bool={active[1]} />
      </li>
      <li
        style={styles.li}
        onClick={(e) => {
          changeActive(e);
          filterTransactions(e);
        }}
      >
        <GrayPinkButton str={"Despesas"} bool={active[2]} />
      </li>
    </ul>
  );
}
