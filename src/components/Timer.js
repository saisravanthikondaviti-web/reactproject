import { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimeLeft]);

  return (
    <div style={{ margin: "10px" }}>
      ⏳ Time Left: {timeLeft}s
    </div>
  );
}

export default Timer;
