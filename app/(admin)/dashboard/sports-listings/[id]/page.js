"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer } from "react";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
// import SportCategory from "../../../../components/dashboard/createListings/sportCategory/SportCategory";
import { toast } from "react-toastify";
import SportCategory from "../../../../../components/dashboard/createListings/SportCategory/SportCategory";
import EventsDetails from "../../../../../components/dashboard/createListings/eventDetails/EventsDetails";
import PlayerTiming from "../../../../../components/dashboard/createListings/playerTiming/PlayerTiming";
import Poll from "../../../../../components/dashboard/createListings/poll/Poll";
import TeamsLogos from "../../../../../components/dashboard/createListings/teamsLogos/TeamsLogos";
import TeamsNames from "../../../../../components/dashboard/createListings/teamsNames/TeamsNames";

import {
  deleteItem,
  getData,
  saveItem,
} from "../../../../../utils/dashboardHelperFunctions";
import classes from "./page.module.css";

const intialValue = {
  sportCategory: "",
  firstTeamName: "",
  secondTeamName: "",
  eventDate: "",
  matchId: "",
  eventLeague: "",
  eventStadium: "",
  backgroundLogo: null,
  leagueLogo: null,
  firstTeamLogo: null,
  secondTeamLogo: null,
  playStream: "",
  removeStream: "",
  removeCountdown: "",
  showsPoll: false,
  firstTeamPoll: "",
  secondTeamPoll: "",
};
const matchReducer = (state, action) => {
  console.log("state", state);
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "CLEAR-ALL") {
    return intialValue;
  } else if (action.type === "SPORT-CATEGORY") {
    return {
      ...state,
      sportCategory: action.value,
    };
  } else if (action.type === "FIRST-TEAM-NAME") {
    return {
      ...state,
      firstTeamName: action.value,
    };
  } else if (action.type === "SECOND-TEAM-NAME") {
    return {
      ...state,
      secondTeamName: action.value,
    };
  } else if (action.type === "EVENT-DATE") {
    return {
      ...state,
      eventDate: action.value,
    };
  } else if (action.type === "MATCH-ID") {
    return {
      ...state,
      matchId: Number(action.value),
    };
  } else if (action.type === "EVENT-LEAGUE") {
    return {
      ...state,
      eventLeague: action.value,
    };
  } else if (action.type === "EVENT-STADIUM") {
    return {
      ...state,
      eventStadium: action.value,
    };
  } else if (action.type === "BACKGROUND-LOGO") {
    return {
      ...state,
      backgroundLogo: action.value,
    };
  } else if (action.type === "LEAGUE-LOGO") {
    return {
      ...state,
      leagueLogo: action.value,
    };
  } else if (action.type === "FIRST-TEAM-LOGO") {
    return {
      ...state,
      firstTeamLogo: action.value,
    };
  } else if (action.type === "SECOND-TEAM-LOGO") {
    return {
      ...state,
      secondTeamLogo: action.value,
    };
  } else if (action.type === "PLAY-STREAM") {
    return {
      ...state,
      playStream: action.value,
    };
  } else if (action.type === "REMOVE-STREAM") {
    return {
      ...state,
      removeStream: action.value,
    };
  } else if (action.type === "REMOVE-COUNTDOWN") {
    return {
      ...state,
      removeCountdown: action.value,
    };
  } else if (action.type === "FIRST-TEAM-POLL") {
    return {
      ...state,
      firstTeamPoll: action.value,
    };
  } else if (action.type === "SECOND-TEAM-POLL") {
    return {
      ...state,
      secondTeamPoll: action.value,
    };
  } else if (action.type === "SHOWS-POLL") {
    return {
      ...state,
      showsPoll: action.value,
    };
  }
};
const Page = () => {
  const notify = (message, type) => toast[type](message);
  const pathname = usePathname();
  const router = useRouter();

  const [match, dispatchDetail] = useReducer(matchReducer, intialValue);
  const saveChanges = async () => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(match)) {
      formData.append(key, value);
    }
    delete formData.servers;

    saveItem(
      pathname,
      formData,
      dispatchDetail,
      notify,
      router,
      "sports",
      "formData"
    );
  };
  const deleteMatch = async () => {
    deleteItem(pathname, router, "sports");
  };
  useEffect(() => {
    pathname.split("/")[3] !== "create"
      ? getData(pathname.split("/")[3], dispatchDetail, "sports")
      : "";
  }, [pathname, router]);
  return (
    <div className={classes["create-listing"]}>
      <h1 className={classes["title"]}>Create New Listing</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteMatch}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <div className={classes["details"]}>
        <p className={classes["label"]}>Listing ID: 28</p>
        <div className={classes["first"]}>
          <SportCategory
            data={match?.sportCategory}
            dispatchDetail={dispatchDetail}
          />
          <TeamsNames
            data={{
              firstTeamName: match?.firstTeamName,
              secondTeamName: match?.secondTeamName,
            }}
            dispatchDetail={dispatchDetail}
          />
          <EventsDetails
            data={{
              matchId: match?.matchId,
              eventDate: match?.eventDate,
              eventLeague: match?.eventLeague,
              eventStadium: match?.eventStadium,
            }}
            dispatchDetail={dispatchDetail}
          />
        </div>
        <div className={classes["second"]}>
          <TeamsLogos
            data={{
              backgroundLogo: match?.backgroundLogo,
              leagueLogo: match?.leagueLogo,
              firstTeamLogo: match?.firstTeamLogo,
              secondTeamLogo: match?.secondTeamLogo,
            }}
            dispatchDetail={dispatchDetail}
          />

          <PlayerTiming
            dispatchActionType={"PLAY-STREAM"}
            data={match?.playStream}
            dispatchDetail={dispatchDetail}
            width={"13.8rem"}
            title={"When to allow stream to play"}
          />
          <PlayerTiming
            dispatchActionType={"REMOVE-STREAM"}
            data={match?.removeStream}
            dispatchDetail={dispatchDetail}
            title={"When to delete page & listing"}
          />
          <PlayerTiming
            dispatchActionType={"REMOVE-COUNTDOWN"}
            data={match?.removeCountdown}
            dispatchDetail={dispatchDetail}
            title={"When to show LIVE & remove countdown"}
          />
          <Poll
            data={{
              showsPoll: match?.showsPoll,
              firstTeamPoll: match?.firstTeamPoll,
              secondTeamPoll: match?.secondTeamPoll,
            }}
            dispatchDetail={dispatchDetail}
          />
        </div>
      </div>
      {/* <div className={classes["servers-and-langs"]}>
        <ServersAndLanguages />
      </div> */}
    </div>
  );
};

export default Page;
