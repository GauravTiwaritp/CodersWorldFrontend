import React from "react";
import styles from "./StepUsername.module.css";
const StepUsername = ({ onClick }) => {
  return (
    <>
      <div>StepUsername</div>
      <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepUsername;
