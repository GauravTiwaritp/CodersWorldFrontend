import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      <span>{text}</span>
      <img
        src="/images/arrow-forward.png"
        className={styles.arrow}
        alt="arrow"
      />
    </button>
  );
};

export default Button;
