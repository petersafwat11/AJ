"use client";
import Image from "next/image";
import React, { useState } from "react";
import HlcPlayer from "../../hlcPlayer/HlcPlayer";
import LiveBtn from "../../live-button/LiveButton";
import Popup from "../../popupWrapper/Popup";
import ProtonVpn from "../../protonVpn/ProtonVpn";
import Report from "../../report/Report";
import ShareLinks from "../../shareLinks/ShareLinks";
import ShowMore from "../../showMore/ShowMore";
import WatchNavigation from "../../watchNavigation/WatchNavigation";
import SocialIcons from "../../whatchShare/SocialIcons";
import BottomSocial from "../bottomSocial/BottomSocial";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import classes from "./wrapper.module.css";
const ChannelsWrapper = ({ channelsServer }) => {
  // const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  // const [changeAvatar, setChangeAvatar] = useState(false);
  // const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");

  const [channelsServers, setChannelsServers] = useState(channelsServer);
  const [playingServer, setPlayingServer] = useState();
  // channelsServers[0]?.streamLinkUrl

  const [playingServerName, setPlayingServerName] = useState();
  // channelsServers[0]?.channelName

  const [seacrhValue, setSearchValue] = useState("");
  const handleSearch = async (e) => {
    setSearchValue(e.target.value);
    const matchedServers = channelsServer.filter((item) =>
      item.streamLinkUrl.includes(e.target.value)
    );
    setChannelsServers(matchedServers);
  };
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
  const [starting, setStarting] = useState(false);
  const handleStarting = () => {
    console.log("startting");
    setStarting(!starting);
  };
  const showMoreHandeler = () => {
    console.log("clicked show more");
  };
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
            <HlcPlayer
              url={"https://s1.sportshub808.com:8443/hls/btsport2.m3u8"}
            />
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
            <Filter />
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
          {channelsServers?.totalResults > 3 && (
            <div className="show-more-wrapper">
              <ShowMore onClick={showMoreHandeler} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelsWrapper;
