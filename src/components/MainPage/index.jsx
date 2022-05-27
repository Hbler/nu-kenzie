import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import Form from "./Transaction/Form";
import FormModal from "./Transaction/FormModal";
import List from "./Transaction/List";
import Total from "./Transaction/Total";

export default function MainPage({ logingSetter, windowWidth }) {
  const [formVisible, setFormVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      description: "Salário recebido",
      type: "entrada",
      value: 15000,
      id: uuidv4(),
    },
    {
      description: "Conta de luz - Maio",
      type: "saída",
      value: -525,
      id: uuidv4(),
    },
  ]);
  const [toShow, setToShow] = useState(transactions);

  const styles = {
    main: {
      width: "100vw",
      height: "88vh",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      overflow: "scroll",
      backgroundColor: "#fff",
      boxShadow: "0 2px 20px -1px #8888 inset",
    },
    plusBtn: {
      bottom: windowWidth > 425 ? "5%" : "8%",
      right: windowWidth > 425 ? "7%" : "5%",
      width: windowWidth > 425 ? "10vw" : "15vw",
      height: windowWidth > 425 ? "10vw" : "15vw",
      padding: "2%",
      color: "#f8f9fa",
      borderRadius: "50%",
      border: "2px solid #f8f9fa",
      backgroundColor: "#fd377e",
      display: !formVisible ? "block" : "none",
      position: "absolute",
      cursor: "pointer",
    },
  };

  useEffect(() => {
    if (windowWidth <= 768) setFormVisible(false);
    else if (windowWidth > 768 && !formVisible) setFormVisible(true);
  }, [formVisible, setFormVisible, windowWidth]);

  const showFormModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Header setter={logingSetter} windowWidth={windowWidth} />
      <main style={styles.main}>
        {formVisible && (
          <Form
            setToShow={setToShow}
            setter={setTransactions}
            original={transactions}
          />
        )}
        <Total transactions={transactions} windowWidth={windowWidth} />
        <List
          toShow={toShow}
          setToShow={setToShow}
          setTransactions={setTransactions}
          source={transactions}
          windowWidth={windowWidth}
        />
        {modalVisible && (
          <FormModal
            setToShow={setToShow}
            setter={setTransactions}
            original={transactions}
            visibility={setModalVisible}
            windowWidth={windowWidth}
          />
        )}
        <FaPlus style={styles.plusBtn} onClick={showFormModal} />
      </main>
    </>
  );
}
