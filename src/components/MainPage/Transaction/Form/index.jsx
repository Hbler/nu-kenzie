import { v4 as uuidv4 } from "uuid";

import PinkButton from "../../../Global/PinkButton";
import "./style.css";

export default function Form({ setToShow, setter, original, windowWidth }) {
  const styles = {
    formContainer: {
      width: "30%",
      height: "100%",
      paddingTop: "4%",
      color: "#212529",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    form: {
      width: "100%",
      height: "65%",
      padding: "2%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "5px",
      border: "1px solid #e9ecef",
      backgoundColor: "#fff",
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
  };

  return (
    <section style={styles.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={styles.form}
        className="form-main"
      >
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
