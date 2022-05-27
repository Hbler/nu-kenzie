import { FaTrash } from "react-icons/fa";
import "./style.css";

export default function Card({ setToShow, setTransactions, original, obj }) {
  const style = {
    width: "100%",
    height: "15vh",
    marginBottom: "5%",
    padding: "2% 3%",

    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",

    borderRadius: "5px",
    borderLeft:
      obj.type === "entrada" ? "5px solid #03b898" : "5px solid #e9ecef",
    backgroundColor: "#f8f9fa",
  };

  const removeTransaction = (e) => {
    const id = e.currentTarget.id;
    const removed = original.filter((obj) => obj.id !== id);

    setTransactions(removed);
    setToShow(removed);
  };

  return (
    <li style={style} className="card">
      <h3>{obj.description}</h3>
      <p>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(obj.value)}
      </p>
      <div id={obj.id} onClick={removeTransaction}>
        <FaTrash className="remove" />
      </div>
      <small>{obj.type.slice(0, 1).toUpperCase() + obj.type.slice(1)}</small>
    </li>
  );
}
