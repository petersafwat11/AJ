import Image from "next/image";
import React from "react";
import classes from "./chatUsers.module.css";
const ChatUsers = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Users in Chat</h2>
      <div className={classes["members"]}>
        <p className={classes["active-members"]}>Active Members</p>
        <p className={classes["banned-members"]}>Active Members</p>
      </div>
      <div className={classes["search-wrapper"]}>
        <input type="search" className={classes["search"]} />
      </div>
      <p className={classes["num-of-active-users"]}>Active Users: 6520</p>
      <div className={classes["active-users"]}>
        <div className={classes["user-wrapper"]}></div>
        <div className={classes["user"]}>
          <Image
            src="/svg/chat/avatars/Avatars/5.svg"
            alt="avatar"
            height="105"
            width="91"
          />

          <p className={classes["user-name"]}>messiog10</p>
        </div>
        <p className={classes["user-id"]}>15.25.63.0.1</p>
      </div>
    </div>
  );
};

export default ChatUsers;
