import React from "react";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
// import SportCategory from "../../../../components/dashboard/createListings/sportCategory/SportCategory";
import SportCategory from "../../../../../components/dashboard/createListings/SportCategory/SportCategory";
import EventsDetails from "../../../../../components/dashboard/createListings/eventDetails/EventsDetails";
import PlayerTiming from "../../../../../components/dashboard/createListings/playerTiming/PlayerTiming";
import Poll from "../../../../../components/dashboard/createListings/poll/Poll";
import ServersAndLanguages from "../../../../../components/dashboard/createListings/serversAndLanguages/ServersAndLanguages";
import TeamsLogos from "../../../../../components/dashboard/createListings/teamsLogos/TeamsLogos";
import TeamsNames from "../../../../../components/dashboard/createListings/teamsNames/TeamsNames";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["create-listing"]}>
      <h1 className={classes["title"]}>Create New Listing</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>
      <div className={classes["details"]}>
        <p className={classes["label"]}>Listing ID: 28</p>
        <div className={classes["first"]}>
          <SportCategory />
          <TeamsNames />
          <EventsDetails />
        </div>
        <div className={classes["second"]}>
          <TeamsLogos />
          <PlayerTiming
            width={"251px"}
            title={"When to allow stream to play"}
          />
          <PlayerTiming title={"When to delete page & listing"} />
          <PlayerTiming title={"When to show LIVE & remove countdown"} />
          <Poll />
        </div>
      </div>
      <div>
        <ServersAndLanguages />
      </div>
    </div>
  );
};

export default page;
