"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chat from "../../components/chat/Chat";
import Dropdown from "../../components/dropdown/Dropdown";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import WatchDetails from "../../components/watch-details/WatchDetailsFootball";
import Takticks from "../../components/watchtaktick/takticksFootball";
import SocialIcons from "../../components/whatchShare/SocialIcons";
import WhoWillWin from "../../components/whoWillWin/WhoWillWin";

import Casino from "../../components/casino/Casino";
import Popup from "../../components/popupWrapper/Popup";
import ProtonVpn from "../../components/protonVpn/ProtonVpn";
import classes from "./football.module.css";
const Page = () => {
  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedOption, setSelectedOption] = useState({index:0, name: 'ENGLISH'});
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

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className={classes["watch-football"]}>
      {showShareLinks && (
        <Popup>
          <ShareLinks toggleShareLinks={toggleShareLinks} />
        </Popup>
      )}

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
          <Chat toggleChat={toggleChat} />
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
          lieageImageDimetions={{
            width: { desktop: "120", tablet: "84", mobile: "35" },
            height: { desktop: "51", tablet: "36", mobile: "35" },
          }}
          firstTeamImageDimentions={{
            width: { desktop: "106", tablet: "75", mobile: "54" },
            height: { desktop: "108", tablet: "76", mobile: "52" },
          }}
          secondTeamImageDimentions={{
            width: { desktop: "80", tablet: "56", mobile: "50" },
            height: { desktop: "110", tablet: "78", mobile: "54" },
          }}
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
          <div className={classes["watch-video-wrapper-bottom"]}>
            <div className={classes["dropdowns"]}>
              <Dropdown
                selectOption={selectOption}
                selectedOption={selectedOption}
                name={"english"}
                options={["1", "2", "3"]}
              />
              <Dropdown
                selectOption={selectOption}
                selectedOption={selectedOption}
                name={"arabic"}
                options={["1", "2", "3"]}
              />
              <Dropdown
                selectOption={selectOption}
                selectedOption={selectedOption}
                name={"espanol"}
                options={["1", "2", "3"]}
              />
              <Dropdown
                selectOption={selectOption}
                selectedOption={selectedOption}
                name={"more"}
                options={["FRENCH", "TURKISH", "PORTUGUE.."]}
              />
            </div>
            <button className={classes["extend-button"]}>EXTEND</button>
          </div>
        </div>
        <div className={classes["bottom"]}>
          <div className={classes["buy-vpn"]}>
            <ProtonVpn />
          </div>
          <div className={classes["takticks"]}>
            <Takticks />
          </div>
          <div className={classes["casino"]}>
            <Casino />
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
