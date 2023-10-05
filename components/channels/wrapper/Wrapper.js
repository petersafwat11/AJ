"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import { handleMakingReport } from "../../../utils/reportFunction";
import BottomSocial from "../../bottomSocial/BottomSocial";
import Chat from "../../chat/Chat";
import HlcPlayer from "../../hlcPlayer/HlcPlayer";
import Filter from "../../home-page/filter/Filter";
import LiveBtn from "../../live-button/LiveButton";
import Popup from "../../popupWrapper/Popup";
import Report from "../../report/Report";
import ShareLinks from "../../shareLinks/ShareLinks";
import ShowMore from "../../showMore/ShowMore";
import ThanksMessage from "../../thanksMessage/ThanksMessage";
import WatchNavigation from "../../watchNavigation/WatchNavigation";
import SocialIcons from "../../whatchShare/SocialIcons";
import Search from "../search/Search";
import classes from "./wrapper.module.css";
const ChannelsWrapper = ({ channelsServer, langs }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const channel = searchParams.get("channel")?.replace(/-/g, " ");
  const notify = (message, type) => toast[type](message);
  const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  const quote = "Check out this awesome content!";
  const data = !channel ? channelsServer : {};
  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");

  const [channelsServers, setChannelsServers] = useState(
    // data
    channelsServer
  );
  // const [allLanguages, setAllLanguages] = useState(langs);
  const [playingServer, setPlayingServer] = useState(
    // channelsServers?.channels[0]?.streamLinkUrl
    data?.channels ? data?.channels[0]?.streamLinkUrl : null
  );

  const [playingServerName, setPlayingServerName] = useState(
    // channelsServers?.channels[0]?.channelName
    data?.channels ? data?.channels[0]?.channelName : null
  );

  const [seacrhValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("All Languages");
  const [paginationNum, setPaginationNum] = useState(1);
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const channelsRef = useRef();
  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const toggleShareLinks = () => {
    setShowShareLinks(!showShareLinks);
  };
  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const toggleChangeAvatar = () => {
    setChangeAvatar(!changeAvatar);
  };
  const toggleThanksMessage = () => {
    setShowThanksMessage(!showThanksMessage);
  };

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };
  const sendReport = async (val) => {
    const reportData = {
      event: playingServerName,
      server: "Server 1",
      reason: val,
      eventLink: shareUrl,
    };

    await handleMakingReport(reportData, toggleReport, toggleThanksMessage);
  };

  const showMoreHandeler = async () => {
    console.log("show-more");
    const num = paginationNum;
    setPaginationNum(paginationNum + 1);
    console.log("num", num, paginationNum);
    await fetchNewData(
      {
        limit: 20,
        skip: 8 + (num - 1) * 20,
        mode: "Visible",
        language: filterValue === "All Languages" ? undefined : filterValue,
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "showMore"
    );
  };
  const handleSearch = async (val) => {
    setSearchValue(val);
  };
  const handleFilter = async (val) => {
    setFilterValue(val);
  };
  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("channels", query);
      console.log(response);
      if (cause === "searchOrFilter") {
        setPaginationNum(1);
        setChannelsServers({
          channels: response?.data?.data,
          totalResults: response?.results,
        });
      } else {
        let other = [];
        other = response?.data?.data;

        setChannelsServers({
          channels: [...channelsRef.current, ...other],
          totalResults: response?.results,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchDataOnLoad = useCallback(async (query) => {
    try {
      const response = await getData("channels/channelName", query);
      // setAllLanguages(response?.allLanguages);
      setPlayingServer(response?.data?.data?.streamLinkUrl);

      setPlayingServerName(response?.data?.data?.channelName);
      console.log("response-one", response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    channelsRef.current = channelsServers?.channels;
  }, [channelsServers]);

  useEffect(() => {
    fetchNewData(
      {
        page: 1,
        limit: 8,
        mode: "Visible",
        language: filterValue === "All Languages" ? undefined : filterValue,
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "searchOrFilter"
    );
  }, [seacrhValue, fetchNewData, filterValue]);
  useEffect(() => {
    if (!channel) {
      return;
    }
    window.scrollTo(0, 0);
    fetchDataOnLoad({
      mode: "Visible",
      channelName: channel,
    });
  }, [fetchDataOnLoad, channel]);
  useEffect(() => {
    if (showThanksMessage) {
      setTimeout(() => {
        setShowThanksMessage(false);
      }, [5000]);
    }
  }, [showThanksMessage]);

  return (
    <div className={classes["channels"]}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />

      {showReport && (
        <Popup>
          <Report handleMakingReport={sendReport} toggleReport={toggleReport} />
        </Popup>
      )}
      {showThanksMessage && (
        <Popup>
          <ThanksMessage />
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
          <Chat
            selectedAvatar={selectedAvatar}
            toggleChangeAvatar={toggleChangeAvatar}
            toggleChat={toggleChat}
          />
        </div>
      )}
      {showShareLinks && (
        <Popup>
          <ShareLinks
            shareUrl={shareUrl}
            quote={quote}
            toggleShareLinks={toggleShareLinks}
          />
        </Popup>
      )}
      <div className={classes["container"]}>
        <div className={classes["top-heading"]}>
          <span className={classes["heading-span"]}> Now Playing </span>
          <h3 className={classes["heading-title"]}>{playingServerName}</h3>
          <LiveBtn text={"LIVE"} />
        </div>

        <div className="watch-video-wrapper">
          <div className={classes["watch-video-top"]}>
            <WatchNavigation page={"channels"} />

            <SocialIcons
              shareUrl={shareUrl}
              quote={quote}
              toggleShareLinks={toggleShareLinks}
              toggleReport={toggleReport}
            />
          </div>

          <div className="watch-video">
            <HlcPlayer url={playingServer} />
          </div>
          <div className={classes["watch-video-options"]}>
            <BottomSocial />
            <div className={classes["server-btn-wrapper"]}>
              <button className={classes["server-name-btn"]}>Full HD</button>
            </div>

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
          {/* <div className={classes["vpn"]}>
            <ProtonVpn />
          </div> */}
          <div className={classes["sort-search-wrapper"]}>
            <Search seacrhValue={seacrhValue} handleSearch={handleSearch} />
            <Filter
              channels={true}
              options={["All Languages", ...langs]}
              handleFilter={handleFilter}
              filterValue={filterValue}
            />
          </div>
          <div className={classes["watch-video-servers"]}>
            {channelsServers?.channels?.length > 0 ? (
              channelsServers?.channels.map((channelobj, index) => (
                <button
                  onClick={() => {
                    router.push(
                      `/channels?channel=${channelobj?.channelName?.replace(
                        / /g,
                        "-"
                      )}`
                    );
                  }}
                  key={index}
                  className={
                    channel === channelobj?.channelName
                      ? classes["servers-button-active"]
                      : classes["watch-video-servers-button"]
                  }
                >
                  {channel === channelobj?.channelName && (
                    <div className={classes["check-div"]}>
                      <Image
                        className={classes["checked-icon"]}
                        width="9"
                        height="8"
                        alt="checked"
                        src="/svg/channels/checked.svg"
                      />
                    </div>
                  )}
                  {channelobj?.channelName}
                </button>
              ))
            ) : (
              <p>{`there isn't channels avaialbe now`}</p>
            )}
          </div>
          {channelsServers?.totalResults >
            channelsServers?.channels?.length && (
            <div className="show-more-wrapper">
              <ShowMore showMoreHandeler={showMoreHandeler} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelsWrapper;
