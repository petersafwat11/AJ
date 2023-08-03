"use client";
import React, { useEffect, useState } from "react";
import avatars from "./avatarsIterator";
import ChangeAvatar from "./changeAvatars/changeAvatar";
import classes from "./chat.module.css";
import ChatBody from "./chatBody/ChatBody";
import ChatBottom from "./chatBottom/ChatBottom";
import ChatRules from "./chatRules/ChatRules";
import ChatTop from "./chatTop/ChatTop";
import dummyMessages from "./dummyMessages";
import EmojiaAndGifs from "./emojiAndGifs/EmojiaAndGifs";
import Poll from "./poll/Poll";
import UserInfo from "./userInfo/UserInfo";
const Chat = ({ toggleChat }) => {
  const [showEmojiesAndGifs, setShowEmojiesAndGifs] = useState(false);
  const [emojyOrGifs, setEmojyOrGifs] = useState("emojy");
  const getSubString = (string) => {
    let i = string.indexOf(" ");
    let rest = string.substring(i);
    return rest;
  };
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    "/svg/chat/avatars/Avatars/5.svg"
  );
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [userName, setMentionUserName] = useState("");
  const [message, setMessage] = useState("");
  const [chatRoomSelection, setChatRoomSelection] =
    useState("English (Default)");
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
  const [messages, setMessages] = useState(dummyMessages);
  const [isSending, setIsSending] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 500);
  };
  const [showRules, setShowRules] = useState(true);
  const rulesVisability = () => {
    setShowRules(false);
  };
  let search;
  if (document && showEmojiesAndGifs) {
    search = document.getElementsByClassName("relative flex-grow");
  }
  const displayEmojisAndGifs = () => {
    setShowEmojiesAndGifs(!showEmojiesAndGifs);
  };
  const setInputMessage = (message) => {
    setMessage(message);
  };
  const setMentionSomeone = (mention) => {
    setMentionUserName(mention);
  };
  const contollChatRoom = (room) => {
    setChatRoomSelection(room);
  };
  const chooseGifOrEmojies = (choose) => {
    setEmojyOrGifs(choose);
  };
  return (
    <div className={classes["chat"]}>
      {true && <Poll />}
      {showRules && <ChatRules rulesVisability={rulesVisability} />}
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
      {showEmojiesAndGifs && (
        <EmojiaAndGifs
          emojyOrGifs={emojyOrGifs}
          chooseGifOrEmojies={chooseGifOrEmojies}
          displayEmojisAndGifs={displayEmojisAndGifs}
          message={message}
          setInputMessage={setInputMessage}
        />
      )}
      <ChatTop
        chatRoomSelection={chatRoomSelection}
        contollChatRoom={contollChatRoom}
        toggleChat={toggleChat}
      />
      <ChatBody
        messages={messages}
        getSubString={getSubString}
        setMentionSomeone={setMentionSomeone}
      />
      <ChatBottom
        toggleUserInf={toggleUserInf}
        displayEmojisAndGifs={displayEmojisAndGifs}
        message={message}
        setInputMessage={setInputMessage}
        setMentionSomeone={setMentionSomeone}
        handleClick={handleClick}
        isSending={isSending}
      />
    </div>
  );
};

export default Chat;
