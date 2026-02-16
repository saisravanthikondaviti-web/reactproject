import { useState } from "react";
import { Card, Badge, Button } from "react-bootstrap";

function PuzzleTwo({ onSuccess, onFail }) {

  const correctPattern = [0, 1, 2]; // change pattern if you want

  const [selected, setSelected] = useState([]);
  const [attempts, setAttempts] = useState(3);

  // Create 9 grid cells
  const grid = Array.from({ length: 9 });

  const handleSelect = (index) => {
    if (!selected.includes(index)) {
      setSelected([...selected, index]);
    }
  };

  const handleUnlock = () => {
    if (JSON.stringify(selected) === JSON.stringify(correctPattern)) {
      onSuccess();
    } else {
      setAttempts((prev) => prev - 1);
      onFail();
      setSelected([]);

      if (attempts - 1 === 0) {
        alert("💀 Security Locked!");
      }
    }
  };

  return (
    <Card className="bg-black text-light border-0 shadow-lg rounded-4 p-3 mt-4">

      <Card.Body className="text-center">

        <h3 className="fw-bold text-info mb-3">

          🔐 Pattern Lock Security
        </h3>

        <Badge bg="danger" className="mb-4 px-4 py-2 fs-6">
          Attempts Left: {attempts}
        </Badge>

        <div className="pattern-grid mb-4">
          {grid.map((_, index) => (
            <div
              key={index}
              className={`pattern-node ${
                selected.includes(index) ? "active" : ""
              }`}
              onClick={() => handleSelect(index)}
            />
          ))}
        </div>

        <Button
          variant="success"
          className="px-5 py-2 fw-semibold"
          onClick={handleUnlock}
        >
          Unlock
        </Button>

      </Card.Body>
    </Card>
  );
}

export default PuzzleTwo;
