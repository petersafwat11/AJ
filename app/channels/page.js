"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChangeAvatar } from "../../components/chat/changeAvatar";
import Chat from "../../components/chat/Chat";
import LiveButton from "../../components/live-button/LiveButton";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import { VideoJs } from "../../components/video/VideoJs";
import SocialIcons from "../../components/whatchShare/SocialIcons";
import classes from "./channels.module.css";
const Page = () => {
  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");
  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const toggleShareLinks = () => {
    console.log("clicked", showShareLinks);
    setShowShareLinks(!showShareLinks);
  };
  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const toggleChangeAvatar = () => {
    setChangeAvatar(!changeAvatar);
  };
  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };
  return (
    <div className={classes["channels"]}>
      {showReport && (
        <div className={classes["report-wrapper"]}>
          <Report toggleReport={toggleReport} />
        </div>
      )}
      {changeAvatar && (
        <div className={classes["change-avatar-wrapper"]}>
          <ChangeAvatar
            selectAvatar={selectAvatar}
            toggleChangeAvatar={toggleChangeAvatar}
          />
        </div>
      )}
      {!showChat && (
        <Image
          onClick={toggleChat}
          className={classes["chat-icon"]}
          src="/svg/chat-floating.svg"
          alt="chat"
          width="156"
          height="156"
        />
      )}
      {showChat && (
        <div className={classes["chat"]}>
          <Chat
            selectedAvatar={selectedAvatar}
            toggleChangeAvatar={toggleChangeAvatar}
            toggleChat={toggleChat}
          />
        </div>
      )}
      <div className={classes["container"]}>
        <div className={classes["navigate"]}>
          <Link href="/">Home</Link>
          <span> &gt; </span>
          <Link href="/channels">Channels</Link>
        </div>
        <div className={classes["top-heading"]}>
          <span className={classes["heading-span"]}> Now Playing </span>
          <h3 onClick={toggleShareLinks} className={classes["heading-title"]}>
            Sky Sports
          </h3>
          <LiveButton text={"LIVE"} />
        </div>
        <div className={classes["watch-video-wrapper"]}>
          <div className={classes["social-icons"]}>
            <SocialIcons
              toggleShareLinks={toggleShareLinks}
              toggleReport={toggleReport}
            />
          </div>

          <div className={classes["watch-video"]}>
            <VideoJs />
            </div>
          <div className={classes["watch-video-options"]}>
            <button className={classes["watch-video-options-server-name"]}>
              Server 1
            </button>
            <button className={classes["watch-video-options-extend-button"]}>
              EXTEND
            </button>
          </div>
          <div className={classes["watch-video-servers"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <button
                key={index}
                className={classes["watch-video-servers-button"]}
              >
                Sky Sports 1
              </button>
            ))}
          </div>
        </div>
        {showShareLinks && (
          <div className={classes["share-links"]}>
            <ShareLinks toggleShareLinks={toggleShareLinks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
