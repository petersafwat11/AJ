import React from "react";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import ChannelName from "../../../../components/dashboard/channelsListings/channelName/ChannelNAme";
import Mode from "../../../../components/dashboard/channelsListings/mode/Mode";
import StreamLinks from "../../../../components/dashboard/channelsListings/streamLinks/StreamLinks";
import classes from "./pages.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>

      <div className={classes["details"]}>
        <div className={classes["details-wrapper"]}>
          <ChannelName />
          <Mode />
        </div>
        <StreamLinks />
      </div>
    </div>
  );
};

export default page;
