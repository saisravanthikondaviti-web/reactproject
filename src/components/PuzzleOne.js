import { useState } from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";

function PuzzleOne({ onSuccess, onFail }) {
  const [answer, setAnswer] = useState("");

  const correctAnswer = "HI"; // 01001000 01001001 = HI

  const handleSubmit = () => {
    if (answer.toUpperCase() === correctAnswer) {
      onSuccess();
    } else {
      onFail();
      alert("❌ Access Denied");
    }
  };

  return (
    <Card className="bg-black text-light border-0 shadow-lg rounded-4 p-4">
      <Card.Body className="text-center">

        <h2 className="fw-bold mb-3 text-info">
          🖥 Terminal Access Required
        </h2>

        <p className="text-secondary mb-3 fs-5">
          Decode the binary below to unlock access:
        </p>

        {/* Binary Display */}
        <div className="binary-box mb-4">
          01001000 01001001
        </div>

        {/* Input Section */}
        <InputGroup className="mt-3">
          <Form.Control
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter decoded text"
            className="bg-dark text-light border-0 py-3"
          />
          <Button variant="info" className="px-4 fw-semibold" onClick={handleSubmit}>
            Submit
          </Button>
        </InputGroup>

      </Card.Body>
    </Card>
  );
}

export default PuzzleOne;
