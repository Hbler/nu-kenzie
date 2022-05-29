import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home";

import LandingPage from "./components/LandingPage";
import "./Global.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  return (
    <>
      {isLoggedIn ? (
        <Home
          setIsLoggedIn={setIsLoggedIn}
          transactions={transactions}
          setTransactions={setTransactions}
        />
      ) : (
        <LandingPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
