import React from "react";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes["standings-header"]}>
      <div className={classes["standings-header-first"]}>
        <p className={classes["standings-header-para"]}>#</p>
        <p className={classes["standings-header-para"]}>Team</p>
      </div>
      <div className={classes["standings-header-second"]}>
        <p className={classes["standings-header-para"]}>PL</p>
        <p className={classes["standings-header-para"]}>P </p>
        <p className={classes["standings-header-para"]}>W</p>
        <p className={classes["standings-header-para"]}>D </p>
        <p className={classes["standings-header-para"]}>L </p>
        <p className={classes["standings-header-para"]}>GF</p>
        <p className={classes["standings-header-para"]}>GA </p>
        <p className={classes["standings-header-para"]}>Last 5</p>
        <p className={classes["standings-header-para"]}>PTS</p>
      </div>
      <div className={classes["standings-header-second-mobile"]}>
        <p className={classes["standings-header-para"]}>P </p>
        <p className={classes["standings-header-para"]}>W</p>
        <p className={classes["standings-header-para"]}>D </p>
        <p className={classes["standings-header-para"]}>L </p>
        <p className={classes["standings-header-para"]}>PTS</p>
      </div>
    </div>
  );
};

export default Header;
