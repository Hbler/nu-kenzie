import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { SubmitButton } from "../../Global/AppBtns";
import { AppBox, AppInput, AppSelect } from "../../Global/GlobalComponents";
import "./style.css";

export default function Form({ transactions, setTransactions, setToShow }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const updateTransactions = () => {
    const update = {
      description: description,
      type: type,
      value: type === "entrada" ? value * 1 : value * -1,
      id: uuidv4(),
    };

    setTransactions([...transactions, update]);
    setToShow([...transactions, update]);
  };

  return (
    <div className="form__container">
      <AppBox>
        <form
          className="home__form"
          onSubmit={(e) => {
            e.preventDefault();
            if (description !== "" && value !== "" && type !== "") {
              [...e.target].forEach((input) => {
                input.name === "type" && setType(input.value);
                input.name !== "type" && (input.value = "");
              });
              updateTransactions();
            }
          }}
        >
          <div className="form__line">
            <label htmlFor="description">Descrição</label>
            <AppInput
              name="description"
              type="text"
              placeholder="Digite aqui sua descrição"
              onChange={(e) => setDescription(e.target.value)}
            />
            <small>Ex. Novo computador</small>
          </div>
          <div className="form__line">
            <div>
              <label htmlFor="number">Valor</label>
              <AppInput
                name="number"
                type="number"
                min="1"
                placeholder="500"
                onChange={(e) => setValue(e.target.value)}
              />
              <p>R$</p>
            </div>
            <div>
              <label htmlFor="type">Tipo de valor</label>
              <AppSelect name="type" onChange={(e) => setType(e.target.value)}>
                <option value="">Escolha</option>
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
              </AppSelect>
            </div>
          </div>
          <div className="form__line">
            <SubmitButton onClick={updateTransactions}>
              Inserir Valor
            </SubmitButton>
          </div>
        </form>
      </AppBox>
    </div>
  );
}
