import Image from "next/image";
import React, { useState } from "react";
import StepOne from "../stepOne/StepOne";
import StepThree from "../stepThree/StepThree";
import StepTwo from "../stepTwo/StepTwo";
import TopIndecator from "../topIndecators/TopIndecator";
import classes from "./stepsWrapper.module.css";
const StepsWrapper = ({ followUs, toggleSteps, dispatchAction }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepChange = (val) => {
    setCurrentStep(val);
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["indicators-wrapper"]}>
          <TopIndecator
            handleStepChange={handleStepChange}
            indicatorsNum={followUs.indicatorsNum}
            curState={currentStep}
          />
        </div>
        <Image
          onClick={() => {
            dispatchAction({ type: "DISPLAY", value: false });
          }}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="18"
          height="18"
        />
      </div>
      {currentStep === 1 && (
        <StepOne
          dispatchAction={dispatchAction}
          userInfo={followUs.userInfo}
          handleStepChange={handleStepChange}
        />
      )}
      {currentStep === 2 && followUs.indicatorsNum !== 2 && (
        <StepTwo
          joinWebsiteGroup={followUs.methodData}
          handleStepChange={handleStepChange}
        />
      )}
      {(currentStep === 3 ||
        (currentStep === 2 && followUs.indicatorsNum === 2)) && (
        <StepThree handleStepChange={handleStepChange} />
      )}
    </div>
  );
};

export default StepsWrapper;
