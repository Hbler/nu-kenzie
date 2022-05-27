import GrayButton from "../../Global/GrayButton";
import { FaSignOutAlt } from "react-icons/fa";
import Logo from "../../Global/Logo";

export default function Header({ setter, windowWidth }) {
  const styles = {
    header: {
      height: "12vh",
      padding: "0 10%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f8f9fa",
    },
    btn: { width: windowWidth > 768 ? "10%" : "15%", height: "50%" },
  };

  //   windowWidth > 768 ? "33%" : windowWidth > 425 ? "75%" : "100vw",

  const logout = () => {
    setter(false);
  };

  return (
    <header style={styles.header}>
      <Logo inHome={false} />
      <div style={styles.btn} onClick={logout}>
        <GrayButton str={windowWidth > 425 ? "Inicio" : <FaSignOutAlt />} />
      </div>
    </header>
  );
}
