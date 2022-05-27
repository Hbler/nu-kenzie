export default function Total({ transactions, windowWidth }) {
  const styles = {
    total: {
      top: windowWidth > 768 ? "75%" : windowWidth > 425 ? "20%" : "15%",
      left: windowWidth > 768 ? "13.5%" : windowWidth > 425 ? "3%" : "2.9%",
      width: windowWidth > 768 ? "30%" : windowWidth > 425 ? "20%" : "95%",
      padding: windowWidth > 425 ? "2%" : "2% 5%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-between",
      borderRadius: "5px",
      border: "1px solid #e9ecef",
      backgroundColor: "#fff",
      position: "absolute",
    },
    div: {
      width: "100%",

      display: "flex",
      flexDirection:
        windowWidth > 768 ? "row" : windowWidth > 425 ? "column" : "row",
      justifyContent: "space-between",
    },
    h3: {
      width: windowWidth > 768 ? "45%" : "100%",
    },
    value: {
      color: "#fd377e",
      textAlign:
        windowWidth > 768 ? "right" : windowWidth > 425 ? "left" : "right",
    },
    small: {
      width: windowWidth > 768 ? "100%" : "80%",
      margin: windowWidth > 425 ? "5% 0 0" : "2% 0 0",
      color: "#868e96",
      alignSelf: "flex-end",
    },
  };

  return (
    <section style={styles.total}>
      <div style={styles.div}>
        <h3 style={styles.h3}>Valor total:</h3>
        <h3 style={{ ...styles.h3, ...styles.value }}>
          $ {transactions.reduce((total, obj) => (total += obj.value), 0)},00
        </h3>
      </div>
      <small style={styles.small}>O valor se refere ao saldo</small>
    </section>
  );
}
