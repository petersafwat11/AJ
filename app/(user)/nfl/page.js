"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Casino from "../../../../components/casino/Casino";
import Chat from "../../../../components/chat/Chat";
import Dropdown from "../../../../components/dropdown/Dropdown";
import ExtendButton from "../../../../components/extendButton/ExtendButton";
import Marque from "../../../../components/marque/Marque";
import Popup from "../../../../components/popupWrapper/Popup";
import ProtonVpn from "../../../../components/protonVpn/ProtonVpn";
import Report from "../../../../components/report/Report";
import ShareLinks from "../../../../components/shareLinks/ShareLinks";
import TopLayout from "../../../../components/topLayout/TopLayout";
import WatchDetails from "../../../../components/watch-details/WatchDetailsFootball";
import MatchSummery from "../../../../components/watchtaktick/nfl/MatchSummery";
import SocialIcons from "../../../../components/whatchShare/SocialIcons";
import WhoWillWin from "../../../../components/whoWillWin/WhoWillWin";
import classes from "./nfl.module.css";
// import VideoJs from "../../../../components/video/VideoJs";
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
              lieageImage={"/svg/watch/nfl-3.svg"}
              lieageImageDimetions={{
                width: { desktop: "53", tablet: "37", mobile: "32" },
                height: { desktop: "72", tablet: "51", mobile: "44" },
              }}
              firstTeamImageDimentions={{
                width: { desktop: "128", tablet: "90", mobile: "71" },
                height: { desktop: "86", tablet: "60", mobile: "84" },
              }}
              secondTeamImageDimentions={{
                width: { desktop: "124", tablet: "87", mobile: "77" },
                height: { desktop: "75", tablet: "53", mobile: "41" },
              }}
              firstTeamImage={"/svg/watch/nfl-1.svg"}
              firstTeamName={"Philadelphia E..."}
              seconteamImage={"/svg/watch/nfl-2.svg"}
              seconteamName={"Kansas City"}
              date={"Aug 18 15:00"}
              place={"Alliegiant Stadium"}
              // half={"2nd Half: 47’"}
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
                  ))}
                </div>
                <ExtendButton />
                {/* <button className={classes["extend-button"]}>EXTEND</button> */}
              </div>
            </div>
            <div className={classes["bottom"]}>
              <div className={classes["buy-vpn"]}>
                <ProtonVpn />
              </div>
              <div className={classes["takticks"]}>
                <MatchSummery />
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
    </div>
  );
};

export default Page;
