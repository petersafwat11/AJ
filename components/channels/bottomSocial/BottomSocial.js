import React, { useEffect } from "react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import classes from "./bottomSocial.module.css";
const BottomSocial = () => {
  useEffect(() => {
    console.log("will fetch");
  }, []);
  return (
    <div className={classes["container"]}>
      <h4 className={classes["text"]}>Our Socials</h4>
      <div className={classes["icons"]}>
        {/* <FaDiscord />
      <TfiTwitterAlt />
      <FaTelegramPlane /> */}

        <a className={classes["link"]} href="">
          <FaDiscord />
        </a>
        <a className={classes["link"]} href="">
          <TfiTwitterAlt />
        </a>
        <a className={classes["link"]} href="">
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
};

export default BottomSocial;
