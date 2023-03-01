"use client";
import Image from "next/image";
import React, { useState } from "react";
import classes from "./chat.module.css";
import UserInfo from "./UserInfo";
const Chat = ({ toggleChangeAvatar, selectedAvatar, toggleChat }) => {
  const [showUserInfo, setShowUserInfo] = useState(true);
  const toggleUserInf = () => {
    setShowUserInfo(!showUserInfo);
  };
  return (
    <div className={classes["chat"]}>
      <div className={classes["chat-top"]}>
        <Image
          className={classes["chat-top-extend"]}
          src="/svg/chat/extend.svg"
          alt="extend"
          width="13"
          height="13"
        />
        <p className={classes["chat-top-text"]}>Chat</p>
        <Image
          onClick={toggleChat}
          className={classes["chat-top-exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["chat-body"]}>
        {showUserInfo && (
          <div className={classes["chat-info"]}>
            <UserInfo
              toggleUserInf={toggleUserInf}
              selectedAvatar={selectedAvatar}
              toggleChangeAvatar={toggleChangeAvatar}
            />
          </div>
        )}
        {[1, 2, 3, 4, 5, 6].map((message, index) => (
          <div
            style={{
              flexDirection: index == 5 ? "row-reverse" : "",
              marginTop: index == 5 ? "2rem" : "",
              alignSelf: index == 5 ? "end" : "",
            }}
            key={index}
            className={classes["message"]}
          >
            <Image
              className={classes["chat-body-user"]}
              src="/svg/chat/user-avatar.svg"
              alt="user-avatar"
              width="33"
              height="33"
            />
            <div
              style={{
                flexDirection: index == 5 ? "row-reverse" : "",
                background: index == 5 ? "#03A1CD" : "",
              }}
              className={classes["message-details"]}
            >
              <p className={classes["message-username"]}> Alex Quinn</p>
              <p className={classes["message-content"]}>
                Really excited for the match !!!!!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes["chat-bottom"]}>
        <Image
          className={classes["chat-bottom-user"]}
          src="/svg/chat/user.svg"
          alt="user"
          width="22"
          height="25"
        />
        <Image
          className={classes["chat-bottom-emojy"]}
          src="/svg/chat/emojy.svg"
          alt="emojy"
          width="22"
          height="21"
        />

        <input
          className={classes["chat-input"]}
          type="text"
          placeholder="Type a message here"
        />
        <div className={classes["chat-bottom-send"]}>
          <Image src="/svg/chat/send.svg" alt="send" width="13" height="15" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
