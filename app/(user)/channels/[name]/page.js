"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import BottomSocial from "../../../../components/bottomSocial/BottomSocial";
import Search from "../../../../components/channels/search/Search";
import HlcPlayer from "../../../../components/hlcPlayer/HlcPlayer";
import Filter from "../../../../components/home-page/filter/Filter";
import LiveBtn from "../../../../components/live-button/LiveButton";
import Marque from "../../../../components/marque/Marque";
import Popup from "../../../../components/popupWrapper/Popup";
import ProtonVpn from "../../../../components/protonVpn/ProtonVpn";
import Report from "../../../../components/report/Report";
import ShareLinks from "../../../../components/shareLinks/ShareLinks";
import ShowMore from "../../../../components/showMore/ShowMore";
import TopLayout from "../../../../components/topLayout/TopLayout";
import WatchNavigation from "../../../../components/watchNavigation/WatchNavigation";
import SocialIcons from "../../../../components/whatchShare/SocialIcons";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import { handleMakingReport } from "../../../../utils/reportFunction";
import classes from "./page.module.css";
const Page = () => {
  const notify = (message, type) => toast[type](message);
  const pathname = usePathname();
  const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  const quote = "Check out this awesome content!";
  const router = useRouter();
  // delete channelsServer.status;
  // const [showChat, setShowChat] = useState(false);
  const [showShareLinks, setShowShareLinks] = useState(false);
  const [showReport, setShowReport] = useState(false);
  // const [changeAvatar, setChangeAvatar] = useState(false);
  // const [selectedAvatar, setSelectedAvatar] = useState("/svg/chat/5.svg");

  const [channelsServers, setChannelsServers] = useState({});
  const [allLanguages, setAllLanguages] = useState([]);
  const [playingServer, setPlayingServer] = useState();

  const [playingServerName, setPlayingServerName] = useState();

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
      if (cause !== "showMore") {
        setPaginationNum(1);
        setChannelsServers({
          channels: response?.data?.data,
          totalResults: response?.results,
        });
        console.log("response", response);
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

      setAllLanguages(response?.allLanguages);
      setPlayingServer(response?.data?.data?.streamLinkUrl);

      setPlayingServerName(response?.data?.data?.channelName);
      console.log("response-one", response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const showMoreHandeler = async () => {
    console.log("show-more");
    const num = paginationNum;
    setPaginationNum(paginationNum + 1);
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

  const handleFilter = async (val) => {
    setFilterValue(val);
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
      "searchOrFilter"
    );
  }, [seacrhValue, fetchNewData, filterValue]);
  useEffect(() => {
    const channelURL = pathname.slice(pathname.lastIndexOf("/") + 1);
    const channelName = channelURL.replace(/%20|-/g, " ");
    window.scrollTo(0, 0);
    fetchDataOnLoad({
      mode: "Visible",
      channelName: channelName,
    });
  }, [fetchDataOnLoad, pathname]);
  return (
    <div className="wrapper">
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

      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <div className={classes["channels"]}>
          {showReport && (
            <Popup>
              <Report handleMakingReport={sendReport} toggleReport={toggleReport} />
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
                  <button className={classes["server-name-btn"]}>
                    Server 1
                  </button>
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
                        // setPlayingServerName(channel?.channelName);
                        // setPlayingServer(channel?.streamLinkUrl);
                        // const replaced = str.replace(/ /g, '-');

                        router.push(
                          `/channels/${channel?.channelName?.replace(
                            / /g,
                            "-"
                          )}`
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
      </div>
    </div>
  );
};

export default Page;
