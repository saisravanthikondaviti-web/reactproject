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
    setLevel((prev) => prev + 1);
  };

  const reduceScore = () => {
    setScore((prev) => prev - 10);
  };

  if (gameOver) {
    return (
      <div className="container">
        <h1>💀 SYSTEM LOCKED</h1>
        <h2>Your Score: {score}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🧑‍💻 Escape The Hacker Lab</h1>

      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />

      <p>Level: {level}</p>
      <p>Score: {score}</p>

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
  );
}

export default App;

