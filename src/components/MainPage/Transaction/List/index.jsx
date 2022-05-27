import Filters from "./Filters";
import Card from "./Card";

export default function List({
  toShow,
  setToShow,
  setTransactions,
  source,
  windowWidth,
}) {
  const styles = {
    listContainer: {
      width: windowWidth > 768 ? "40%" : windowWidth > 425 ? "60%" : "95%",
      marginLeft: windowWidth > 768 ? "3%" : windowWidth > 425 ? "15%" : "0",
      marginTop: windowWidth > 425 ? "0" : "50%",
      height: "100%",
      paddingTop: "4%",

      color: "#212529",

      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",

      backgoundColor: "#fff",
    },
    filterContainer: {
      width: "100%",
      marginBottom: "5%",

      display: "flex",
      flexDirection: windowWidth > 425 ? "row" : "column",
      justifyContent: "space-between",
    },
    h2: {
      width: "fit-content",
      height: "6vh",

      fontSize: "1.1rem",
    },
    transactions: {
      height: "70vh",

      overflow: "scroll",
    },
  };

  return (
    <section style={styles.listContainer}>
      <div style={styles.filterContainer}>
        <h2 style={styles.h2}>Resumo financeiro</h2>
        <Filters
          original={source}
          setter={setToShow}
          windowWidth={windowWidth}
        />
      </div>
      <ul style={styles.transactions}>
        {toShow.map((transaction) => (
          <Card
            key={transaction.id}
            setToShow={setToShow}
            setTransactions={setTransactions}
            original={source}
            obj={transaction}
          />
        ))}
      </ul>
    </section>
  );
}
