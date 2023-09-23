import React from "react";
import styles from "./StepOne.module.css";
const StepOne = ({ onClick }) => {
  return (
    <>
      <div>StepOne</div>
      <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepOne;
