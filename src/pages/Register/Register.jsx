import React, { useState } from "react";
import styles from "./Register.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOne";
import StepName from "../Steps/StepName/StepName";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepUsername from "../Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onClick = () => {
    if (step === 5) {
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

export default Register;
