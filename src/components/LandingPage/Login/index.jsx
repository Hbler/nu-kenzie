import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { SubmitButton } from "../../Global/AppBtns";
import { AppInput } from "../../Global/GlobalComponents";
import Alert from "./Alert";
import "./style.css";

export default function Login({ setIsLoggedIn, setLoginVisible }) {
  const [name, setName] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const login = () => {
    if (name.toLowerCase() === pswrd) {
      setIsLoggedIn(true);
      setLoginVisible(false);
    } else {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 1500);
    }
  };

  const close = () => {
    setLoginVisible(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        [...e.target].forEach((input) => (input.value = ""));
        login();
      }}
      className="login__form"
    >
      {alertVisible && <Alert>Senha Incorreta.</Alert>}
      <FaTimes className="login__btn--close" onClick={close} />

      <AppInput
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
      ></AppInput>
      <AppInput
        type="password"
        placeholder="Digite a senha*"
        onChange={(e) => setPswrd(e.target.value)}
      ></AppInput>
      <small>*é seu nome em letras mínusculas</small>
      <div className="login__btn">
        <SubmitButton>Login</SubmitButton>
      </div>
    </form>
  );
}
