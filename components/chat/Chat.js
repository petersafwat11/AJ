"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import { ChangeAvatar } from "./changeAvatar";
import {FaUser} from 'react-icons/fa'
import classes from "./chat.module.css";
import UserInfo from "./UserInfo";
const Chat = ({ toggleChat }) => {
  const getSubString = (string) => {
    let i = string.indexOf(" ");
    let rest = string.substring(i);
    return rest;
  };
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    "/svg/chat/avatars/main/5.svg"
  );
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [userName, setMentionUserName] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    let messageWithoutUSerName = message;
    if (message.charAt(0) === "@") {
      messageWithoutUSerName = getSubString(message);
    }
    setMessage(userName + messageWithoutUSerName);
  }, [userName]);
  const toggleChangeAvatar = () => {
    setChangeAvatar(!changeAvatar);
  };

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const toggleUserInf = () => {
    setShowUserInfo(!showUserInfo);
  };
  let avatars = { main: [], clubs: [], flags: [] };
  for (let i = 1; i < 203; i = i + 1) {
    avatars.main.push(i);
  }
  for (let i = 1; i < 264; i = i + 1) {
    avatars.flags.push(i);
  }
  for (let i = 1; i < 59; i = i + 1) {
    avatars.clubs.push(i);
  }
  const [messages, setMessages] = useState([
    {
      usename: "messiog10",
      time: "22:29",
      message:
        "Really excited for the match !!!!! Really excited for the match !!!!! Really excited for the match !!!!! haha wow Really excited for the match !!!!!",
      avatarSrc: "/svg/chat/avatars/main/7.svg",
    },
    {
      usename: "championsleague208",
      time: "22: 35",
      message: `@messiog10 I absolutely hate messi, he is so bad, this is why I say hala madrid! It is not fair for the world wide capcity to infuriate social ecom... `,
      avatarSrc: "/svg/chat/avatars/main/8.svg",
    },
    {
      usename: "You (blackdestroyer101)",
      time: "22: 37",
      message: `@championsleague208 you wouldnt
know anything as you are spurs! `,
      avatarSrc: "/svg/chat/avatars/main/10.svg",
    },
  ]);
  return (
    <div className={classes["chat"]}>
      {showUserInfo && (
        <div className={classes["chat-info"]}>
          <UserInfo
            toggleUserInf={toggleUserInf}
            selectedAvatar={selectedAvatar}
            toggleChangeAvatar={toggleChangeAvatar}
          />
        </div>
      )}
      {changeAvatar && (
        <div className={classes["change-avatar-wrapper"]}>
          <ChangeAvatar
            selectedAvatar={selectedAvatar}
            selectAvatar={selectAvatar}
            avatars={avatars}
            toggleChangeAvatar={toggleChangeAvatar}
          />
        </div>
      )}
      <div className={classes["chat-top"]}>
        <Image
          className={classes["chat-top-extend"]}
          src="/svg/chat/extend.svg"
          alt="extend"
          width="13"
          height="13"
        />
        <p className={classes["chat-top-text"]}>
          Chat
          <Image
            src="/svg/chat/down-arrow.svg"
            alt="extend"
            width="14"
            height="14"
          />
          <div className={classes["chat-rooms"]}>
            <p className={classes["chat-room"]}>English (Default)</p>
            <p className={classes["chat-room"]}>Espain</p>
            <p className={classes["arabic"]}>العربية</p>
            <p className={classes["chat-room"]}>Français</p>
          </div>
        </p>

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
            <div key={index}>
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
                <img
                  onClick={() => {
                    setMentionUserName("@" + message.usename + " ");
                  }}
                  className={classes["mention-icon"]}
                  src="/svg/chat/mention-icon.svg"
                  alt="user-avatar"
                  width="14"
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className={classes["chat-bottom"]}>
        <div className={classes["user-dev"]}>
          <FaUser onClick={toggleUserInf} className={classes["user-icon"]} />
        </div>
        {/* <Image
          className={classes["chat-bottom-user"]}
          src="/svg/chat/user.svg"
          alt="user"
          width="22"
          height="25"
        /> */}
        {/* <Image
          className={classes["chat-bottom-emojy"]}
          src="/svg/chat/emojy.svg"
          alt="emojy"
          width="22"
          height="21"
        /> */}
        <div className={classes["emojy-dev"]}>
          <MdEmojiEmotions className={classes["emojy"]} />
        </div>

        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (e.target.value.length < 1) {
              setMentionUserName("");
            }
          }}
          className={classes["chat-input"]}
          type="text"
          placeholder="Type a message here"
        />
        <div className={classes["chat-bottom-send"]}>
          <AiOutlineArrowUp style={{ fontSize: ".75rem", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
