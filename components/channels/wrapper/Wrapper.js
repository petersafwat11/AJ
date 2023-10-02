"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import BottomSocial from "../../bottomSocial/BottomSocial";
import HlcPlayer from "../../hlcPlayer/HlcPlayer";
import Filter from "../../home-page/filter/Filter";
import LiveBtn from "../../live-button/LiveButton";
import Popup from "../../popupWrapper/Popup";
import ProtonVpn from "../../protonVpn/ProtonVpn";
import Report from "../../report/Report";
import ShareLinks from "../../shareLinks/ShareLinks";
import ShowMore from "../../showMore/ShowMore";
import WatchNavigation from "../../watchNavigation/WatchNavigation";
import SocialIcons from "../../whatchShare/SocialIcons";
import Search from "../search/Search";
import classes from "./wrapper.module.css";
import { handleMakingReport } from "../../../utils/reportFunction";
import Chat from "../../chat/Chat";
const ChannelsWrapper = ({ channelsServer, allLanguages }) => {
  const router = useRouter();
  const pathname = usePathname();
  const notify = (message, type) => toast[type](message);
  const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  const quote = "Check out this awesome content!";

  const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");

  const [channelsServers, setChannelsServers] = useState(channelsServer);

  const [playingServer, setPlayingServer] = useState(
    channelsServers?.channels[0]?.streamLinkUrl
  );

  const [playingServerName, setPlayingServerName] = useState(
    channelsServers?.channels[0]?.channelName
  );

  const [seacrhValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const [paginationNum, setPaginationNum] = useState(1);
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
  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
  };
  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("channels", query);
      console.log(response);
      if (cause === "filter" || cause === "search") {
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
        language: filterValue === "All" ? undefined : filterValue,
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "showMore"
    );
  };
  const handleSearch = async (val) => {
    setSearchValue(val);
  };

  const sendReport = async (val) => {
    const reportData = {
      event: playingServerName,
      server: "Server 1",
      reason: val,
      eventLink: shareUrl,
    };

    await handleMakingReport(reportData, toggleReport, notify);
  };
  useEffect(() => {
    channelsRef.current = channelsServers?.channels;
  }, [channelsServers]);

  useEffect(() => {
    fetchNewData(
      {
        page: 1,
        limit: 8,
        mode: "Visible",
        language: filterValue === "All" ? undefined : filterValue,
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "search"
    );
  }, [seacrhValue, fetchNewData, filterValue]);
  const handleFilter = async (val) => {
    setFilterValue(val);
  };
  useEffect(() => {
    fetchNewData(
      {
        page: 1,
        limit: 8,
        mode: "Visible",
        language: filterValue === "All" ? undefined : filterValue,
      },
      "filter"
    );
  }, [filterValue, fetchNewData]);
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
          <Report
            handleMakingReport={sendReport}
            toggleReport={toggleReport}
          />
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
        <WatchNavigation page={"channels"} />
        <div className={classes["top-heading"]}>
          <span className={classes["heading-span"]}> Now Playing </span>
          <h3 className={classes["heading-title"]}>{playingServerName}</h3>
          <LiveBtn text={"LIVE"} />
        </div>

        <div className="watch-video-wrapper">
          <div className={classes["social-icons"]}>
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
              <button className={classes["server-name-btn"]}>Server 1</button>
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
              options={["All", ...allLanguages]}
              handleFilter={handleFilter}
              filterValue={filterValue}
            />
          </div>
          <div className={classes["watch-video-servers"]}>
            {channelsServers?.channels?.length > 0 ? (
              channelsServers?.channels.map((channel, index) => (
                <button
                  onClick={() => {
                    // setPlayingServerName(channel?.channelName);
                    // setPlayingServer(channel?.streamLinkUrl);
                    router.push(
                      `/channels/${channel?.channelName?.replace(/ /g, "-")}`
                    );
                  }}
                  key={index}
                  className={classes["watch-video-servers-button"]}
                >
                  {channel?.channelName}
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
