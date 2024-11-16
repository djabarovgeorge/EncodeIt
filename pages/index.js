import { useState } from "react";
import { encode, decode } from "./base62";

export default function Home() {
  const [key, setKey] = useState("");
  const [mode, setMode] = useState("encode");
  const [result, setResult] = useState("");

  // Compute the result dynamically
  const handleKeyChange = (e) => {
    const newKey = e.target.value;
    setKey(newKey);
    setResult(mode === "encode" ? encode(newKey) : decode(newKey));
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setResult(newMode === "encode" ? encode(key) : decode(key));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Key Encoder/Decoder</h1>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Enter Key:</label>
        <input
          type="text"
          value={key}
          onChange={handleKeyChange}
          style={styles.input}
          placeholder="Type here..."
        />
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => handleModeChange("encode")}
          style={{
            ...styles.button,
            backgroundColor: mode === "encode" ? "#0070f3" : "#ccc",
          }}
        >
          Encode
        </button>
        <button
          onClick={() => handleModeChange("decode")}
          style={{
            ...styles.button,
            backgroundColor: mode === "decode" ? "#0070f3" : "#ccc",
          }}
        >
          Decode
        </button>
      </div>
      <div style={styles.resultContainer}>
        <h3 style={styles.resultLabel}>Result:</h3>
        <p style={styles.result}>{result || "Your result will appear here."}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "500px",
    margin: "50px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  button: {
    flex: 1,
    margin: "0 5px",
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resultContainer: {
    textAlign: "center",
  },
  resultLabel: {
    marginBottom: "10px",
    color: "#333",
  },
  result: {
    fontSize: "18px",
    color: "#0070f3",
    wordWrap: "break-word",
  },
};
