import React from "react";
import styles from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={styles.options}>
      <button className={styles.buttonG} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.buttonN}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.buttonB} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.resetButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
