export default function Logo({ inHome }) {
  const styles = {
    h1: {
      color: inHome ? "#f8f9fa" : "#212529",
      fontSize: "2rem",
      fontWeight: "900",
    },
    span: { color: "#fd377e" },
  };

  return (
    <h1 style={styles.h1}>
      <span style={styles.span}>Nu</span> Kenzie
    </h1>
  );
}
