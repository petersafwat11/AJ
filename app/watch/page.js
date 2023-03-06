"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChangeAvatar } from "../../components/chat/changeAvatar";
import Chat from "../../components/chat/Chat";
import Dropdown from "../../components/dropdown/Dropdown";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import WatchDetails from "../../components/watch-details/WatchDetails";
import Takticks from "../../components/watchtaktick/takticks";
import SocialIcons from "../../components/whatchShare/SocialIcons";
import WhoWillWin from "../../components/whoWillWin/WhoWillWin";

import ProtonVpn from "../../components/protonVpn/ProtonVpn";
import classes from "./watch.module.css";
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
    <section className={classes["watch"]}>
      {showShareLinks && (
        <div className={classes["share-links-wrapper"]}>
          <ShareLinks toggleShareLinks={toggleShareLinks} />
        </div>
      )}

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
          <Link href="/channels">Watch</Link>
        </div>

        <WatchDetails
          lieageImage={"/svg/watch/primier-liage.svg"}
          firstTeamImage={"/svg/watch/man-united.svg"}
          firstTeamName={"Man united"}
          seconteamImage={"/svg/watch/liverpool.svg"}
          seconteamName={"Liverpool"}
          date={"Aug 18 15:00"}
          place={"Old Trafford"}
          half={"2nd Half: 47’"}
        />
        <div className={classes["watch-video-wrapper"]}>
          <div className={classes["social-icons"]}>
            <SocialIcons
              toggleShareLinks={toggleShareLinks}
              toggleReport={toggleReport}
            />
          </div>

          <div className={classes["watch-video"]}>{/* <VideoJs /> */}</div>
          <div className={classes["dropdowns"]}>
            <Dropdown name={"english"} options={["1", "2", "3"]} />

            <Dropdown name={"arabic"} options={["1", "2", "3"]} />
            <Dropdown name={"espanol"} options={["1", "2", "3"]} />
            <Dropdown
              name={"more"}
              options={["FRENCH", "TURKISH", "PORTUGUE.."]}
            />
          </div>
        </div>
        <div className={classes["bottom"]}>
          <div className={classes["buy-vpn"]}>
            <ProtonVpn />
          </div>
          <div className={classes["takticks"]}>
            <Takticks />
          </div>
          <div className={classes["who-will-win"]}>
            <WhoWillWin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
