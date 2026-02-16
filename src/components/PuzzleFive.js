import { useState } from "react";

function PuzzleFive({ onSuccess, onFail }) {
  const [switches, setSwitches] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
  });

  const [message, setMessage] = useState("");

  const toggleSwitch = (key) => {
    setSwitches({ ...switches, [key]: !switches[key] });
  };

  const checkLogic = () => {
    const { A, B, C, D } = switches;
    const result = (A && B) || (C !== D); // XOR = !==

    if (result) {
      setMessage("🚀 Logic TRUE. Door Unlocked!");
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setMessage("❌ Logic FALSE. Try again.");
      onFail();
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🧠 Final Logic Gate</h2>

        <p style={styles.subtitle}>Door opens only when:</p>
        <div style={styles.formula}>
          (A AND B) OR (C XOR D)
        </div>

        <div style={styles.switchGrid}>
          {Object.keys(switches).map((key) => (
            <button
              key={key}
              onClick={() => toggleSwitch(key)}
              style={{
                ...styles.switch,
                ...(switches[key] ? styles.switchOn : styles.switchOff),
              }}
            >
              <div style={styles.switchLabel}>{key}</div>
              <div style={styles.switchState}>
                {switches[key] ? "ON" : "OFF"}
              </div>
            </button>
          ))}
        </div>

        <button onClick={checkLogic} style={styles.checkButton}>
          Check System
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
  card: {
    width: "600px",
    padding: "35px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #0f0f0f, #1c1c1c)",
    boxShadow: "0 0 30px rgba(0,255,255,0.15)",
    color: "white",
    textAlign: "center",
  },
  title: {
    color: "#00f5ff",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "10px",
  },
  formula: {
    background: "#000",
    padding: "10px 20px",
    borderRadius: "8px",
    display: "inline-block",
    border: "1px solid #00f5ff",
    marginBottom: "25px",
    color: "#00f5ff",
    fontWeight: "bold",
  },
  switchGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },
  switch: {
    padding: "20px",
    borderRadius: "12px",
    border: "2px solid #00f5ff",
    cursor: "pointer",
    transition: "0.3s",
  },
  switchOn: {
    backgroundColor: "#00f5ff",
    color: "#000",
    boxShadow: "0 0 15px #00f5ff",
  },
  switchOff: {
    backgroundColor: "#111",
    color: "#00f5ff",
  },
  switchLabel: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  switchState: {
    marginTop: "5px",
    fontSize: "14px",
  },
  checkButton: {
    marginTop: "10px",
    padding: "12px 25px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #00ffcc, #00c853)",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#00f5ff",
  },
};

export default PuzzleFive;
