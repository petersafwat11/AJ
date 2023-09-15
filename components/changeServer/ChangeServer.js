import Image from "next/image";
import React from "react";
import classes from "./changeServer.module.css";

const ChangeServer = ({
  lang,
  langOtherServersAvailable,
  handleChangeServers,
  toggleServers,
}) => {
  console.log("langOtherServersAvailable", langOtherServersAvailable);
  let selected = "Sky Sports Premier League";
  return (
    <div className={classes["container"]}>
      <div className={classes["servers"]}>
        {langOtherServersAvailable?.map((item, index) => (
          <p
            onClick={() => {
              handleChangeServers(item, lang);
            }}
            key={index}
            className={
              item === selected ? classes["selected-server"] : classes["server"]
            }
          >
            {item.streamLinkName}
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
