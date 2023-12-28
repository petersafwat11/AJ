"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import EventsDetails from "../../../../../components/dashboard/createListings/eventDetails/EventsDetails";
import PlayerTiming from "../../../../../components/dashboard/createListings/playerTiming/PlayerTiming";
import Poll from "../../../../../components/dashboard/createListings/poll/Poll";
import SportCategory from "../../../../../components/dashboard/createListings/SportCategory/SportCategory";
import TeamsLogos from "../../../../../components/dashboard/createListings/teamsLogos/TeamsLogos";
import TeamsNames from "../../../../../components/dashboard/createListings/teamsNames/TeamsNames";

import BoxingAPI from "../../../../../components/dashboard/createListings/customAPI/boxing/BoxingAPI";
import F1API from "../../../../../components/dashboard/createListings/customAPI/f1/F1API";
import HorseRacingAPI from "../../../../../components/dashboard/createListings/customAPI/horseRacing/HorseRacingAPI";
import NascarAPI from "../../../../../components/dashboard/createListings/customAPI/nascar/NascarAPI";
import NetballAPI from "../../../../../components/dashboard/createListings/customAPI/netball/NetballAPI";
import TennisAPI from "../../../../../components/dashboard/createListings/customAPI/tennis/TennisAPI";
import VolleyballAPI from "../../../../../components/dashboard/createListings/customAPI/volleyball/VolleyballAPI";
import WWEAPI from "../../../../../components/dashboard/createListings/customAPI/wwe/WWEAPI";
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
import {
  driversReducer,
  featuredFightersReducer,
  fightersReducer,
  horseRidersReducer,
  lineupsReducer,
  mainEventReducer,
  matchReducer,
  positionsReducer,
  tennisLineupsReducer,
  volleyballDriversReducer,
  wwweFightersReducer,
} from "../reducers/reducers";
import {
  boxingFightersIntialVal,
  driversIntialVal,
  featuredFightersIntialVal,
  horseRidersIntialVal,
  lineupsIntialVal,
  mainEventIntialVal,
  matchIntialVal,
  positionsIntialVal,
  tennisLineupsIntialVal,
  VolleyballIntialVal,
  wweFightersIntialVal,
} from "./intialValues";
import classes from "./page.module.css";
import { saveCustomAPI } from "./saveCustomAPI";

