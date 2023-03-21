"use client";
import Image from "next/image";
import React from "react";
import classes from "./sendMessage.module.css";
const SendMessage = ({ toggleSendMessageComponent }) => {
  return (
    <div className={classes["send-message"]}>
      <div className={classes["send-message-top"]}>
        <h3 className={classes["heading"]}>Feedback</h3>
        <Image
          onClick={toggleSendMessageComponent}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["send-message-body"]}>
        <textarea
          className={classes["text-area"]}
          placeholder="Type a message..."
        />
        <p className={classes["send-message-para"]}>
          We care about your feedback and aim to adhere to your needs
          immediately.
        </p>
        <button className={classes["send-button"]}>Send</button>
      </div>
    </div>
  );
};

export default SendMessage;

export const SendMessageButton = ({ toggleSendMessageComponent }) => {
  return (
    <div
      onClick={toggleSendMessageComponent}
      className={classes["send-message-button"]}
    >
      <p>Feedback</p>
    </div>
  );
};
