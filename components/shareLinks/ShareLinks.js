"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classes from "./shareLinks.module.css";
const ShareLinks = ({ toggleShareLinks }) => {
  const manipaletePosition = useRef(null);
  const [position, setPosition] = useState(0);
  const [clicks, setClicks] = useState(0);
  const maxClicks = 2;
  useEffect(() => {
    console.log("position", position);
    if (clicks <= maxClicks) {
      manipaletePosition.current.style.left = -position + "px";
    }
  }, [position, setPosition, clicks]);

  return (
    <div className={classes["share-links"]}>
      <div className={classes["share-links-top"]}>
        <h3 className={classes["share-links-title"]}>Share a link</h3>
        <Image
          onClick={toggleShareLinks}
          className={classes["share-links-exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["share-links-body"]}>
        <div className={classes["share-links-wrapper"]}>
          <div
            ref={manipaletePosition}
            className={classes["share-links-websites"]}
          >
            <div className={classes["share-links-website"]}>
              <div className={classes["share-links-website-embed"]}>
                <Image
                  src="/svg/share-links/vector.svg"
                  alt="embed"
                  width="28"
                  height="18"
                />
              </div>
              <p>Embed</p>
            </div>
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/youtube.svg"
                alt="youtube"
                width="60"
                height="60"
              />
              <p>Youtube</p>
            </div>{" "}
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/pinterist.svg"
                alt="pinterest"
                width="60"
                height="60"
              />
              <p>Pinterest</p>
            </div>{" "}
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/snapchat.svg"
                alt="snapshat"
                width="60"
                height="60"
              />
              <p>Snapchat</p>
            </div>
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/discord.svg"
                alt="discord"
                width="60"
                height="60"
              />
              <p>Discord</p>
            </div>
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/skype.svg"
                alt="snapshat"
                width="60"
                height="60"
              />
              <p>Skybe</p>
            </div>
            <div className={classes["share-links-website"]}>
              <Image
                className={classes["share-links-website"]}
                src="/svg/share-links/gmail.svg"
                alt="snapshat"
                width="60"
                height="60"
              />
              <p>Gmail</p>
            </div>
          </div>
        </div>
        <Image
          onClick={() => {
            setPosition(position + 78);
            setClicks(clicks + 1);
          }}
          className={classes["share-links-carousel"]}
          src="/svg/share-links/carousel.svg"
          alt="extend"
          width="30"
          height="30"
        />
      </div>
      <div className={classes["share-links-bottom"]}>
        https://ajsports.ch/watchaj
        <div className={classes["share-links-copy"]}>
          <Image
          
            src="/svg/share-links/copy.svg"
            alt="copy"
            width="21"
            height="21"
          />
        </div>
      </div>
    </div>
  );
};

export default ShareLinks;
