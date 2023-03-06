import Image from "next/image";
import React from "react";
import classes from "./protonVpn.module.css";
const ProtonVpn = () => {
  return (
    <div className={classes["proton-vpn"]}>
      <Image className={classes['logo']} src="svg/watch/vpn.svg" alt="logo" width="96" height="20" />
      <div className={classes["body"]}>
        <p className={classes['para']}>ISP blocking the stream?</p>
        <h2 className={classes['title']}>Buy an Ultra-Fast VPN to Stream Smoothly</h2>
        <button className={classes['button']}>
          Buy now for $10
          <Image
            src="svg/watch/arrow-right.svg"
            alt="logo"
            width="9"
            height="9"
          />
        </button>
      </div>
    </div>
  );
};

export default ProtonVpn;
