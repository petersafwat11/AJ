"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chat from "../../components/chat/Chat";
import Dropdown from "../../components/dropdown/Dropdown";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import WatchDetails from "../../components/watch-details/WatchDetailsFootball";
import Takticks from "../../components/watchtaktick/takticksBasketball";
import SocialIcons from "../../components/whatchShare/SocialIcons";
import WhoWillWin from "../../components/whoWillWin/WhoWillWin";

import Casino from "../../components/casino/Casino";
import Popup from "../../components/popupWrapper/Popup";
import ProtonVpn from "../../components/protonVpn/ProtonVpn";
import classes from "./basketball.module.css";
import TopLayout from "../../components/topLayout/TopLayout";
const Page = () => {
  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    index: 0,
    name: "ENGLISH",
  });

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
    <div className={classes["wrapper"]}>
      <TopLayout />
      <section className={classes["watch"]}>
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
            lieageImage={"/svg/watch/basketball-nba.svg"}
            firstTeamImage={"/svg/watch/basketball-1.svg"}
            lieageImageDimetions={{
              width: { desktop: "79", tablet: "56", mobile: "55" },
              height: { desktop: "46", tablet: "33", mobile: "32" },
            }}
            firstTeamImageDimentions={{
              width: { desktop: "150", tablet: "105", mobile: "78" },
              height: { desktop: "93", tablet: "65", mobile: "49" },
            }}
            secondTeamImageDimentions={{
              width: { desktop: "109", tablet: "97", mobile: "59" },
              height: { desktop: "109", tablet: "97", mobile: "59" },
            }}
            firstTeamName={"LA Lakers"}
            seconteamImage={"/svg/watch/basketball-2.svg"}
            seconteamName={"Chicago’s Bulls"}
            date={"Aug 18 15:00"}
            place={"Crypto.com Arena"}
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
    </div>
  );
};

export default Page;
