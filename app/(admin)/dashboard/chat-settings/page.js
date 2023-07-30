import React from "react";
import AutoMod from "../../../../components/dashboard/chat/autoModQueue/AutoMod";
import ChatUsers from "../../../../components/dashboard/chat/chatUsers/ChatUsers";
import FilteredWords from "../../../../components/dashboard/chat/filteredWords/FilteredWords";
import Poll from "../../../../components/dashboard/chat/poll/Poll";
import Rules from "../../../../components/dashboard/chat/rules/Rules";
import Settings from "../../../../components/dashboard/chat/settings/Settings";
import UserActions from "../../../../components/dashboard/chat/userActions/UserActions";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Chat Settings</h1>
      <div className={classes["wrapper"]}>
        <div className={classes["first"]}>
          <Settings />
          <AutoMod />
          <Poll />
        </div>
        <div className={classes["second"]}>
          <ChatUsers />
          <UserActions />

          <FilteredWords />
          <Rules />
        </div>
      </div>
    </div>
  );
};

export default page;
