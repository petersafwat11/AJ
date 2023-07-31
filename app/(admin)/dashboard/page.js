import React from "react";
import ChartsWrapper from "../../../components/dashboard/stats/chartsWrapper/ChartsWrapper";
import Chat from "../../../components/dashboard/stats/chat/Chat";
import Feedback from "../../../components/dashboard/stats/feedback/Feedback";
import Listings from "../../../components/dashboard/stats/listings/Listings";
import ReportedLinks from "../../../components/dashboard/stats/reported-links/ReportedLinks";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <ChartsWrapper />
      <div className={classes["second"]}>
        <Listings />
        <Chat />
        <ReportedLinks />
        <Feedback />
      </div>
    </div>
  );
};

export default page;
