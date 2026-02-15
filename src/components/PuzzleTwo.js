import { useState } from "react";

function PuzzleTwo({ onSuccess, onFail }) {
  const correctPattern = [0, 1, 2, 5, 8];

  const [selected, setSelected] = useState([]);
  const [attempts, setAttempts] = useState(3);
  const [message, setMessage] = useState("");

  const handleClick = (index) => {
    if (!selected.includes(index)) {
      setSelected([...selected, index]);
    }
  };

  const checkPattern = () => {
    if (JSON.stringify(selected) === JSON.stringify(correctPattern)) {
      setMessage("🔓 Pattern Correct!");
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } else {
      setAttempts((prev) => prev - 1);
      onFail();
      setMessage("❌ Wrong Pattern");
      setSelected([]);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Pattern Lock Security</h2>
      <p>Attempts Left: {attempts}</p>

      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className={`box ${selected.includes(index) ? "active" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button onClick={checkPattern}>Unlock</button>
      <p>{message}</p>

      {attempts === 0 && <p>💀 System Locked!</p>}
    </div>
  );
}

export default PuzzleTwo;
