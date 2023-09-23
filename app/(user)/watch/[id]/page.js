"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Report from "../../../../components/report/Report";
import ShareLinks from "../../../../components/shareLinks/ShareLinks";
import WatchDetails from "../../../../components/watch-details/WatchDetailsFootball";
import SocialIcons from "../../../../components/whatchShare/SocialIcons";

import { usePathname } from "next/navigation";
import BottomSocial from "../../../../components/bottomSocial/BottomSocial";
import ChangeServer from "../../../../components/changeServer/ChangeServer";
import HlcPlayer from "../../../../components/hlcPlayer/HlcPlayer";
import Marque from "../../../../components/marque/Marque";
import Popup from "../../../../components/popupWrapper/Popup";
import ServersButtons from "../../../../components/serverButtons/ServersButtons";
import ServersButtonsMobile from "../../../../components/serverButtons/serversButtonsMobile/ServersButtonsMobile";
import TopLayout from "../../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../../components/underDevelopment/component/underDevelopment";
import WatchDetailsSingleTeam from "../../../../components/watchDetailsSingleTeam/WatchDetailsSingleTeam";
import WatchNavigation from "../../../../components/watchNavigation/WatchNavigation";
import { changeServersFormat } from "../../../../utils/changeServersFormat";
import { getMatchDate } from "../../../../utils/convertDateFormat";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const Page = () => {
  const pathname = usePathname();
  const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  const quote = "Check out this awesome content!";
  const parseTeamNames = (str) => {
    const decodedStr = decodeURIComponent(str.replace(/-/g, "%20"));
    console.log("decodedStr", decodedStr);
    const [firstTeamName, secondTeamName] = decodedStr.split(/VS|vs|Vs|vS/);
    console.log("firstTeamNameee", firstTeamName, secondTeamName);

    return { firstTeamName, secondTeamName };
  };

  const [loading, setLoading] = useState(true);
  const [matchData, setMatchData] = useState({});

  const [playingServer, setPlayingServer] = useState(null);
  const [langOtherServersAvailable, setlangOtherServersAvailable] = useState(
    []
  );
  const [error, setError] = useState(false);
  const [showChangeServer, setShowChangeServer] = useState(false);
  useEffect(() => {
    // const matchId = pathname.slice(pathname.lastIndexOf("/") + 1);
    const { firstTeamName, secondTeamName } = parseTeamNames(
      pathname.slice(pathname.lastIndexOf("/") + 1)
    );
    console.log("pathname", pathname.slice(pathname.lastIndexOf("/") + 1));
    let query;
    if (firstTeamName && secondTeamName) {
      query = {
        firstTeamName,
        secondTeamName,
      };
    } else {
      query = {
        teamsTitle: firstTeamName,
      };
    }
    const pageData = async () => {
      try {
        const response = await getData(`sports/teamNames`, query);
        console.log("response", response);
        const data = response?.data?.data;
        console.log("response", data);

        data.servers = changeServersFormat(data?.servers);
        setPlayingServer({
          server: data?.servers[0][Object.keys(data?.servers[0])][0],
          lang: Object.keys(data?.servers[0])[0],
        });
        setMatchData(data);
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
  // const toggleChat = () => {
  //   setShowChat(!showChat);
  // };
  const toggleShareLinks = () => {
    setShowShareLinks(!showShareLinks);
  };
  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const toggleServers = () => {
    setShowChangeServer(!showChangeServer);
  };
  const handleServerClicks = (val, lang) => {
    console.log(val);
    toggleServers();
    setlangOtherServersAvailable({ servers: val[Object.keys(val)[0]], lang });
    console.log(val[Object.keys(val)[0]]);
  };
  const handleChangeServers = (val, lang) => {
    console.log("change server");
    toggleServers();
    // setPlayingServerLang(lang);
    setPlayingServer({ server: val, lang });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div id="wrapper" className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <section className={classes["watch-football"]}>
          {showShareLinks && (
            <Popup>
              <ShareLinks
                shareUrl={shareUrl}
                quote={quote}
                toggleShareLinks={toggleShareLinks}
              />
            </Popup>
          )}
          {showReport && (
            <Popup>
              <Report toggleReport={toggleReport} />
            </Popup>
          )}
          {showChangeServer && (
            <Popup>
              <ChangeServer
                playingServer={playingServer}
                langOtherServersAvailable={langOtherServersAvailable?.servers}
                lang={langOtherServersAvailable?.lang}
                handleChangeServers={handleChangeServers}
                toggleServers={toggleServers}
              />
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
          <WatchNavigation page={"Watch"} />
          <div className={classes["container"]}>
            {matchData?.firstTeamName && matchData?.secondTeamName ? (
              <WatchDetails
                lieageImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.leagueLogo}`}
                lieageImageDimetions={{
                  width: { desktop: "120", tablet: "84", mobile: "78" },
                  height: { desktop: "51", tablet: "36", mobile: "35" },
                }}
                firstTeamImageDimentions={{
                  width: { desktop: "106", tablet: "75", mobile: "54" },
                  height: { desktop: "108", tablet: "76", mobile: "52" },
                }}
                secondTeamImageDimentions={{
                  width: { desktop: "106", tablet: "75", mobile: "54" },
                  height: { desktop: "110", tablet: "78", mobile: "54" },
                }}
                firstTeamImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.firstTeamLogo}`}
                firstTeamName={matchData?.firstTeamName}
                seconteamImage={`${process.env.STATIC_SERVER}/img/matches/${matchData?.secondTeamLogo}`}
                seconteamName={matchData?.secondTeamName}
                date={getMatchDate(matchData?.eventDate)}
                place={matchData?.eventStadium}
                // half={"2nd Half: 47’"}
              />
            ) : (
              <WatchDetailsSingleTeam
                width={"100"}
                leagueLogo={`${process.env.STATIC_SERVER}/img/matches/${matchData?.leagueLogo}`}
                flagLogo={`${process.env.STATIC_SERVER}/img/matches/${matchData?.flagLogo}`}
                date={getMatchDate(matchData?.eventDate)}
                place={matchData?.eventStadium}
                teamName={matchData?.teamsTitle}
              />
            )}
            <div className="watch-video-wrapper">
              <div className={classes["social-icons"]}>
                <SocialIcons
                  shareUrl={shareUrl}
                  quote={quote}
                  toggleShareLinks={toggleShareLinks}
                  toggleReport={toggleReport}
                />
              </div>

              <div id="my-root-div" className="watch-video">
                {/* <EventCountDown eventStartDate={matchData?.eventDate} /> */}
                <HlcPlayer url={playingServer?.server?.streamLinkUrl} />
                {/* <PlayerContainer /> */}
              </div>
              <div className={classes["watch-video-wrapper-bottom"]}>
                <BottomSocial />
                <ServersButtonsMobile
                  playingServerLang={playingServer?.lang}
                  handleServerClicks={handleServerClicks}
                  servers={matchData?.servers}
                />

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
              <div className={classes["servers"]}>
                <ServersButtons
                  playingServerLang={playingServer?.lang}
                  handleServerClicks={handleServerClicks}
                  servers={matchData?.servers}
                />
              </div>
            </div>
            <div className="center-under-dev">
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
