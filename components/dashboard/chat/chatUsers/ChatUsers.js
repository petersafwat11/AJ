"use client";

import Image from "next/image";
import React, { useState } from "react";
import classes from "./chatUsers.module.css";
const ChatUsers = () => {
  const [members, setmembers] = useState("active-members");
  const [search, setSearch] = useState("Search user");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Users in Chat</h2>
      <div className={classes["members"]}>
        <p
          onClick={() => {
            setmembers("active-members");
          }}
          style={{
            color: members === "active-members" ? "#f9f9f9" : "",
            borderBottom: members === "active-members" ? "1px solid white" : "",
          }}
          className={classes["active-members"]}
        >
          Active Members
        </p>
        <p
          onClick={() => {
            setmembers("banned-members");
          }}
          style={{
            color: members === "banned-members" ? "#f9f9f9" : "",
            borderBottom: members === "banned-members" ? "1px solid white" : "",
          }}
          className={classes["banned-members"]}
        >
          Banned Members
        </p>
      </div>
      <div className={classes["search-wrapper"]}>
        <input
          value={search}
          onClick={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className={classes["search"]}
        />
        <Image
          className={classes["search-icon"]}
          src="/svg/dashboard/chat/search.svg"
          alt="seacrh"
          width="14"
          height="14"
        />
      </div>
      <p className={classes["num-of-active-users"]}>Active Users: 6520</p>
      <div className={classes["active-users"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div key={index} className={classes["user"]}>
            <div className={classes["user-details"]}>
              <Image
                className={classes["avatar"]}
                src="/svg/chat/avatars/Avatars/5.svg"
                alt="avatar"
                height="28"
                width="23"
              />
              <p className={classes["user-name"]}>messiog10</p>
            </div>
            <p className={classes["user-id"]}>15.25.63.0.1</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatUsers;
