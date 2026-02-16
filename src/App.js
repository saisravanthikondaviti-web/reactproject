// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import PuzzleOne from "./components/PuzzleOne";
import PuzzleTwo from "./components/PuzzleTwo";
import PuzzleThree from "./components/PuzzleThree";
import PuzzleFour from "./components/PuzzleFour";
import PuzzleFive from "./components/PuzzleFive";

import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(100);
  const [timeLeft, setTimeLeft] = useState(180);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
    }
  }, [timeLeft]);

  const nextLevel = () => {
    if (level === 5) {
      setGameOver(true);
    } else {
      setLevel((prev) => prev + 1);
    }
  };

  const reduceScore = () => {
    setScore((prev) => prev - 10);
  };

  if (gameOver) {
    return (
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-dark">
        <Card className="text-center shadow-lg p-4" style={{ width: "30rem" }}>
          <Card.Body>
            <h1 className="text-danger">🎉 Mission Complete</h1>
            <h3 className="mt-3">Final Score</h3>
            <Badge bg="success" className="fs-4 p-3">
              {score}
            </Badge>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container fluid className="bg-dark text-light min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg p-4 bg-secondary text-light">
            <Card.Body>

              {/* Header */}
              <h1 className="text-center mb-4">
                🧑‍💻 Escape The Hacker Lab
              </h1>

              {/* Status Bar */}
              <Row className="mb-3 text-center">
                <Col>
                  <Badge bg="info" className="p-2 fs-6">
                    ⏳ Time: {timeLeft}s
                  </Badge>
                </Col>
                <Col>
                  <Badge bg="warning" className="p-2 fs-6 text-dark">
                    🎯 Level: {level}
                  </Badge>
                </Col>
                <Col>
                  <Badge bg="success" className="p-2 fs-6">
                    💰 Score: {score}
                  </Badge>
                </Col>
              </Row>

              {/* Timer */}
              <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />

              {/* Puzzle Area */}
              <div className="mt-4">
                {level === 1 && (
                  <PuzzleOne onSuccess={nextLevel} onFail={reduceScore} />
                )}
                {level === 2 && (
                  <PuzzleTwo onSuccess={nextLevel} onFail={reduceScore} />
                )}
                {level === 3 && (
                  <PuzzleThree onSuccess={nextLevel} onFail={reduceScore} />
                )}
                {level === 4 && (
                  <PuzzleFour onSuccess={nextLevel} onFail={reduceScore} />
                )}
                {level === 5 && (
                  <PuzzleFive onSuccess={nextLevel} onFail={reduceScore} />
                )}
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


