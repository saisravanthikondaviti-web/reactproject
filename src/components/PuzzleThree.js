import { useState, useEffect } from "react";

function PuzzleThree({ onSuccess, onFail }) {
  const riddles = [
    {
      question: "I speak without a mouth and hear without ears. What am I?",
      answer: "echo",
      hint: "You can hear it in mountains..."
    },
    {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "footsteps",
      hint: "You make them while walking."
    },
    {
      question: "I have keys but no locks, space but no room. What am I?",
      answer: "keyboard",
      hint: "You are using it right now."
    }
  ];

  const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];

  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState("");
  const [currentRiddle] = useState(randomRiddle);

  const checkAnswer = () => {
    if (input.toLowerCase() === currentRiddle.answer) {
      setMessage("🧠 AI: Impressive...");
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setAttempts((prev) => prev - 1);
      onFail();
      setMessage("🤖 AI: Incorrect...");
      setInput("");
    }
  };

  useEffect(() => {
    if (attempts === 0) {
      setMessage("💀 AI: You failed the intelligence test.");
    }
  }, [attempts]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🧠 AI Mind Challenge</h2>

        <p style={styles.question}>{currentRiddle.question}</p>

        <input
          type="text"
          placeholder="Type your answer..."
          value={input}
          disabled={attempts === 0}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttonGroup}>
          <button onClick={checkAnswer} style={styles.submitBtn}>
            Submit
          </button>

          <button
            onClick={() => setShowHint(true)}
            style={styles.hintBtn}
          >
            Hint (-5 score)
          </button>
        </div>

        {showHint && (
          <p style={styles.hint}>💡 {currentRiddle.hint}</p>
        )}

        <div style={styles.footer}>
          <span style={styles.attempts}>
            Attempts Left: {attempts}
          </span>
        </div>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  },
  card: {
    width: "500px",
    background: "linear-gradient(145deg, #111, #1a1a1a)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 0 25px rgba(0,255,255,0.2)",
    color: "white",
    textAlign: "center"
  },
  title: {
    color: "#00f5ff",
    marginBottom: "20px"
  },
  question: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#ddd"
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "2px solid #00f5ff",
    backgroundColor: "#000",
    color: "#00f5ff",
    fontSize: "16px",
    outline: "none",
    marginBottom: "20px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px"
  },
  submitBtn: {
    flex: 1,
    marginRight: "10px",
    padding: "10px",
    backgroundColor: "#00c853",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  },
  hintBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#00bcd4",
    border: "none",
    borderRadius: "8px",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  },
  hint: {
    marginTop: "10px",
    color: "#ffd54f",
    fontStyle: "italic"
  },
  footer: {
    marginTop: "15px"
  },
  attempts: {
    backgroundColor: "#ff5252",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px"
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#00f5ff"
  }
};

export default PuzzleThree;
