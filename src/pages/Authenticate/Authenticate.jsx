import React, { useState } from "react";
import styles from "./Authenticate.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOne";
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onClick = () => {
    if (step === 2) {
      setStep(1);
    } else {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div>
      <Step onClick={onClick} />
    </div>
  );
};

export default Authenticate;
