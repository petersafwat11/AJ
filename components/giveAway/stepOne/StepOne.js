import Image from "next/image";
import React from "react";
import classes from "./stepOne.module.css";
const StepOne = () => {
  return (
    <div className={classes["step-one"]}>
      <div className={classes["top"]}>
        <h2 className={classes["heading"]}>Step 1:</h2>
        <Image
          //   onClick={() => {
          //     setShowComponent(!showComponent);
          //   }}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["body"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="full-name" className={classes["label"]}>
            Full name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="Enter your name..."
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="email" className={classes["label"]}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email..."
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["bottom-para"]}>
          Please enter the details accurately as the winner will be contacted
          via email.
        </p>
        <button className={classes["next-button"]}>Next</button>
      </div>
    </div>
  );
};

export default StepOne;
