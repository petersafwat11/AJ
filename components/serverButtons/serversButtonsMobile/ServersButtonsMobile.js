import React from "react";
import classes from "./serversButtonsMobile.module.css";
const ServersButtonsMobile = ({
  playingServerLang,
  servers,
  handleServerClicks,
}) => {
  return (
    <div className={classes["container"]}>
      {servers?.map((item, index) => (
        <div
          onClick={() => {
            handleServerClicks(item, Object.keys(item)[0]);
          }}
          key={`${index}-${item}`}
          className={
            playingServerLang === Object.keys(item)[0]
              ? classes["lang-selected"]
              : classes["lang"]
          }
        >
          <p
            className={
              playingServerLang === Object.keys(item)[0]
                ? classes["text-selected"]
                : classes["lang-text"]
            }
          >
            {Object.keys(item)[0]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServersButtonsMobile;
