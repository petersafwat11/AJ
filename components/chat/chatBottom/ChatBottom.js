import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import classes from "./chatBottom.module.css";
const ChatBottom = ({
  toggleUserInf,
  displayEmojisAndGifs,
  message,
  setInputMessage,
  setMentionSomeone,
  handleClick,
  isSending,
}) => {
  return (
    <div id="chat-bottom" className={classes["chat-bottom"]}>
      <div className={classes["user-dev"]}>
        <FaUser onClick={toggleUserInf} className={classes["user-icon"]} />
      </div>
      <div id="emojy-dev" className={classes["emojy-dev"]}>
        <MdEmojiEmotions
          onClick={displayEmojisAndGifs}
          className={classes["emojy"]}
        />
      </div>

      <input
        value={message}
        onChange={(e) => {
            setInputMessage(e.target.value);
          if (e.target.value.length < 1) {
            setMentionSomeone("");
          }
        }}
        className={classes["chat-input"]}
        type="text"
        placeholder="Type a message here"
      />
      <div onClick={handleClick} className={classes["chat-bottom-send"]}>
        <AiOutlineArrowUp
          className={isSending ? classes["sending"] : classes[""]}
          style={{ fontSize: ".95rem", color: "white" }}
        />
      </div>
    </div>
  );
};

export default ChatBottom;
