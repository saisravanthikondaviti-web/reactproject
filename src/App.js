import { useState } from "react";
import "./App.css";

import PuzzleOne from "./components/PuzzleOne";
import PuzzleTwo from "./components/PuzzleTwo";
import PuzzleThree from "./components/PuzzleThree";
import PuzzleFour from "./components/PuzzleFour";
import PuzzleFive from "./components/PuzzleFive";
import Timer from "./components/Timer";

function App() {
  const [level, setLevel] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [finished, setFinished] = useState(false);

  const startGame = () => {
    setStartTime(Date.now());
    setLevel(1);
  };

  const nextLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    } else {
      setFinished(true);
    }
  };

  const getPuzzle = () => {
    switch (level) {
      case 1: return <PuzzleOne onSuccess={nextLevel} />;
      case 2: return <PuzzleTwo onSuccess={nextLevel} />;
      case 3: return <PuzzleThree onSuccess={nextLevel} />;
      case 4: return <PuzzleFour onSuccess={nextLevel} />;
      case 5: return <PuzzleFive onSuccess={nextLevel} />;
      default: return null;
    }
  };

  const getFinalTime = () => {
    return Math.floor((Date.now() - startTime) / 1000);
  };

  return (
    <div className="app">

      {level === 0 && !finished && (
        <div className="hero">
          <h1>🧠 MindMaze</h1>
          <p>Only the sharpest minds survive.</p>
          <button onClick={startGame}>Start Challenge</button>
        </div>
      )}

      {level > 0 && !finished && (
        <>
          <Timer startTime={startTime} />
          {getPuzzle()}
        </>
      )}

      {finished && (
        <div className="final-screen">
          <div className="final-card">
            <h1>🏆 You Conquered All Levels!</h1>
            <p>Total Time: {getFinalTime()} seconds</p>
            <button onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
