"use client";
import React, { useState } from "react";
import classes from "./autoMode.module.css";

const AutoMod = () => {
  const getSubString = (string) => {
    let i = string.indexOf(" ");
    let rest = string.substring(i);
    return rest;
  };
  const [userName, setMentionUserName] = useState("");

  const [messages, setMessages] = useState([
    {
      usename: "messiog10",
      time: "22:29",
      message:
        "Really excited for the match !!!!! Really excited for the match !!!!! Really excited for the match !!!!! haha wow Really excited for the match !!!!!",
    },
    {
      usename: "championsleague208",
      time: "22: 35",
      message: `@messiog10 I absolutely hate messi, he is so bad, this is why I say hala madrid! It is not fair for the world wide capcity to infuriate social ecom... `,
    },
  ]);

  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["actions"]}>
          <button className={classes["allow-all"]}>Allow ALL</button>
          <button className={classes["deny-all"]}>Deny ALL</button>
        </div>
      </div>
      <div className={classes["messages-wrapper"]}>
        {messages.map((message, index) => (
          <div key={index} className={classes["message-wrapper"]}>
            <div className={classes["message-data"]}>
              <div className={classes["message-details"]}>
                <p className={classes["message-username"]}>{message.usename}</p>
                <p className={classes["message-time"]}>{message.time}</p>
              </div>
              <div className={classes["message-content"]}>
                {message.message.charAt(0) === "@" && (
                  <span className={classes["mention-user"]}>
                    {message.message.split(" ")[0]}
                  </span>
                )}
                {getSubString(message.message)}
              </div>
            </div>
            <div className={classes["messages-actions"]}>
              <button className={classes["add"]}>Allow</button>
              <button className={classes["delete"]}>Deny</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoMod;
