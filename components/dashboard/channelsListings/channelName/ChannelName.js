"use client";
import React, { useState } from "react";
import classes from "./channelName.module.css";
const ChannelName = () => {
  const [channelName, setChannelName] = useState("");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>ChannelNAme</h2>
      <input
        value={channelName}
        onChange={(e) => {
          setChannelName(e.target.value);
        }}
        placeholder="channel name"
        className={classes["input"]}
      />
    </div>
  );
};

export default ChannelName;
