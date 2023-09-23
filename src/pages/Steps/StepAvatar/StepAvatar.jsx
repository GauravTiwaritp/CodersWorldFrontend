import React from "react";
import styles from "./StepAvatar.module.css";
const StepAvatar = ({ onClick }) => {
  return (
    <>
      <div>StepAvatar</div>
      <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepAvatar;
