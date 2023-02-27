import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaShareAlt, FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { TbBrandDiscord } from "react-icons/tb";
import classes from "./socialIcons.module.css";
const SocialIcons = ({ toggleShareLinks, toggleReport }) => {
  return (
    <div className={classes["watch-video-share"]}>
      <BsTwitter className={classes["twitter-icon"]} />
      <MdFacebook className={classes["facebook-icon"]} />
      <div className={classes["instagram-div"]}>
        <FiInstagram className={classes["instagram-icon"]} />
      </div>
      <IoLogoWhatsapp className={classes["whatsapp-icon"]} />
      <TbBrandDiscord className={classes["discord-icon"]} />
      <FaTelegramPlane className={classes["telegram-icon"]} />
      <FaShareAlt
        onClick={toggleShareLinks}
        className={classes["share-icon"]}
      />
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
