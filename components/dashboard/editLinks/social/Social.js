"use client";
import React, { useState } from "react";
import classes from "./social.module.css";
const Social = () => {
  const [socialLinks, setSocialLinks] = useState({
    Facebook: "",
    Telegram: "",
    Twitter: "",
    Tiktok: "",
    Discord: "",
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Facebook" className={classes["label"]}>
            Facebook
          </label>
          <input
            value={socialLinks.Facebook}
            id="Facebook"
            onChange={(e) => {
              setSocialLinks({ ...setSocialLinks, Facebook: e.target.value });
            }}
            placeholder="Facebook"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Telegram" className={classes["label"]}>
            Telegram
          </label>
          <input
            value={socialLinks.Telegram}
            id="Telegram"
            onChange={(e) => {
              setSocialLinks({ ...setSocialLinks, Telegram: e.target.value });
            }}
            placeholder="Telegram"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["second"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Twitter" className={classes["label"]}>
            Twitter
          </label>
          <input
            value={socialLinks.Twitter}
            id="Twitter"
            onChange={(e) => {
              setSocialLinks({ ...setSocialLinks, Twitter: e.target.value });
            }}
            placeholder="Twitter"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Tiktok" className={classes["label"]}>
            Tiktok
          </label>
          <input
            value={socialLinks.Tiktok}
            id="Tiktok"
            onChange={(e) => {
              setSocialLinks({ ...setSocialLinks, Tiktok: e.target.value });
            }}
            placeholder="Tiktok"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["third"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Discord" className={classes["label"]}>
            Discord
          </label>
          <input
            value={socialLinks.Discord}
            id="Discord"
            onChange={(e) => {
              setSocialLinks({ ...setSocialLinks, Discord: e.target.value });
            }}
            placeholder="Discord"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