const Page = () => {
  const notify = (message, type) => toast[type](message);
  const pathname = usePathname();

  const router = useRouter();

  const [match, dispatchDetail] = useReducer(matchReducer, matchIntialVal);

  /// custom API reducers
  const [mainEvent, dispatchMainEvent] = useReducer(
    mainEventReducer,
    mainEventIntialVal
  );

  const [booxingfighters, dispatchBoxingFighters] = useReducer(
    fightersReducer,
    boxingFightersIntialVal
  );
  const [positions, dispatchPositions] = useReducer(
    positionsReducer,
    positionsIntialVal
  );
  const [horseRiders, dispatchHorseRiders] = useReducer(
    horseRidersReducer,
    horseRidersIntialVal
  );
  const [drivers, dispatchDrivers] = useReducer(
    driversReducer,
    driversIntialVal
  );
  const [lineups, dispatchLineups] = useReducer(
    lineupsReducer,
    lineupsIntialVal
  );
  const [tennisLineups, dispatchTennisLineups] = useReducer(
    tennisLineupsReducer,
    tennisLineupsIntialVal
  );
  const [teamPlayers, dispatchTeamPlayers] = useReducer(
    volleyballDriversReducer,
    VolleyballIntialVal
  );
  const [wweFighters, dispatchWweFighters] = useReducer(
    wwweFightersReducer,
    wweFightersIntialVal
  );
  const [featuredFighters, dispatchfeaturedFighters] = useReducer(
    featuredFightersReducer,
    featuredFightersIntialVal
  );

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
    const endedEvent = combineDateAndTime(
      match.endedEvent.date,
      match.endedEvent.time
    );
    const eventDate = combineDateAndTime(match.eventDate, match.eventTime);
    let data = { ...match };
    const customAPIData =
      match.sportCategory === "fights" || match.sportCategory === "ufc"
        ? { booxingfighters: booxingfighters, mainEvent: mainEvent }
        : match.sportCategory === "f1"
        ? positions
        : match.sportCategory === "horseracing"
        ? horseRiders
        : match.sportCategory === "nascar"
        ? drivers
        : match.sportCategory === "netball"
        ? lineups
        : match.sportCategory === "tennis"
        ? tennisLineups
        : match.sportCategory === "volleyball"
        ? teamPlayers
        : match.sportCategory === "wwe"
        ? {
            wweFighters: wweFighters,
            featuredFighters: featuredFighters,
          }
        : "";

    data.playStream = playStream;
    data.removeStream = removeStream;
    data.removeCountdown = removeCountdown;
    data.endedEvent = endedEvent;
    delete data.eventDate;
    delete data.eventTime;
    data.eventDate = eventDate;
    data?.teamsTitle?.length < 1 ? (data.teamsTitle = null) : "";
    data?.firstTeamName?.length < 1 ? (data.firstTeamName = null) : "";
    data?.secondTeamName?.length < 1 ? (data.secondTeamName = null) : "";
    data?.matchId?.length < 1 ? (data.matchId = null) : "";
    let formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    delete formData.servers;
    let customAPIID;
    if (customAPIData) {
      console.log("customAPIData exist");
      const customAPIResponse = await saveCustomAPI(
        pathname,
        customAPIData,
        "sports/customAPI"
      );
      customAPIID = customAPIResponse?.data?.data?.data?._id;
      console.log("customAPIID", customAPIID);
      formData.append("customAPI", customAPIID);
      await saveItem(
        pathname,
        formData,
        dispatchDetail,
        notify,
        router,
        "sports",
        "formData"
      );
    } else {
      await saveItem(
        pathname,
        formData,
        dispatchDetail,
        notify,
        router,
        "sports",
        "formData"
      );
    }
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
      const endedEvent = convertDate(response.data.endedEvent);

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
      data.endedEvent = endedEvent;
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
          <PlayerTiming
            dispatchActionType={"ENDED-EVENT"}
            data={match?.endedEvent}
            dispatchDetail={dispatchDetail}
            title={"When to remove LIVE & display ended event"}
          />
        </div>
        <div className={classes["third"]}>
          <Poll
            data={{
              showsPoll: match?.showsPoll,
              firstTeamPoll: match?.firstTeamPoll,
              secondTeamPoll: match?.secondTeamPoll,
            }}
            dispatchDetail={dispatchDetail}
          />

          <EventId data={match?.matchId} dispatchDetail={dispatchDetail} />
        </div>
      </div>
      <div className={classes["wwe"]}>
        {match.sportCategory === "fights" || match.sportCategory === "ufc" ? (
          <BoxingAPI
            booxingfighters={booxingfighters}
            dispatchBoxingFighters={dispatchBoxingFighters}
            mainEvent={mainEvent}
            dispatchMainEvent={dispatchMainEvent}
          />
        ) : match.sportCategory === "f1" ? (
          <F1API positions={positions} dispatchPositions={dispatchPositions} />
        ) : match.sportCategory === "horseracing" ? (
          <HorseRacingAPI
            horseRiders={horseRiders}
            dispatchHorseRiders={dispatchHorseRiders}
          />
        ) : match.sportCategory === "nascar" ? (
          <NascarAPI drivers={drivers} dispatchDrivers={dispatchDrivers} />
        ) : match.sportCategory === "netball" ? (
          <NetballAPI lineups={lineups} dispatchLineups={dispatchLineups} />
        ) : match.sportCategory === "tennis" ? (
          <TennisAPI
            tennisLineups={tennisLineups}
            dispatchTennisLineups={dispatchTennisLineups}
          />
        ) : match.sportCategory === "volleyball" ? (
          <VolleyballAPI
            teamPlayers={teamPlayers}
            dispatchTeamPlayers={dispatchTeamPlayers}
          />
        ) : match.sportCategory === "wwe" ? (
          <WWEAPI
            wweFighters={wweFighters}
            dispatchWweFighters={dispatchWweFighters}
            featuredFighters={featuredFighters}
            dispatchfeaturedFighters={dispatchfeaturedFighters}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Page;
