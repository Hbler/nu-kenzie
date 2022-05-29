import React, { useState } from "react";

import { AppLogo } from "../Global/GlobalComponents";
import { EventButton } from "../Global/AppBtns";
import img from "../../img/Home_detail.svg";
import Login from "./Login";
import "./style.css";

export default function LandingPage({ setIsLoggedIn }) {
  const [loginVisible, setLoginVisible] = useState(false);
  return (
    <main className="lp__main">
      <div className="container small">
        {loginVisible && (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setLoginVisible={setLoginVisible}
          />
        )}
        <section className="lp__info">
          <AppLogo inHome={false}>
            <span>Nu</span> Kenzie
          </AppLogo>
          <h2>
            Centralize o <wbr />
            controle das suas <wbr />
            finanças
          </h2>
          <p>de forma rápida e segura</p>
          <div className="lp__btn">
            <EventButton onClick={setLoginVisible}>Acessar</EventButton>
          </div>
        </section>
        <section className="lp__img">
          <img src={img} alt="" />
        </section>
      </div>
    </main>
  );
}
