"use client";
import Image from "next/image";
import React, { useState } from "react";
import StepOne from "../../components/giveAway/stepOne/StepOne";
import StepThree from "../../components/giveAway/stepThree/StepThree";
import StepTwo from "../../components/giveAway/stepTwo/StepTwo";
import Popup from "../../components/popupWrapper/Popup";
import SendMessage, {
  SendMessageButton,
} from "../../components/send-message/SendMessage";
import classes from "./page.module.css";
const GiveAway = () => {
  const [joinWebsiteGroup, setJoinWebsiteGroup] = useState(null);
  const [showSteps, setShowSteps] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
  const controlDisplaySteps = (value) => {
    setShowSteps(value);
  };
  const joinUsOnWebsite = (value) => {
    setJoinWebsiteGroup(value);
    setShowSteps({ ...showSteps, stepOne: true });
    console.log(value);
  };

  return (
    <main className={classes["give-away"]}>

      {(showSteps.stepOne || showSteps.stepTwo || showSteps.stepThree) && (
        <div className={classes["steps-wrapper"]}>
          {showSteps.stepOne && (
            <StepOne
              joinWebsiteGroup={joinWebsiteGroup}
              controlDisplaySteps={controlDisplaySteps}
            />
          )}
          {showSteps.stepTwo && (
            <StepTwo
              joinWebsiteGroup={joinWebsiteGroup}
              controlDisplaySteps={controlDisplaySteps}
            />
          )}
          {showSteps.stepThree && (
            <StepThree controlDisplaySteps={controlDisplaySteps} />
          )}
        </div>
      )}
    </main>
  );
};

export default GiveAway;

export const FollowUS = ({
  src,
  alt,
  width,
  height,
  para,
  num,
  joinUsOnWebsite,
}) => {
  return (
    <div
      onClick={() => {
        joinUsOnWebsite &&
          joinUsOnWebsite({
            src: src,
            text: alt,
          });
      }}
      className={classes["follow-us-method"]}
    >
      <Image
        className={classes["follow-us-method-image"]}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <p className={classes["follow-us-method-para"]}>{para}</p>
      <p className={classes["follow-us-method-num"]}>{num}</p>
    </div>
  );
};
