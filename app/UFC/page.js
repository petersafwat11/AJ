"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chat from "../../components/chat/Chat";
import Dropdown from "../../components/dropdown/Dropdown";
import Report from "../../components/report/Report";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import WatchDetails from "../../components/watch-details/WatchDetailsFootball";
import SocialIcons from "../../components/whatchShare/SocialIcons";
import WhoWillWin from "../../components/whoWillWin/WhoWillWin";

import Casino from "../../components/casino/Casino";
import Popup from "../../components/popupWrapper/Popup";
import ProtonVpn from "../../components/protonVpn/ProtonVpn";
import TopLayout from "../../components/topLayout/TopLayout";
// import VideoJs from "../../components/video/VideoJs";
import ExtendButton from "../../components/extendButton/ExtendButton";
import Marque from "../../components/marque/Marque";
import classes from "./boxing&others.module.css";
const Page = () => {
  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    index: 0,
    name: "english",
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
      <div className={classes["wrapper-2"]}>
        <Marque />

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
              width="120"
              height="120"
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
              lieageImage={"/svg/watch/WBA.svg"}
              firstTeamImage={"/svg/watch/boxing-1.svg"}
              lieageImageDimetions={{
                width: { desktop: "59", tablet: "45", mobile: "35" },
                height: { desktop: "59", tablet: "45", mobile: "35" },
              }}
              firstTeamName={"Anthony Joshua"}
              firstTeamImageDimentions={{
                width: { desktop: "130", tablet: "90", mobile: "75" },
                height: { desktop: "130", tablet: "90", mobile: "75" },
              }}
              seconteamImage={"/svg/watch/boxing-2.svg"}
              secondTeamImageDimentions={{
                width: { desktop: "130", tablet: "90", mobile: "75" },
                height: { desktop: "130", tablet: "90", mobile: "75" },
              }}
              seconteamName={"Tyson Fury"}
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
                  {[
                    { name: "english", options: ["1", "2", "3"] },
                    { name: "العربية", options: ["1", "2", "3"] },
                    { name: "espanol", options: ["1", "2", "3"] },
                    {
                      name: "more",
                      options: ["FRENCH", "TURKISH", "PORTUGUE.."],
                    },
                  ].map((item, index) => (
                    <Dropdown
                      key={index}
                      selectOption={selectOption}
                      selectedOption={selectedOption}
                      name={item.name}
                      options={item.options}
                    />
                  ))}{" "}
                </div>
                <ExtendButton />
              </div>
            </div>
            <div className={classes["bottom"]}>
              <div className={classes["buy-vpn"]}>
                <ProtonVpn />
              </div>
              {/* <div className={classes["takticks"]}>
            <Takticks />
          </div> */}
              <div className={classes["who-will-win"]}>
                <WhoWillWin />
              </div>
              <div className={classes["casino"]}>
                <Casino />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;