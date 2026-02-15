import { useState } from "react";

function PuzzleOne({ onSuccess, onFail }) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (input.toUpperCase() === "HI") {
      setMessage("✅ Access Granted");
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } else {
      setMessage("❌ Wrong Password");
      onFail();
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Terminal Access Required</h2>
      <p>Decode this binary:</p>
      <p>01001000 01001001</p>

      <input
        type="text"
        placeholder="Enter decoded text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={checkAnswer}>Submit</button>

      <p>{message}</p>
    </div>
  );
}

export default PuzzleOne;
