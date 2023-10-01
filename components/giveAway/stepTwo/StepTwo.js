import Image from "next/image";
import React from "react";
import classes from "./stepTwo.module.css";
const StepTwo = ({ joinWebsiteGroup }) => {
  return (
    <div className={classes["container"]}>
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
          <button onClick={() => {}} className={classes["join-button"]}>
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
