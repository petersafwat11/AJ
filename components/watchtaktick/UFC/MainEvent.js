import Image from "next/image";
import React from "react";
import classes from "./mainEvent.module.css";
const MainEvent = () => {
  return (
    <div className={classes["main-event"]}>
      <Image
        className={classes["logo"]}
        src="/svg/watch/ufc/logo.svg"
        alt="logo"
        width="95"
        height="39"
      />
      <p className={classes["title"]}>UFC 229</p>
      <div className={classes["main-event-header"]}>
        <p className={classes["player-name"]}>A. JOSHUA</p>
        <p className={classes["player-name"]}>T. FURY</p>
      </div>
      <div className={classes["main-event-stats"]}>
        {["AGE", "HEIGHT", "WEIGHT", "REACH", "RECORD"].map((item, index) => (
          <div
            className={classes["stat-item"]}
            key={Math.random() * 10 + index}
          >
            <p>15</p>
            <p>{item} </p>
            <p>2</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainEvent;
