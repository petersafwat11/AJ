import React from "react";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import ChannelName from "../../../../components/dashboard/channelsListings/channelName/ChannelNAme";
import Preview from "../../../../components/dashboard/streamLink/preview/preview";
import StreamLink from "../../../../components/dashboard/streamLink/streamLink/StreamLink";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Edit Stream Link</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>
      <div className={classes["details"]}>
        <ChannelName />
        <div className={classes["details-wrapper"]}>
          <StreamLink />
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default page;
