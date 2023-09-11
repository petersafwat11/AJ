import Image from "next/image";
import React from "react";
import classes from "./changeServer.module.css";

const ChangeServer = ({ toggleServers }) => {
  let selected = "Sky Sports Premier League";
  return (
    <div className={classes["container"]}>
      <div className={classes["servers"]}>
        {[
          "Sky Sports Premier League",
          "SuperSport Football",
          "BT Sports 1",
        ].map((item, index) => (
          <p
            onClick={toggleServers}
            key={index}
            className={
              item === selected ? classes["selected-server"] : classes["server"]
            }
          >
            {item}
          </p>
        ))}
      </div>
      <Image
        onClick={toggleServers}
        className={classes["close"]}
        src="/svg/channels/close.svg"
        alt="close"
        width="45"
        height="45"
      />
    </div>
  );
};

export default ChangeServer;
