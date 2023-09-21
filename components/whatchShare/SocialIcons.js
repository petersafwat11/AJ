import { usePathname } from "next/navigation";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaShareAlt, FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
// import { TbBrandDiscord } from "react-icons/tb";
import classes from "./socialIcons.module.css";
const SocialIcons = ({ toggleShareLinks, toggleReport, shareUrl, quote }) => {
  const pathname = usePathname();
  // const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  // const quote = "Check out this awesome content!";

  return (
    <div className={classes["watch-video-share"]}>
      <div className={classes["wrapper"]}>
        <TwitterShareButton url={shareUrl} title={quote}>
          <BsTwitter className={classes["twitter-icon"]} />
        </TwitterShareButton>

        {/* <BsTwitter className={classes["twitter-icon"]} /> */}
        <span className={classes["tooltip"]}>Share on Twitter</span>
      </div>
      <div className={classes["wrapper"]}>
        <FacebookShareButton url={shareUrl} quote={quote} title={quote}>
          <MdFacebook className={classes["facebook-icon"]} />
        </FacebookShareButton>
        {/* <MdFacebook className={classes["facebook-icon"]} /> */}

        <span className={classes["tooltip"]}>Share on Facebook</span>
      </div>
      <div className={classes["wrapper"]}>
        <WhatsappShareButton url={shareUrl} title={quote}>
          <IoLogoWhatsapp className={classes["whatsapp-icon"]} />
        </WhatsappShareButton>

        {/* <IoLogoWhatsapp className={classes["whatsapp-icon"]} /> */}
        <span className={classes["tooltip"]}>Share on Whatsapp</span>
      </div>
      {/* <div className={classes["instagram"]}>
        <FiInstagram className={classes["instagram-icon"]} />
        <span className={classes["tooltip"]}>Share on Instagram</span>
      </div> */}
      <div className={classes["reddit"]}>
        <RedditShareButton url={shareUrl} title={quote}>
          <GrReddit className={classes["reddit-icon"]} />
        </RedditShareButton>

        {/* <GrReddit className={classes["reddit-icon"]} /> */}
        <span className={classes["tooltip"]}>Share on Reddit</span>
      </div>
      <div className={classes["wrapper"]}>
        <TelegramShareButton url={shareUrl} title={quote}>
          <FaTelegramPlane className={classes["telegram-icon"]} />
        </TelegramShareButton>

        {/* <FaTelegramPlane className={classes["telegram-icon"]} /> */}
        <span className={classes["tooltip"]}>Share on Telegram</span>
      </div>
      <div className={classes["wrapper"]}>
        <FaShareAlt
          onClick={toggleShareLinks}
          className={classes["share-icon"]}
        />
        <span className={classes["tooltip"]}>Other Websites</span>
      </div>

      <span
        onClick={toggleReport}
        className={classes["watch-video-share-text"]}
      >
        Report Link
      </span>
    </div>
  );
};

export default SocialIcons;
