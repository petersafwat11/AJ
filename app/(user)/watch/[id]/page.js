"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Report from "../../../../components/report/Report";
import ShareLinks from "../../../../components/shareLinks/ShareLinks";
import WatchDetails from "../../../../components/watch-details/WatchDetailsFootball";
import SocialIcons from "../../../../components/whatchShare/SocialIcons";

import { usePathname } from "next/navigation";
import HlcPlayer from "../../../../components/hlcPlayer/HlcPlayer";
import Marque from "../../../../components/marque/Marque";
import Popup from "../../../../components/popupWrapper/Popup";
import ServersButtons from "../../../../components/serverButtons/ServersButtons";
import TopLayout from "../../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../../components/underDevelopment/component/underDevelopment";
import WatchNavigation from "../../../../components/watchNavigation/WatchNavigation";
import { getMatchDate } from "../../../../utils/convertDateFormat";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [matchData, setMatchData] = useState({});
  // const [otherMatches, setOtherMatches] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const matchId = pathname.slice(pathname.lastIndexOf("/") + 1);
    const pageData = async () => {
      try {
        const eventData = await getData(`sports/${matchId}`);
        console.log(
          eventData?.data?.servers[0]?.mainLanguages?.filter(
            (lang) => lang.checked === true
          )
        );
        setMatchData(eventData?.data);
        //   setOtherMatches({
        //     total: currentEvents.totalOtherMatches,
        //     matches: currentEvents.data.filter((item) => item.flagged === false),
        //   });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    pageData();
  }, [setError, pathname]);

  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    index: 0,
    name: "english",
  });
  // const toggleChat = () => {
  //   setShowChat(!showChat);
  // };
  const toggleShareLinks = () => {
    setShowShareLinks(!showShareLinks);
  };
  const toggleReport = () => {
    setShowReport(!showReport);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
  };
  const [showVideo, setshowVideo] = useState(false);
  useEffect(() => {
    setshowVideo(true);
  }, []);
  return (
    <div className="wrapper">
      <TopLayout />
      {/* <video autoPlay loop muted>
        <source src="/video-background/1.mp4" type="video/mp4" />
      </video>
 */}
      <div className="wrapper-2">
        <Marque />

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
          {/* {!showChat && (
            <Image
              onClick={toggleChat}
              className={classes["chat-icon"]}
              src="/svg/chat-floating.svg"
              alt="chat"
              width="120"
              height="120"
            />
          )} */}
          {/* {showChat && (
            <div className={classes["chat"]}>
              <Chat toggleChat={toggleChat} />
            </div>
          )} */}
          {/* <div className={classes["navigate"]}>
            <Link href="/">Home</Link>
            <span> &gt; </span>
            <Link href="/channels">Watch</Link>
          </div> */}
          <WatchNavigation page={"Watch"} />
          {/* {loading ? (
            <p className="center"> loading</p>
          ) : ( */}
          <div className={classes["container"]}>
            <WatchDetails
              lieageImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.leagueLogo}`}
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
              firstTeamImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.firstTeamLogo}`}
              firstTeamName={matchData?.firstTeamName}
              seconteamImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.secondTeamLogo}`}
              seconteamName={matchData?.secondTeamName}
              date={getMatchDate(matchData?.eventDate)}
              place={matchData.eventStadium}
              // half={"2nd Half: 47’"}
            />
            <div className="watch-video-wrapper">
              <div className={classes["social-icons"]}>
                <SocialIcons
                  toggleShareLinks={toggleShareLinks}
                  toggleReport={toggleReport}
                />
              </div>

              <div id="my-root-div" className="watch-video">
                {/* <EventCountDown eventStartDate={matchData?.eventDate} /> */}
                <HlcPlayer
                  url={matchData?.servers?.mainLanguages?.english?.channels[0]}
                />
                {/* <PlayerContainer /> */}
              </div>
              <div className={classes["watch-video-wrapper-bottom"]}>
                <ServersButtons
                  servers={[
                    "ENGLISH",
                    "العربية",
                    "ESPAÑOL",
                    "ESPAÑOL",
                    "ESPAÑOL",
                    "DUTCH",
                  ]}
                />
                {/* <ExtendButton /> */}
                <div className={classes["modes-icons"]}>
                  <div className={classes["icon-div"]}>
                    <Image
                      className={classes["threat-mode-icon"]}
                      src="/svg/watch/threat-mode.svg"
                      alt="threat-mode"
                      height={18}
                      width={18}
                    />
                  </div>
                  <div className={classes["icon-div"]}>
                    <Image
                      className={classes["threat-mode-icon"]}
                      src="/svg/watch/extend.svg"
                      alt="extend-mode"
                      height={15}
                      width={15}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <UnderDevelopment />
            </div>{" "}
            {/* <div className={classes["bottom"]}>
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
            </div> */}
          </div>
          {/* )}{" "} */}
        </section>
      </div>
    </div>
  );
};

export default Page;
