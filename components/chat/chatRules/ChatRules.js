import React from "react";
import classes from "./chatRules.module.css";
const ChatRules = ({ rulesVisability }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Chat Rules</h2>
      <ol className={classes["list"]}>
        {[
          "Do not self promote",
          "18+ content or avatars are not permitted",
          "Do not post any private information",
          "Threatening behaviour is not allowed",
          "Do not post any links or try to disguise the links in formal language",
          "Do not promote/link any other streaming website",
          "Keep the discussion civil",
          "No spamming/excessive caps",
        ].map((item, index) => (
          <li key={index} className={classes["list-item"]}>
            <span className={classes["num"]}>{index + 1}.</span>
            {item}
          </li>
        ))}
      </ol>
      <h3 className={classes["sub-title"]}>
        Violation of these rules may result in a warning or IP ban.
      </h3>
      <button
        onClick={rulesVisability}
        className={classes["understand-button"]}
      >
        UNDERSTOOD
      </button>
    </div>
  );
};

export default ChatRules;
