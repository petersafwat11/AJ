import Image from "next/image";
import React from "react";
import LanguesDropdown from "./LanguesDropdown";
import classes from "./topHeader.module.css";
const TopHeader = () => {
  return (
    <div className={classes["top-header"]}>
      <div className={classes["logo-wrapper"]}>
        <Image src="/svg/header/logo.svg" alt="logo" width="78" height="56" />
      </div>
      <div className={classes["right"]}>
        <div className={classes["top-header-items"]}>
          <p className={classes["top-header-item"]}>DONATE</p>
          <p className={classes["top-header-item"]}>GIVEAWAY</p>
          <p className={classes["top-header-item"]}>PRICING</p>
        </div>
        <div className={classes["user-wrapper"]}>
          <Image src="/svg/header/user.svg" alt="user" width="41" height="41" />
        </div>
        <LanguesDropdown />
      </div>
    </div>
  );
};

export default TopHeader;
