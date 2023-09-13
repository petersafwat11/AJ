"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
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
import BottomSocial from "../bottomSocial/BottomSocial";
import Search from "../search/Search";
import classes from "./wrapper.module.css";
const ChannelsWrapper = ({ channelsServer, allLanguages }) => {
  // const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  // const [changeAvatar, setChangeAvatar] = useState(false);
  // const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");

  const [channelsServers, setChannelsServers] = useState(channelsServer);

  console.log("channel", channelsServers);
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

  // const toggleChat = () => {
  //   setShowChat(!showChat);
  // };
  const toggleShareLinks = () => {
    setShowShareLinks(!showShareLinks);
  };
  const toggleReport = () => {
    setShowReport(!showReport);
  };
  // const toggleChangeAvatar = () => {
  //   setChangeAvatar(!changeAvatar);
  // };
  // const selectAvatar = (avatar) => {
  //   setSelectedAvatar(avatar);
  // };
  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("channels", query);
      console.log("response", response);
      if (cause === "filter") {
        setSearchValue("");
        setPaginationNum(1);
      } else if (cause === "search") {
        setFilterValue("All");
        setPaginationNum(1);
      }

      cause !== "showMore"
        ? setChannelsServers({
            channels: response?.data?.data,
            totalResults: response?.results,
          })
        : setChannelsServers({
            // eslint-disable-next-line no-unsafe-optional-chaining
            channels: [...channelsRef.current, ...response?.data?.data],
            totalResults: response?.results,
          });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const showMoreHandeler = async () => {
    console.log("show-more");
    const num = paginationNum;
    await fetchNewData(
      {
        limit: 4,
        skip: 8 + (num - 1) * 4,
        mode: "Visible",
        language: filterValue === "All" ? undefined : filterValue,
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "showMore"
    );
    setPaginationNum(paginationNum + 1);
  };
  const handleSearch = async (val) => {
    setSearchValue(val);
  };

  useEffect(() => {
    channelsRef.current = channelsServers.channels;
  }, [channelsServers]);

  useEffect(() => {
    fetchNewData(
      {
        page: 1,
        limit: 8,
        mode: "Visible",
        searchValue: seacrhValue,
        or: ["channelName"],
      },
      "search"
    );
  }, [seacrhValue, fetchNewData]);
  const handleFilter = async (val) => {
    setFilterValue(val);
    console.log(val);
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
  console.log(playingServer, playingServer);
  return (
    <div className={classes["channels"]}>
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
      )}
      {showChat && (
        <div className={classes["chat"]}>
          <Chat
            selectedAvatar={selectedAvatar}
            toggleChangeAvatar={toggleChangeAvatar}
            toggleChat={toggleChat}
          />
        </div>
      )} */}
      {showShareLinks && (
        <Popup>
          <ShareLinks toggleShareLinks={toggleShareLinks} />
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
          <div className={classes["vpn"]}>
            <ProtonVpn />
          </div>
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
                    setPlayingServerName(channel.channelName);
                    setPlayingServer(channel.streamLinkUrl);
                  }}
                  key={index}
                  className={classes["watch-video-servers-button"]}
                >
                  {channel.channelName}
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
