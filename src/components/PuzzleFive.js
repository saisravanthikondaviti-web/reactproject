import { useState, useEffect } from "react";

function PuzzleFive({ onSuccess, onFail }) {
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [shiftPressed, setShiftPressed] = useState(false);
  const [message, setMessage] = useState("🚨 Click ESCAPE to override system.");
  const [fakeButtons, setFakeButtons] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Shift") {
        setShiftPressed(true);
        setMessage("👁 SYSTEM: Hidden key detected...");
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Shift") {
        setShiftPressed(false);
        setMessage("🚨 Click ESCAPE to override system.");
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

      // Create fake buttons randomly
      const newFake = {
        top: Math.random() * 400,
        left: Math.random() * 400,
      };
      setFakeButtons((prev) => [...prev, newFake]);

      setMessage("❌ ACCESS DENIED");
      onFail();
    }
  };

  const handleRealClick = () => {
    if (shiftPressed) {
      setMessage("💀 SYSTEM BREACHED...");
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }
  };

  return (
    <div
      style={{
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2>⚠ CHAOS PROTOCOL ACTIVATED</h2>
      <p>{message}</p>

      {/* REAL BUTTON */}
      <button
        onMouseEnter={moveButton}
        onClick={handleRealClick}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          padding: "15px 25px",
          cursor: "pointer",
          background: "red",
          color: "white",
        }}
      >
        🚪 ESCAPE
      </button>

      {/* FAKE BUTTONS */}
      {fakeButtons.map((btn, index) => (
        <button
          key={index}
          onClick={() => {
            setMessage("💀 Fake terminal triggered!");
            onFail();
          }}
          style={{
            position: "absolute",
            top: btn.top,
            left: btn.left,
            padding: "15px 25px",
            background: "black",
            color: "red",
            border: "1px solid red",
          }}
        >
          🚪 ESCAPE
        </button>
      ))}
    </div>
  );
}

export default PuzzleFive;
