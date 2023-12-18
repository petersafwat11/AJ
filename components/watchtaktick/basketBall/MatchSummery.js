"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Standings from "../standings/Standings";
import Statistics from "../statistics/Statistics";
import Lineups from "./Lineups";
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
      name: "FIELD GOALS %",
      home: 0,
      away: 0,
    },
    {
      name: "3 POINTERS %",
      home: 0,
      away: 0,
    },
    {
      name: "FREE THROWS %",
      home: 0,
      away: 0,
    },
    {
      name: "TOTAL REBOUNDS",
      home: 0,
      away: 0,
    },
    {
      name: "OFFENSIVE REBOUNDS",
      home: 0,
      away: 0,
    },
    {
      name: "ASSISTS",
      home: 0,
      away: 0,
    },
    {
      name: "BLOCKS",
      home: 0,
      away: 0,
    },
    {
      name: "STEALS",
      home: 0,
      away: 0,
    },
    {
      name: "TURNOVERS",
      home: 0,
      away: 0,
    },
    {
      name: "FOULS",
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
          const lineups = await getData(`sports/eventAPIData/lineups`, {
            matchId,
            sportCategory,
            eventDate,
          });

          setLineupsData(lineups.data);
          const allStats = statistics?.data?.find(
            (stat) => stat.period === "ALL"
          ).groups;
          console.log("lineups", lineups.data);
          console.log("stats", allStats);
          const useableData = [
            {
              name: "FIELD GOALS %",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Field goals")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Field goals")
                ?.away,
            },
            {
              name: "3 POINTERS %",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "3 pointers")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "3 pointers")
                ?.away,
            },
            {
              name: "FREE THROWS %",
              home: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Free throws")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Scoring")
                ?.statisticsItems?.find((items) => items.name === "Free throws")
                ?.away,
            },
            {
              name: "TOTAL REBOUNDS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Rebounds")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Rebounds")
                ?.away,
            },
            {
              name: "OFFENSIVE REBOUNDS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find(
                  (items) => items.name === "Offensive rebounds"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find(
                  (items) => items.name === "Offensive rebounds"
                )?.away,
            },
            {
              name: "ASSISTS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find(
                  (items) => items.name === "Offensive rebounds"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find(
                  (items) => items.name === "Offensive rebounds"
                )?.away,
            },
            {
              name: "BLOCKS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Blocks")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Blocks")
                ?.away,
            },
            {
              name: "STEALS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Steals")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Steals")
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
            {
              name: "FOULS",
              home: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Fouls")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Other")
                ?.statisticsItems?.find((items) => items.name === "Fouls")
                ?.away,
            },
          ];
          setStatisticsData(useableData);
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
        categories={["LINEUPS", "STATISTICS", "STANDINGS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups data={lineupsData} />
      ) : category === "STANDINGS" ? (
        <Standings
          numOfActiveNunbers={9}
          items={["PL", "W-L", "PTS"]}
          footerElements={["Playoffs"]}
        />
      ) : (
        <Statistics
          data={statisticsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          optionsOne={[
            "FIELD GOALS %",
            "3 POINTERS %",
            "FREE THROWS %",
            "TOTAL REBOUNDS",
            "OFFENSIVE REBOUNDS",
            "ASSISTS",
            "BLOCKS",
            "STEALS",
            "TURNOVERS",
            "FOULS",
          ]}
          optionsTwo={[]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
