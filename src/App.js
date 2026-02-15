import { useState } from "react";
import "./App.css";

import PuzzleOne from "./components/PuzzleOne";
import PuzzleTwo from "./components/PuzzleTwo";
import PuzzleThree from "./components/PuzzleThree";
import PuzzleFour from "./components/PuzzleFour";
import PuzzleFive from "./components/PuzzleFive";
import Timer from "./components/Timer";

function App() {
  const [level, setLevel] = useState(1);
  const [startTime] = useState(Date.now());
  const [finished, setFinished] = useState(false);

  const nextLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    } else {
      setFinished(true);
    }
  };

  const renderPuzzle = () => {
    switch (level) {
      case 1: return <PuzzleOne onSuccess={nextLevel} />;
      case 2: return <PuzzleTwo onSuccess={nextLevel} />;
      case 3: return <PuzzleThree onSuccess={nextLevel} />;
      case 4: return <PuzzleFour onSuccess={nextLevel} />;
      case 5: return <PuzzleFive onSuccess={nextLevel} />;
      default: return null;
    }
  };

  return (
    <div className="app">

      <nav className="navbar">
        <h2>MindMaze</h2>
        {!finished && <Timer startTime={startTime} />}
      </nav>

      <div className="background-blur"></div>

      {!finished ? (
        <div className="game-container">
          {renderPuzzle()}
        </div>
      ) : (
        <div className="final-overlay">
          <div className="final-box">
            <h1>🎉 Victory</h1>
            <p>You solved every challenge.</p>
            <button onClick={() => window.location.reload()}>
              Restart
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
