import React from "react";
import styles from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.title}>Statistics</h2>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
