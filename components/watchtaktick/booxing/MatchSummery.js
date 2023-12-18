"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import GlobalHeader from "../globalHeader/GlobalHeader";
import FightersData from "./FightersData";
import MainEvent from "./MainEvent";
import classes from "./matchSummery.module.css";
const MatchSummery = ({
  sportCategory,
  matchId,
  eventDate,
  secondTeamName,
  firstTeamName,
}) => {
  const [category, setCategory] = useState("LINEUPS");
  const [statisticsData, setStatisticsData] = useState([
    {
      name: "POSSESSION",
      home: 0,
      away: 0,
    },
    {
      name: "TRIES",
      home: 0,
      away: 0,
    },
    {
      name: "CONVERSIONS",
      home: 0,
      away: 0,
    },
    {
      name: "PENALTY GOALS",
      home: 0,
      away: 0,
    },
    {
      name: "SCRUMS",
      home: 0,
      away: 0,
    },
    {
      name: "TURNOVERS",
      home: 0,
      away: 0,
    },
  ]);
  const [lineupsData, setLineupsData] = useState();

  const changeCategory = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    if (sportCategory && matchId) {
      (async () => {
        try {
          const statistics = await getData(`sports/eventAPIData/statistics`, {
            matchId,
            sportCategory,
            eventDate,
          });
          const allStats = statistics?.data?.find(
            (stat) => stat.period === "ALL"
          ).groups;
          console.log("stats", allStats);
          "POSSESSION",
            "TRIES",
            "CONVERSIONS",
            "PENALTY GOALS",
            "SCRUMS",
            "TURNOVERS";

          const useableData = [
            {
              name: "POSSESSION",
              home: allStats
                ?.find((stat) => stat.groupName === "Possession")
                ?.statisticsItems?.find(
                  (items) => items.name === "Ball possession"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Possession")
                ?.statisticsItems?.find(
                  (items) => items.name === "Ball possession"
                )?.away,
            },
            {
              name: "TRIES",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Tries")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Tries")
                ?.away,
            },
            {
              name: "CONVERSIONS",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Conversions")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Conversions")
                ?.away,
            },
            {
              name: "PENALTY GOALS",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find(
                  (items) => items.name === "Penalty goals"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find(
                  (items) => items.name === "Penalty goals"
                )?.away,
            },
            {
              name: "SCRUMS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Scrums")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Scrums")
                ?.away,
            },
            {
              name: "TURNOVERS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Turnovers")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Turnovers")
                ?.away,
            },
          ];
          setStatisticsData(useableData);
          console.log("useable", useableData);
        } catch (err) {
          console.log("error", err);
        }
      })();
    }
  }, [matchId, sportCategory, eventDate]);
  return (
    <div className={classes["container"]}>
      <GlobalHeader
        category={category}
        changeCategory={changeCategory}
        categories={["MAIN EVENT", "FIGHTERS"]}
      />
      <div className={classes["content"]}>
        {category === "MAIN EVENT" ? <MainEvent /> : <FightersData />}
      </div>
    </div>
  );
};

export default MatchSummery;
