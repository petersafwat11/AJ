"use client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import GifPicker from "gif-picker-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { MdEmojiEmotions } from "react-icons/md";
import { ChangeAvatar } from "./changeAvatar";
import classes from "./chat.module.css";
import UserInfo from "./UserInfo";

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
  let avatars = {
    Avatars: [],
    Clubs: [],
    Flags: [],
    NBA: { Eastern: [], Western: [] },
    Others: {
      NHL: { Eastern: [], Western: [] },
      NFL: [],
      MLB: [],
      Circket: [],
    },
    Football: {
      Brazil1stDivision: [],
      Bundesliga: [],
      LaLiga: [],
      LigaPortugal: [],
      Ligue1: [],
      MLS: { WesternConference: [], EasternConference: [] },
      Others: [],
      PremierLeague: [],
      ScottishPremiership: [],
      SerieA: [],
    },
  };
  for (let i = 0; i < 213; i = i + 1) {
    avatars.Avatars.push(i);
  }
  for (let i = 0; i < 264; i = i + 1) {
    avatars.Flags.push(i);
  }
  for (let i = 1; i < 59; i = i + 1) {
    avatars.Clubs.push(i);
  }
  for (let i = 0; i < 15; i = i + 1) {
    avatars.NBA.Eastern.push(i);
    avatars.NBA.Western.push(i);
  }
  for (let i = 0; i < 30; i = i + 1) {
    avatars.Others.MLB.push(i);
    avatars.Others.NFL.push(i);
    if (i < 11) {
      avatars.Others.Circket.push(i);
    }
    if (i < 16) {
      avatars.Others.NHL.Eastern.push(i);
      avatars.Others.NHL.Western.push(i);
    }
  }
  for (let i = 0; i < 31; i = i + 1) {
    avatars.Football.Others.push(i);

    if (i < 20) {
      avatars.Football.Brazil1stDivision.push(i);
      avatars.Football.LaLiga.push(i);
      avatars.Football.Ligue1.push(i);
      avatars.Football.PremierLeague.push(i);
      avatars.Football.SerieA.push(i);
    }
    if (i < 18) {
      avatars.Football.Bundesliga.push(i);
      avatars.Football.LigaPortugal.push(i);
    }
    if (i < 15) {
      avatars.Football.MLS.EasternConference.push(i);
    }
    if (i < 14) {
      avatars.Football.MLS.WesternConference.push(i);
    }
    if (i < 12) {
      avatars.Football.ScottishPremiership.push(i);
    }
  }
  const [messages, setMessages] = useState([
    {
      usename: "messiog10",
      time: "22:29",
      message:
        "Really excited for the match !!!!! Really excited for the match !!!!! Really excited for the match !!!!! haha wow Really excited for the match !!!!!",
      avatarSrc: "/svg/chat/avatars/Avatars/7.svg",
    },
    {
      usename: "championsleague208",
      time: "22: 35",
      message: `@messiog10 I absolutely hate messi, he is so bad, this is why I say hala madrid! It is not fair for the world wide capcity to infuriate social ecom... `,
      avatarSrc: "/svg/chat/avatars/Avatars/8.svg",
    },
    {
      usename: "You (blackdestroyer101)",
      time: "22: 37",
      message: `@championsleague208 you wouldnt
know anything as you are spurs! `,
      avatarSrc: "/svg/chat/avatars/Avatars/10.svg",
    },
  ]);
  const [windowDimensions, setWindowDimensions] = useState({
    width: "",
    height: "",
  });
  const handleResize = () => {
    setWindowDimensions({
      width: window.screen.width,
      height: window.screen.height,
    });
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {showEmojiesAndGifs && (
        <div
          style={{ paddingBottom: emojyOrGifs === "gifs" ? "0" : "" }}
          id="emojies-gifs"
          className={classes["emojies-gifs"]}
        >
          <div className={classes["space"]}></div>

          <img
            onClick={() => {
              setShowEmojiesAndGifs(false);
            }}
            className={classes["exit-emojy"]}
            src="/svg/exit-emojy.svg"
            alt="exit"
            height="14"
            width="14"
          />
          <div className={classes["emojies-gifs-top"]}>
            <p
              style={{
                background: emojyOrGifs == "emojy" ? "#03A1CD" : "",
              }}
              onClick={() => {
                setEmojyOrGifs("emojy");
              }}
            >
              Emojis
            </p>
            <p
              style={{ background: emojyOrGifs == "gifs" ? "#03A1CD" : "" }}
              onClick={() => {
                setEmojyOrGifs("gifs");
              }}
            >
              GIFs
            </p>
          </div>
          {emojyOrGifs === "emojy" && (
            <Picker
              navPosition="none"
              className={classes["emojy-picker"]}
              data={data}
              theme="dark"
              previewPosition="none"
              perLine={windowDimensions.width < 900 ? 6 : 8}
              onEmojiSelect={(e) => {
                console.log("clicked");
                setMessage(message + e.native);
              }}
            />
          )}
          {emojyOrGifs === "gifs" && (
            <GifPicker
              tenorApiKey={"AIzaSyC8EsPMPT17ZCZHFdKpQg9z0i8BgEr29eE"}
              theme="dark"
              onGifClick={(TenorImage) => {
                setMessage(TenorImage);
              }}
            />
          )}
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
            height="10"
          />
          <div className={classes["chat-rooms"]}>
            {["English (Default)", "Espain", "العربية", "Français"].map(
              (i, index) => (
                <p
                  onClick={() => {
                    setChatRoomSelection(i);
                  }}
                  key={index}
                  className={classes[i == "العربية" ? "arabic" : "chat-room"]}
                  style={{
                    background: chatRoomSelection === i ? "#0085aa" : "",
                  }}
                >
                  {i}
                </p>
              )
            )}
            {/* <p className={classes["chat-room"]}></p>
            <p className={classes["chat-room"]}></p>
            <p className={classes["arabic"]}></p>
            <p className={classes["chat-room"]}></p> */}
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
                <FiAtSign
                  onClick={() => {
                    setMentionUserName("@" + message.usename + " ");
                  }}
                  className={classes["mention-icon"]}
                />
              </div>
            </div>
          )
        )}
      </div>
      <div id="chat-bottom" className={classes["chat-bottom"]}>
        <div className={classes["user-dev"]}>
          <FaUser onClick={toggleUserInf} className={classes["user-icon"]} />
        </div>
        <div id="emojy-dev" className={classes["emojy-dev"]}>
          <MdEmojiEmotions
            onClick={() => {
              setShowEmojiesAndGifs(!showEmojiesAndGifs);
            }}
            className={classes["emojy"]}
          />
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
          <AiOutlineArrowUp style={{ fontSize: ".95rem", color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
