"use client";
import Image from "next/image";
import { useState } from "react";
import classes from "./userActions.module.css";

const UserActions = () => {
  const [notValid, setNotValid] = useState();
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["selected-avatar"]}>
          <Image
            src="/svg/chat/avatars/Avatars/5.svg"
            alt="avatar"
            height="105"
            width="91"
          />
        </div>
      </div>
      <div className={classes["body"]}>
        <div className={classes["user-data"]}>
          <p className={classes["name"]}>messiog10</p>
          <p className={classes["id"]}>15.25.63.0.1</p>
        </div>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["mute-button"]}>Mute </button>
        <button className={classes["ban-button"]}>IP Ban</button>
      </div>
    </div>
  );
};
export default UserActions;
