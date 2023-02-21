import Image from "next/image";
import React from "react";
import classes from "./shareLinks.module.css";
const ShareLinks = () => {
  return (
    <div className={classes["share-links"]}>
      <div className={classes["share-links-top"]}>
        <h3 className={classes["share-links-title"]}>Share a link</h3>
        <Image
          className={classes["share-links-exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["share-links-body"]}>
        <div className={classes["share-links-websites"]}>
          <div className={classes["share-links-website"]}>
            <Image
              className={classes["share-links-website"]}
              src="/svg/share-links/embed.svg"
              alt="embed"
              width="60"
              height="60"
            />
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
        </div>
        <Image
          className={classes["share-links-carousel"]}
          src="/svg/share-links/carousel.svg"
          alt="extend"
          width="30"
          height="30"
        />
      </div>
      <div className={classes["share-links-bottom"]}>
        https://ajsports.ch/watchaj
        <Image
          className={classes["share-links-copy"]}
          src="/svg/share-links/copy.svg"
          alt="copy"
          width="45"
          height="45"
        />
      </div>
    </div>
  );
};

export default ShareLinks;
