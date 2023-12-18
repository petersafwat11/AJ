import React from "react";
import BaseballMatchSummery from "../baseball/MatchSummery";
import BasketballMatchSummery from "../basketball/MatchSummery";
import CricketMatchSummery from "../cricket/MatchSummery";
import DartsMatchSummery from "../darts/MatchSummery";
import F1MatchSummery from "../f1/MatchSummery";
import FootballMatchSummery from "../football/MatchSummery";
import HandballMatchSummery from "../handball/MatchSummery";
import HockeyMatchSummery from "../hockey/MatchSummery";
import HourseRacingMatchSummery from "../horce-racing/MatchSummery";
import NascarMatchSummery from "../nascar/MatchSummery";
import NetballMatchSummery from "../netball/MatchSummery";
import NFLMatchSummery from "../nfl/MatchSummery";
import RugbyMatchSummery from "../rugby/MatchSummery";
import TableTennisMatchSummery from "../tableTennis/MatchSummery";
import TennisMatchSummery from "../tennis/MatchSummery";
import UFCMatchSummery from "../UFC/MatchSummery";
import VollayballMatchSummery from "../vollayball/MatchSummery";
import WWEMatchSummery from "../wwe/MatchSummery";
import classes from "./MatchSummery.module.css";
const MatchSummery = ({
  sportCategory,
  matchId,
  eventDate,
  secondTeamName,
  firstTeamName,
}) => {
  return (
    <div className={classes["match-summery"]}>
      {sportCategory === "basketball" ? (
        <BasketballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "football" ? (
        <FootballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "ufc" ? (
        <UFCMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "baseball" ? (
        <BaseballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "cricket" ? (
        <CricketMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "darts" ? (
        <DartsMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "f1" ? (
        <F1MatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "handball" ? (
        <HandballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "hockey" ? (
        <HockeyMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "hourseracing" ? (
        <HourseRacingMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "nascar" ? (
        <NascarMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "netball" ? (
        <NetballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "nfl" ? (
        <NFLMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "rugby" ? (
        <RugbyMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "tabletennis" ? (
        <TableTennisMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "tennis" ? (
        <TennisMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "volleyball" ? (
        <VollayballMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : sportCategory === "wwe" ? (
        <WWEMatchSummery
          eventDate={eventDate}
          matchId={matchId}
          sportCategory={sportCategory}
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MatchSummery;
