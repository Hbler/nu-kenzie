import { v4 as uuidv4 } from "uuid";
import { FaTimes } from "react-icons/fa";

import PinkButton from "../../../Global/PinkButton";
import "./style.css";

export default function Form({
  setToShow,
  setter,
  original,
  visibility,
  windowWidth,
}) {
  const styles = {
    formContainer: {
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: "#e9ecef50",
      backdropFilter: "blur(5px)",
      position: "absolute",
    },
    form: {
      width: windowWidth > 425 ? "70%" : "90%",
      height: windowWidth > 425 ? "fit-content" : "70%",
      padding: "2%",

      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",

      borderRadius: "5px",
      border: "1px solid #e9ecef",
      position: "absolute",
      backgroundColor: "#fff",
    },
    closeBtn: {
      top: "3%",
      right: windowWidth > 425 ? "2%" : "5%",
      color: "#fd377e",
      position: "absolute",
      cursor: "pointer",
    },
  };

  const updateTransactions = (e) => {
    const formData = [...e.currentTarget.parentElement];
    const transaction = {};

    formData.forEach((input) => {
      if (input.name !== "") transaction[input.name] = input.value;
      if (input.name !== "type") input.value = "";
    });

    if (transaction.type === "saída") transaction.value *= -1;
    else transaction.value *= 1;

    transaction.id = uuidv4();

    setter([...original, transaction]);
    setToShow([...original, transaction]);
    visibility(false);
  };

  const closeModal = () => {
    visibility(false);
  };

  return (
    <section style={styles.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={styles.form}
        className="form-modal"
      >
        <FaTimes style={styles.closeBtn} onClick={closeModal} />
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            name="description"
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <small>Ex. Compra de roupas</small>
        </div>
        <div>
          <label htmlFor="value">Valor</label>
          <input type="number" name="value" placeholder="1" min={1} />
          <p>R$</p>
        </div>
        <div>
          <label htmlFor="type">Tipo de valor</label>
          <select name="type">
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
        <div onClick={updateTransactions}>
          <PinkButton str={"Inserir valor"} />
        </div>
      </form>
    </section>
  );
}
