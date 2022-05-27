import PinkButton from "../../Global/PinkButton";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../Global/Modal";

export default function Login({ setter, windowWidth, visibility }) {
  const [modalStr, setModalStr] = useState("");
  const [modalVis, setModalVis] = useState(false);
  const styles = {
    form: {
      left: windowWidth > 768 && "10%",
      width: windowWidth > 768 ? "33%" : windowWidth > 425 ? "75%" : "100vw",
      height: windowWidth > 425 ? "65%" : "100vh",
      padding: windowWidth > 425 ? "2%" : "10%",
      color: "#f8f9fa",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "#212529",
    },
    input: {
      margin: "3% 0",
      padding: "3%",
      color: "#212529",
      border: "none",
      borderRadius: "5px",
    },
  };

  const close = () => {
    visibility(false);
  };

  const login = (e) => {
    const formData = [...e.currentTarget.parentElement];
    const details = {};

    formData.forEach((element) => {
      if (element.name !== "")
        details[element.name] = element.value.toLowerCase();
      element.value = "";
    });

    if (details.name === details.pswrd) setter(true);
    else tempModal("Senha errada.");
  };

  const tempModal = (str) => {
    setModalStr(str);
    setModalVis(true);

    setTimeout(() => {
      setModalVis(false);
      setModalStr("");
    }, 1500);
  };

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Modal visible={modalVis} str={modalStr} />
      <FaTimes
        style={{
          position: "absolute",
          top: "10%",
          right: windowWidth > 768 ? "6%" : "3%",
          cursor: "pointer",
        }}
        onClick={close}
      />
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        style={styles.input}
      />
      <input
        type="password"
        name="pswrd"
        placeholder="Digite a senha*"
        style={styles.input}
      />
      <small>*é seu nome em letras minusculas</small>
      <div style={{ marginTop: "3%" }} onClick={login}>
        <PinkButton str="Login" />
      </div>
    </form>
  );
}
