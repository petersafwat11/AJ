import Image from "next/image";
import React from "react";
import classes from "./stepThree.module.css";
const StepThree = () => {
  return (
    <div className={classes["step-three"]}>
      <div className={classes["exit"]}>
        <Image
          //   onClick={() => {
          //     setShowComponent(!showComponent);
          //   }}
          className={classes["exit-icon"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>

      <div className={classes["success"]}>
        <Image
          //   onClick={() => {
          //     setShowComponent(!showComponent);
          //   }}
          className={classes["success-icon"]}
          src="/svg/done-icon.svg"
          alt="success"
          width="70"
          height="68"
        />
      </div>
      <div className={classes["body"]}>
        <h3 className={classes["success-id"]}>Entry Ticket ID: 19112835</h3>
        <p className={classes["success-message"]}>
          You have successfully entered the giveaway! We will send you an email
          confirmation with your ticket ID and details shortly. Please keep the
          ticket ID above safe in the meantime.
        </p>
        <h4 className={classes["good-luck"]}>Good Luck!</h4>
      </div>
    </div>
  );
};

export default StepThree;
