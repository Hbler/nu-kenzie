import { useState } from "react";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";

import { EventButton } from "../Global/AppBtns";
import { AppLogo } from "../Global/GlobalComponents";
import Form from "./Form";
import FormModal from "./FormModal";
import Total from "./Total";
import List from "./List";
import "./style.css";

export default function Home({ setIsLoggedIn, transactions, setTransactions }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [toShow, setToShow] = useState(transactions);

  const goBack = () => {
    setIsLoggedIn(false);
  };

  const showFormModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <header className="home__header">
        <div className="container small">
          <AppLogo inHome={true}>
            <span>Nu</span> Kenzie
          </AppLogo>
          <div className="header__btn">
            <EventButton btnColor={"gray"} onClick={goBack} btnSize={"small"}>
              <p className="btn__p">inicio</p>
              <FaSignOutAlt className="btn__icon" />
            </EventButton>
          </div>
        </div>
      </header>
      <main className="home__main">
        <div className="container small">
          {modalVisible && (
            <FormModal
              transactions={transactions}
              setTransactions={setTransactions}
              setToShow={setToShow}
              setModalVisible={setModalVisible}
            />
          )}
          <section className="home__left">
            <Form
              transactions={transactions}
              setTransactions={setTransactions}
              setToShow={setToShow}
            />

            {transactions.length > 0 && <Total transactions={transactions} />}
          </section>
          <List
            transactions={transactions}
            setTransactions={setTransactions}
            toShow={toShow}
            setToShow={setToShow}
          />

          <FaPlus className="home__btn--plus" onClick={showFormModal} />
        </div>
      </main>
    </>
  );
}
