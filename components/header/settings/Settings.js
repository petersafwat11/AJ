import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { langs } from "./data";
import classes from "./settings.module.css";
const Settings = ({ toggleSettings }) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h3 className={classes["title"]}>Regional Settings</h3>
        <Image
          onClick={toggleSettings}
          className={classes["close"]}
          src="/svg/home/close.svg"
          alt="logo"
          width="21"
          height="21"
        />
      </div>
      <div className={classes["body"]}>
        <div className={classes["settings-options"]}>
          <SettingOption
            type="Language"
            defaultVal={"English (United Kingdom)"}
            options={langs}
          />
          <SettingOption
            type="Country / Region"
            defaultVal={"United Kingdom"}
            options={langs}
          />
          <SettingOption
            type="Currency"
            defaultVal={"GBP - £"}
            options={langs}
          />
        </div>
        <button className={classes["save-btn"]}>Save</button>
      </div>
    </div>
  );
};

export default Settings;

export const SettingOption = ({ type, defaultVal, options }) => {
  return (
    <div className={classes["setting-option"]}>
      <p className={classes["label"]}>{type}</p>
      <div className={classes["selector"]}>
        <p>{defaultVal}</p>
        <IoIosArrowDown className={classes["arrow"]} />
      </div>
      <div className={classes["options"]}>
        {options.map((opt, index) => (
          <p key={index} className={classes["option"]}>
            {opt.name}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};
