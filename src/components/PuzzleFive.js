import { useState, useEffect } from "react";

function PuzzleFive({ onSuccess, onFail }) {
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [shiftPressed, setShiftPressed] = useState(false);
  const [message, setMessage] = useState("Click the button to escape.");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Shift") {
        setShiftPressed(true);
        setMessage("👀 Interesting...");
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Shift") {
        setShiftPressed(false);
        setMessage("Click the button to escape.");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const moveButton = () => {
    if (!shiftPressed) {
      setPosition({
        top: Math.random() * 400,
        left: Math.random() * 400,
      });
      onFail();
    }
  };

  const handleClick = () => {
    if (shiftPressed) {
      setMessage("🚀 You outsmarted the system...");
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }
  };

  return (
    <div style={{ height: "500px", position: "relative" }}>
      <h2>🧩 Final System Override</h2>
      <p>{message}</p>

      <button
        onMouseEnter={moveButton}
        onClick={handleClick}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          padding: "15px 25px",
          cursor: "pointer",
        }}
      >
        🚪 ESCAPE
      </button>
    </div>
  );
}

export default PuzzleFive;
