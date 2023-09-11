import React from "react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import classes from "./bottomSocial.module.css";
const BottomSocial = () => {
  return (
    <div className={classes["container"]}>
      <h4 className={classes["text"]}>Our Socials</h4>
      <div className={classes["icons"]}>
        <FaDiscord />
        <TfiTwitterAlt />
        <FaTelegramPlane />
      </div>
    </div>
  );
};

export default BottomSocial;
