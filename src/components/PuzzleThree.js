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
    <div style={{ marginTop: "30px" }}>
      <h2>🧠 AI Mind Challenge</h2>
      <p>{currentRiddle.question}</p>

      <input
        type="text"
        placeholder="Type your answer..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <button onClick={checkAnswer}>Submit</button>
        <button onClick={() => setShowHint(true)}>Hint (-5 score)</button>
      </div>

      {showHint && <p>💡 Hint: {currentRiddle.hint}</p>}

      <p>Attempts Left: {attempts}</p>
      <p>{message}</p>
    </div>
  );
}

export default PuzzleThree;
