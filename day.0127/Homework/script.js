const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center"
  },
  heading: {
    color: "#333"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, React!</h1>
    </div>
  );
}
