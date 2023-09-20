"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useReducer } from "react";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
// import SportCategory from "../../../../components/dashboard/createListings/sportCategory/SportCategory";
import { toast } from "react-toastify";
import SportCategory from "../../../../../components/dashboard/createListings/SportCategory/SportCategory";
import EventsDetails from "../../../../../components/dashboard/createListings/eventDetails/EventsDetails";
import PlayerTiming from "../../../../../components/dashboard/createListings/playerTiming/PlayerTiming";
import Poll from "../../../../../components/dashboard/createListings/poll/Poll";
import TeamsLogos from "../../../../../components/dashboard/createListings/teamsLogos/TeamsLogos";
import TeamsNames from "../../../../../components/dashboard/createListings/teamsNames/TeamsNames";

import EventId from "../../../../../components/dashboard/createListings/EventId/EventId";
import { combineDateAndTime } from "../../../../../utils/combineDate";
import {
  convertDate,
  getMatchDate,
} from "../../../../../utils/convertDateFormat";
import {
  deleteItem,
  saveItem,
} from "../../../../../utils/dashboardHelperFunctions";
import { getData } from "../../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";

const intialValue = {
  sportCategory: "",
  firstTeamName: "",
  secondTeamName: "",
  teamsTitle: "",
  eventDate: "",
  eventDateText: "",
  eventTime: "",
  matchId: "",
  eventLeague: "",
  eventStadium: "",
  backgroundLogo: null,
  leagueLogo: null,
  firstTeamLogo: null,
  secondTeamLogo: null,
  flagLogo: null,
  playStream: { date: "", time: "" },
  removeStream: { date: "", time: "" },
  removeCountdown: { date: "", time: "" },
  showsPoll: false,
  firstTeamPoll: "",
  secondTeamPoll: "",
};
const matchReducer = (state, action) => {
  console.log("state", state);
  if (action.type === "UPDATE-ALL") {
    const val = { ...action.value };
    delete val._id;
    return val;
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
  } else if (action.type === "TEAMS-TITLE") {
    return {
      ...state,
      teamsTitle: action.value,
    };
  } else if (action.type === "EVENT-DATE") {
    return {
      ...state,
      eventDate: action.value,
    };
  } else if (action.type === "EVENT-DATE-TEXT") {
    return {
      ...state,
      eventDateText: action.value,
    };
  } else if (action.type === "EVENT-TIME") {
    return {
      ...state,
      eventTime: action.value,
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
  } else if (action.type === "FLAG-LOGO") {
    return {
      ...state,
      flagLogo: action.value,
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
    const playStream = combineDateAndTime(
      match.playStream.date,
      match.playStream.time
    );
    const removeStream = combineDateAndTime(
      match.removeStream.date,
      match.removeStream.time
    );
    const removeCountdown = combineDateAndTime(
      match.removeCountdown.date,
      match.removeCountdown.time
    );
    const eventDate = combineDateAndTime(match.eventDate, match.eventTime);
    let data = { ...match };
    data.playStream = playStream;
    data.removeStream = removeStream;
    data.removeCountdown = removeCountdown;
    delete data.eventDate;
    delete data.eventTime;
    data.eventDate = eventDate;
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
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
  const requestData = useCallback(async () => {
    try {
      const response = await getData(`sports/${pathname.split("/")[3]}`);
      const playStream = convertDate(response.data.playStream);
      const removeStream = convertDate(response.data.removeStream);
      const removeCountdown = convertDate(response.data.removeCountdown);

      const eventDate = convertDate(response.data.eventDate).date;
      const eventTime = convertDate(response.data.eventDate).time;

      const dateText = getMatchDate(response.data.eventDate, true);
      let data = { ...response.data };
      data.playStream = playStream;
      data.removeStream = removeStream;
      data.removeCountdown = removeCountdown;
      data.eventDate = eventDate;
      data.eventTime = eventTime;
      data.eventDateText = dateText;
      dispatchDetail({ type: "UPDATE-ALL", value: data });
    } catch (err) {
      console.log(err);
    }
  }, [pathname]);
  useEffect(() => {
    pathname.split("/")[3] !== "create" ? requestData() : "";
  }, [pathname, requestData]);
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
              teamsTitle: match?.teamsTitle,
              firstTeamName: match?.firstTeamName,
              secondTeamName: match?.secondTeamName,
            }}
            dispatchDetail={dispatchDetail}
          />
          <EventsDetails
            data={{
              eventDate: match?.eventDate,
              eventLeague: match?.eventLeague,
              eventStadium: match?.eventStadium,
              eventTime: match?.eventTime,
              eventDateText: match?.eventDateText,
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
              flagLogo: match?.flagLogo,
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
        <div className={classes["third"]}>
          <EventId data={match?.matchId} dispatchDetail={dispatchDetail} />
        </div>
      </div>
      {/* <div className={classes["servers-and-langs"]}>
        <ServersAndLanguages />
      </div> */}
    </div>
  );
};

export default Page;
