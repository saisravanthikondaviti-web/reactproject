import { useState, useEffect } from "react";

function PuzzleFour({ onSuccess, onFail }) {
  const colors = ["red", "blue", "green", "yellow"];

  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [message, setMessage] = useState("Watch carefully...");
  const [isPlaying, setIsPlaying] = useState(false);
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    startRound();
  }, []);

  const startRound = () => {
    const newColor = Math.floor(Math.random() * 4);
    const newSequence = [...sequence, newColor];
    setSequence(newSequence);
    setUserSequence([]);
    playSequence(newSequence);
  };

  const playSequence = (seq) => {
    setIsPlaying(true);
    seq.forEach((colorIndex, i) => {
      setTimeout(() => {
        setActiveIndex(colorIndex);
        setTimeout(() => setActiveIndex(null), 500);
      }, i * 800);
    });

    setTimeout(() => {
      setIsPlaying(false);
      setMessage("Your turn...");
    }, seq.length * 800);
  };

  const handleClick = (index) => {
    if (isPlaying) return;

    const newUserSeq = [...userSequence, index];
    setUserSequence(newUserSeq);

    if (sequence[newUserSeq.length - 1] !== index) {
      setAttempts((prev) => prev - 1);
      onFail();
      setMessage("❌ Wrong sequence!");
      setUserSequence([]);

      if (attempts - 1 === 0) {
        setMessage("💀 Reactor Meltdown. System Locked.");
      }
      return;
    }

    if (newUserSeq.length === sequence.length) {
      if (round === 5) {
        setMessage("🚀 System Override Successful!");
        setTimeout(() => onSuccess(), 1500);
      } else {
        setRound((prev) => prev + 1);
        setMessage("⚡ Next round...");
        setTimeout(() => startRound(), 1000);
      }
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>⚡ Memory Reactor Override</h2>
      <p>Round: {round}</p>
      <p>Attempts Left: {attempts}</p>
      <p>{message}</p>

      <div className="color-grid">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${color} ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PuzzleFour;
