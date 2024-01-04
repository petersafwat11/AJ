import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import GlobalHeader from "../globalHeader/GlobalHeader";
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
      name: "Runs",
      home: 0,
      away: 0,
    },
    {
      name: "Doubles",
      home: 0,
      away: 0,
    },
    {
      name: "Triples",
      home: 0,
      away: 0,
    },
    {
      name: "Home runs",
      home: 0,
      away: 0,
    },
    {
      name: "Base on balls",
      home: 0,
      away: 0,
    },
    {
      name: "Hits",
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
            dataType: "Statistics",
          });
          const lineups = await getData(`sports/eventAPIData/lineups`, {
            matchId,
            sportCategory,
            eventDate,
            dataType: "Lineups",
          });

          setLineupsData(lineups.data);
          const allStats = statistics?.data?.find(
            (stat) => stat.period === "ALL"
          ).groups;
          console.log("lineups", lineups.data);
          console.log("stats", allStats);
          const useableData = [
            {
              name: "Runs",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Runs")?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Runs")?.away,
            },
            {
              name: "Doubles",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Doubles")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Doubles")
                ?.away,
            },
            {
              name: "Triples",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Triples")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Triples")
                ?.away,
            },
            {
              name: "Home runs",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Home runs")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Home runs")
                ?.away,
            },
            {
              name: "Base on balls",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find(
                  (items) => items.name === "Base on balls"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find(
                  (items) => items.name === "Base on balls"
                )?.away,
            },
            {
              name: "Hits",
              home: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Hits")?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Batting")
                ?.statisticsItems?.find((items) => items.name === "Hits")?.away,
            },
          ];
          setStatisticsData(useableData);
          setLineupsData(lineups.data);
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
        categories={["LINEUPS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups data={lineupsData}/>
      ) : (
        <Statistics
          data={statisticsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          optionsOne={[
            "RUNS",
            "DOUBLES",
            "TRIPLES",
            "HOME RUNES",
            "BASE ON BALLS",
          ]}
          optionsTwo={["HITS"]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
