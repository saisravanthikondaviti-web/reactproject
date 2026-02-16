function MissionComplete({ score, onReplay }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

        <h1 style={styles.title}>🎉 Mission Complete</h1>

        <p style={styles.subtitle}>Final Score</p>

        <div style={styles.scoreBox}>
          {score}
        </div>

        {/* REPLAY BUTTON BELOW SCORE */}
        <button style={styles.replayButton} onClick={onReplay}>
          🔁 Replay Mission
        </button>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at center, #0f2027, #203a43, #2c5364)",
  },
  card: {
    width: "90%",
    maxWidth: "480px",
    padding: "50px 40px",
    borderRadius: "25px",
    background: "linear-gradient(145deg, #111, #1c1c1c)",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 40px rgba(0,255,200,0.3)",
  },
  title: {
    fontSize: "38px",
    color: "#00ffd5",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#aaa",
    marginBottom: "15px",
  },
  scoreBox: {
    margin: "20px auto 30px auto",
    padding: "22px",
    width: "160px",
    fontSize: "36px",
    fontWeight: "bold",
    borderRadius: "15px",
    background: "linear-gradient(90deg, #00ffcc, #00c853)",
    color: "black",
    boxShadow: "0 0 25px rgba(0,255,200,0.6)",
  },
  replayButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ff512f, #dd2476)",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default MissionComplete;
