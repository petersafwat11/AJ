"use client";
import React, { useState } from "react";
import { FiAtSign } from "react-icons/fi";
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
          <button className={classes["allow"]}>Allow ALL</button>
          <button className={classes["deny"]}>Deny ALL</button>
        </div>
      </div>
      {messages.map((message, index) => (
        <div key={index} className="wrapper">
          <div className={classes["my-message-wrapper"]}>
            <div className={classes["message-details"]}>
              <p className={classes["message-username"]}>{message.usename}</p>
              <p className={classes["message-time"]}>{message.time}</p>
            </div>
            <div className={classes["message"]}>
              <img
                className={classes["user-avatar"]}
                src={message.avatarSrc}
                alt="user-avatar"
                width="45"
              />
              <div className={classes["message-content"]}>
                {message.message.charAt(0) === "@" && (
                  <span className={classes["mention-user"]}>
                    {message.message.split(" ")[0]}
                  </span>
                )}
                {getSubString(message.message)}
              </div>
              <FiAtSign
                onClick={() => {
                  setMentionUserName("@" + message.usename + " ");
                }}
                className={classes["mention-icon"]}
              />
            </div>
          </div>
          <div className={classes["actions"]}>
            <button className={classes["add"]}>Allow</button>
            <button className={classes["delete"]}>Deny</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoMod;
