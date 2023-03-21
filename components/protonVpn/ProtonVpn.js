import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import classes from "./protonVpn.module.css";
const ProtonVpn = () => {
  return (
    <div className={classes["proton-vpn"]}>
      <div className={classes["body"]}>
        <p className={classes["para"]}>ISP blocking the stream?</p>
        <h2 className={classes["title"]}>
          Buy an Ultra-Fast VPN to Stream Smoothly
        </h2>
        <button className={classes["button"]}>
          Buy now for $10
          <BiRightArrowAlt className={classes["right-arrow"]} />
        </button>
      </div>
    </div>
  );
};

export default ProtonVpn;
