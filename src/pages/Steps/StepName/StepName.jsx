import React from "react";
import styles from "./StepName.module.css";
const StepName = ({ onClick }) => {
  return (
    <>
      <div>StepName</div>
      <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepName;
