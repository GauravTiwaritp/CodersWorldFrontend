import React from "react";
import styles from "./StepPhoneEmail.module.css";
const StepPhoneEmail = ({ onClick }) => {
  return (
    <>
      <div>Phone or Email component</div>
      <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepPhoneEmail;
