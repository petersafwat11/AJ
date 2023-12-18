import React from "react";
import AutoMod from "../../../../components/dashboard/chat/autoModQueue/AutoMod";
import ChatUsers from "../../../../components/dashboard/chat/chatUsers/ChatUsers";
import FilteredWords from "../../../../components/dashboard/chat/filteredWords/FilteredWords";
import Poll from "../../../../components/dashboard/chat/poll/Poll";
import Rules from "../../../../components/dashboard/chat/rules/Rules";
import Settings from "../../../../components/dashboard/chat/settings/Settings";
import UserActions from "../../../../components/dashboard/chat/userActions/UserActions";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const page = async () => {
  const chatRules = await getData("chat/chatRules");
  const chatFilteredWords = await getData("chat/chatFilteredWords");
  const chatPolls = await getData("chat/chatPoll");
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Chat Settings</h1>
      <div className={classes["wrapper"]}>
        <div className={classes["first"]}>
          <Settings />
          <AutoMod />
          <Poll data={chatPolls?.data?.data} />
        </div>
        <div className={classes["second"]}>
          <ChatUsers />
          <UserActions />

          <FilteredWords data={chatFilteredWords?.data?.data[0]} />
          <Rules data={chatRules?.data?.data[0]} />
        </div>
      </div>
    </div>
  );
};

export default page;
