import Image from "next/image";
import Link from "next/link";
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
          <Link href="/donate" className={classes["top-header-item"]}>
            DONATE
          </Link>
          <Link href="/giveaway" className={classes["top-header-item"]}>
            GIVEAWAY
          </Link>
          <Link href="/pricing" className={classes["top-header-item"]}>
            PRICING
          </Link>
        </div>
        <div className={classes["user-wrapper"]}>
          <Image src="/svg/header/user.svg" alt="user" width="15" height="15" />
        </div>
        <LanguesDropdown />
      </div>
    </div>
  );
};

export default TopHeader;
