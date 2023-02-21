import Image from "next/image";
import React from "react";
import Chat from "../../components/chat/Chat";
import LiveButton from "../../components/live-button/LiveButton";
import ShareLinks from "../../components/shareLinks/ShareLinks";
import classes from "./channels.module.css";
const page = () => {
  return (
    <div className={classes["channels"]}>
      <div className={classes["container"]}>
        <div className={classes["top-heading"]}>
          <span className={classes["heading-span"]}> Now Playing </span>
          <h3 className={classes["heading-title"]}>Sky Sports</h3>
          <LiveButton/>
         
        </div>
        <div className={classes["watch-video-wrapper"]}>
          <div className={classes["watch-video-first"]}>
            <div className={classes["watch-video-share"]}>
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/twitter.svg"
                alt="twitter-icon"
                width="20"
                height="20"
              />
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/facebook.svg"
                alt="facebook-icon"
                width="20"
                height="20"
              />
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/insta.svg"
                alt="insta-icon"
                width="20"
                height="20"
              />
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/telegram.svg"
                alt="telegram-icon"
                width="20"
                height="20"
              />
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/insta.svg"
                alt="insta-icon"
                width="20"
                height="20"
              />
              <Image
                className={classes["watch-video-share-icon"]}
                src="/svg/social-icons/telegram.svg"
                alt="telegram-icon"
                width="20"
                height="20"
              />
              <span className={classes["watch-video-share-text"]}>
                Report Link
              </span>
            </div>
            <div className={classes["watch-video"]}></div>
            <div className={classes["watch-video-options"]}>
              <button className={classes["watch-video-options-server-name"]}>
                Server 1
              </button>
              <button className={classes["watch-video-options-extend-button"]}>
                EXTEND
              </button>
            </div>
            <div className={classes["watch-video-servers"]}>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
              <button className={classes["watch-video-servers-button"]}>
                Sky Sports 1
              </button>
            </div>
          </div>
          <div className={classes["watch-video-second"]}>
            <Chat />
          </div>
        </div>
        <div className={classes['share-links']}>
          <ShareLinks/>
        </div>
      </div>
    </div>
  );
};

export default page;
