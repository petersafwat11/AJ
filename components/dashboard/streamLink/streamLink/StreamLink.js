"use client";
import React, { useState } from "react";
import classes from "./streamLink.module.css";
const StreamLink = () => {
  const [streamLink, setStreamLink] = useState({ URL: "", RMTPKey: "" });
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Stream Link</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="url" className={classes["label"]}>
            URL
          </label>
          <input
            value={streamLink.URL}
            id="url"
            onChange={(e) => {
              setStreamLink({
                URL: e.target.value,
                RMTPKey: streamLink.RMTPKey,
              });
            }}
            placeholder="URL"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="RMTPKey" className={classes["label"]}>
            RMTP Key
          </label>
          <input
            value={streamLink.RMTPKey}
            id="RMTPKey"
            onChange={(e) => {
              setStreamLink({
                RMTPKey: e.target.value,
                URL: streamLink.URL,
              });
            }}
            className={classes["input"]}
            placeholder="RMTP Key"
          />
        </div>
      </div>
    </div>
  );
};
export default StreamLink;
