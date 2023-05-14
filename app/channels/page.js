"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chat from "../../components/chat/Chat";
import ExtendButton from "../../components/extendButton/ExtendButton";
import LiveButton from "../../components/live-button/LiveButton";
import Marque from "../../components/marque/Marque";
import Popup from "../../components/popupWrapper/Popup";
import ProtonVpn from "../../components/protonVpn/ProtonVpn";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import TopLayout from "../../components/topLayout/TopLayout";
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
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />

        <div className={classes["channels"]}>
          {showReport && (
            <Popup>
              <Report toggleReport={toggleReport} />
            </Popup>
          )}
          {!showChat && (
            <Image
              onClick={toggleChat}
              className={classes["chat-icon"]}
              src="/svg/chat-floating.svg"
              alt="chat"
              width="140"
              height="140"
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
          {showShareLinks && (
            <Popup>
              <ShareLinks toggleShareLinks={toggleShareLinks} />
            </Popup>
          )}
          <div className={classes["container"]}>
            <div className={classes["navigate"]}>
              <Link href="/">Home</Link>
              <span> &gt; </span>
              <Link href="/channels">Channels</Link>
            </div>
            <div className={classes["top-heading"]}>
              <span className={classes["heading-span"]}> Now Playing </span>
              <h3
                onClick={toggleShareLinks}
                className={classes["heading-title"]}
              >
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

              <div className={classes["watch-video"]}>{/* <VideoJs /> */}</div>
              <div className={classes["watch-video-options"]}>
                <button className={classes["watch-video-options-server-name"]}>
                  Server 1
                </button>
                <ExtendButton />
              </div>
              <div className={classes["vpn"]}>
                <ProtonVpn />
              </div>
              <div className={classes["search-div"]}>
                <input
                  className={classes["channel-search"]}
                  type="text"
                  placeholder="Search for channel..."
                />
                <Image
                  className={classes["search-icon"]}
                  src="/svg/search-icon.svg"
                  alt="search"
                  width="9"
                  height="9"
                />
              </div>
              <div className={classes["watch-video-servers"]}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <button
                    key={index}
                    className={classes["watch-video-servers-button"]}
                  >
                    Sky Sports {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
