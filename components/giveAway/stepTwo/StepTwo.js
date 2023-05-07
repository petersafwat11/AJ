import Image from "next/image";
import React from "react";
import classes from "./stepTwo.module.css";
import {BsArrowLeftShort} from 'react-icons/bs'
const StepTwo = ({ joinWebsiteGroup, controlDisplaySteps }) => {
  return (
    <div className={classes["step-two"]}>
      <div className={classes["step-two-top"]}>
        <div className={classes["back-div"]}>
          <BsArrowLeftShort
            onClick={() => {
              controlDisplaySteps({
                stepOne: true,
                stepTwo: false,
                stepThree: false,
              });
            }}
            className={classes["back-icon"]}
          />
        </div>
        <h2 className={classes["heading"]}>Step 2:</h2>
        <Image
          onClick={() => {
            controlDisplaySteps({
              stepOne: false,
              stepTwo: false,
              stepThree: false,
            });
          }}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["body"]}>
        {joinWebsiteGroup.text === "Telegram" ? (
          <div className={classes["telegram"]}>
            <Image
              className={classes["telegram-icon"]}
              src={"/svg/give-away/telegram-steps.svg"}
              alt="telegram"
              width="54"
              height="45"
            />
          </div>
        ) : joinWebsiteGroup.text === "Twitter" ? (
          <div className={classes["twitter"]}>
            <Image
              className={classes["telegram-icon"]}
              src={"/svg/give-away/twitter-steps.svg"}
              alt="twitter"
              width="66"
              height="53"
            />
          </div>
        ) : (
          <div className={classes["retweet"]}>
            <Image
              className={classes["retweet-icon"]}
              src={"/svg/give-away/retweet-steps.svg"}
              alt="twitter"
              width="66"
              height="66"
            />
          </div>
        )}

        <div className={classes["join"]}>
          <button
            onClick={() => {
              controlDisplaySteps({
                stepOne: false,
                stepTwo: false,
                stepThree: true,
              });
            }}
            className={classes["join-button"]}
          >
            {joinWebsiteGroup.text == "Retweet"
              ? joinWebsiteGroup.text
              : "Join " + joinWebsiteGroup.text}
          </button>
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
