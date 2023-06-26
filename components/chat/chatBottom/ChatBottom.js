import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import TagUsers from "../tagUsers/TagUsers";
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
  const [displayTagUSer, setDisplayTagUSer] = useState(false);
  const controlShowingUsers = () => {
    setDisplayTagUSer(!TagUsers);
  };
  const [searchUsers, setSearchUsers] = useState("");
  const searchedUsers = (users) => {
    setSearchUsers(users);
  };
  return (
    <div id="chat-bottom" className={classes["chat-bottom"]}>
      {displayTagUSer && (
        <TagUsers
          setMentionSomeone={setMentionSomeone}
          controlShowingUsers={controlShowingUsers}
        />
      )}

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
        onKeyUp={(e) => {
          if (e.key === "@") {
            setDisplayTagUSer(true);
          }
        }}
        onChange={(e) => {
          if (e.target.value.charAt(e.target.value.length - 1)) {
            setDisplayTagUSer(false);
          }
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
