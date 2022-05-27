import { useState } from "react";
import img from "../../img/Home_detail.svg";
import Logo from "../Global/Logo";
import PinkButton from "../Global/PinkButton";
import Login from "./Login";
export default function Home({ logingSetter, windowWidth }) {
  const [loginVisible, setLoginVisible] = useState(false);
  const styles = {
    main: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#212529",
    },
    info: {
      width: windowWidth > 780 ? "30%" : "80%",
      height: "100%",
      color: "#f8f9fa",
      display: "flex",
      alignItems: windowWidth > 780 ? "flex-start" : "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    h2: {
      margin: "8% 0",
      textAlign: windowWidth > 780 ? "left" : "center",
      lineHeight: windowWidth > 768 ? "2.9rem" : "2.5rem",
      fontSize: windowWidth > 768 ? "2.9rem" : "2.5rem",
    },
    decoration: {
      width: "40%",
      marginLeft: "3%",
      display: windowWidth > 780 ? "block" : "none",
    },
  };

  return (
    <main style={styles.main}>
      {loginVisible && (
        <Login
          setter={logingSetter}
          windowWidth={windowWidth}
          visibility={setLoginVisible}
        />
      )}
      <section style={styles.info}>
        <Logo inHome={true} />
        <h2 style={styles.h2}>
          Centralize o<br /> controle das suas <br />
          finanças
        </h2>
        <p>de forma rápida e segura</p>
        <div
          style={{
            width: "50%",
            height: "6%",
            margin: "4% 0",
          }}
          onClick={() => {
            setLoginVisible(true);
          }}
        >
          <PinkButton str={"Acessar"} />
        </div>
      </section>
      <section style={styles.decoration}>
        <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
      </section>
    </main>
  );
}
