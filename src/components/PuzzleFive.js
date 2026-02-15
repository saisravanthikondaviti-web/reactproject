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
    <div style={{ marginTop: "40px" }}>
      <h2>🧠 Final Logic Gate</h2>
      <p>Door opens only when:</p>
      <strong>(A AND B) OR (C XOR D)</strong>

      <div style={{ marginTop: "20px" }}>
        {Object.keys(switches).map((key) => (
          <button
            key={key}
            onClick={() => toggleSwitch(key)}
            style={{
              margin: "10px",
              padding: "15px",
              background: switches[key] ? "#00ffcc" : "#111",
              color: switches[key] ? "#000" : "#00ffcc",
              border: "1px solid #00ffcc",
            }}
          >
            {key}: {switches[key] ? "ON" : "OFF"}
          </button>
        ))}
      </div>

      <button onClick={checkLogic} style={{ marginTop: "20px" }}>
        Check System
      </button>

      <p>{message}</p>
    </div>
  );
}

export default PuzzleFive;
