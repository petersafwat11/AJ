import Image from "next/image";
import React from "react";
import classes from "./stepTwo.module.css";
const StepTwo = () => {
  return (
    <div className={classes["step-two"]}>
      <div className={classes["step-two-top"]}>
        <Image
          //   onClick={() => {
          //     setShowComponent(!showComponent);
          //   }}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="16"
          height="16"
        />
        <h2 className={classes['heading']}>Step 2:</h2>
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
        <div className={classes["telegram"]}>
          <Image
            //   onClick={() => {
            //     setShowComponent(!showComponent);
            //   }}
            className={classes["telegram-icon"]}
            src="/svg/give-away/telegram-steps.svg"
            alt="telegram"
            width="54"
            height="45"
          />
        </div>
        <div className={classes["join"]}>
          <button className={classes["join-button"]}>Join Telegram</button>
          <span className={classes["loading"]}>
            <span></span>
          </span>
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["message"]}>
          Please join the telegram group then refer back to here until it
          completes automatically.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
