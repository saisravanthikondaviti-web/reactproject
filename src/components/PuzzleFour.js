import { useState, useEffect, useCallback } from "react";
import { Card, Badge } from "react-bootstrap";

function PuzzleFour({ onSuccess, onFail }) {
  const colors = ["red", "blue", "green", "yellow"];

  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [message, setMessage] = useState("Watch carefully...");
  const [isPlaying, setIsPlaying] = useState(false);
  const [attempts, setAttempts] = useState(3);

 
  const startRound = useCallback(() => {
    setSequence((prevSequence) => {
      const newColor = Math.floor(Math.random() * 4);
      const newSequence = [...prevSequence, newColor];
      setUserSequence([]);
      playSequence(newSequence);
      return newSequence;
    });
  }, []);


   useEffect(() => {
    startRound();
  }, [startRound]);



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
    <Card className="bg-black text-light border-0 shadow-lg rounded-4 p-4 mt-4">
      <Card.Body className="text-center">

        <h2 className="fw-bold text-warning mb-3">
          ⚡ Memory Reactor Override
        </h2>

        {/* Status Row */}
        <div className="d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <Badge bg="info" className="px-3 py-2 fs-6">
            🔁 Round: {round}
          </Badge>

          <Badge bg="danger" className="px-3 py-2 fs-6">
            ❤️ Attempts: {attempts}
          </Badge>
        </div>

        {/* Message */}
        <p className="fs-5 mb-4 text-secondary">{message}</p>

        {/* Color Grid */}
        <div className="color-grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-box ${color} ${activeIndex === index ? "active" : ""
                }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

      </Card.Body>
    </Card>
  );

}

export default PuzzleFour;
