import React from "react";
import { GoMention } from "react-icons/go";
import classes from "./chatBody.module.css";
const ChatBody = ({ messages, getSubString, setMentionSomeone }) => {
  return (
    <div className={classes["chat-body"]}>
      {messages.map((message, index) =>
        message.usename.split(" ")[0] === "You" ? (
          <div className={classes["my-message-wrapper"]} key={index}>
            <div className={classes["my-message-details"]}>
              <p className={classes["my-message-username"]}>
                {message.usename}
              </p>
              <p className={classes["my-message-time"]}>{message.time}</p>
            </div>
            <div className={classes["my-message"]}>
              <div className={classes["my-message-content"]}>
                {message.message.charAt(0) === "@" && (
                  <span className={classes["my-mention-user"]}>
                    {message.message.split(" ")[0]}
                  </span>
                )}
                {getSubString(message.message)}
              </div>
              <img
                className={classes["user-avatar"]}
                src={message.avatarSrc}
                alt="user-avatar"
                width="45"
              />
            </div>
          </div>
        ) : (
          <div className={classes["my-message-wrapper"]} key={index}>
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
              <GoMention
                onClick={() => {
                  setMentionSomeone("@" + message.usename + " ");
                }}
                className={classes["mention-icon"]}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ChatBody;
