import React, { useEffect, useRef, useState } from "react";
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
  const changeCategory = (category) => {
    setCategory(category);
  };
  const [statisticsData, setStatisticsData] = useState([
    {
      name: "Shots",
      home: 0,
      away: 0,
    },
    {
      name: "Faceoffs won",
      home: 0,
      away: 0,
    },
    {
      name: "Blocked",
      home: 0,
      away: 0,
    },
    {
      name: "Takeaways",
      home: "0/0 (0%)",
      away: "40/0 (0%)",
    },
    {
      name: "Giveaways",
      home: 0,
      away: 0,
    },
    {
      name: "Hits",
      home: 0,
      away: 0,
    },
    {
      name: "Penalty minutes",
      home: 0,
      away: 0,
    },
  ]);
  const [lineupsData, setLineupsData] = useState([]);
  const statisticsDataRef = useRef([
    {
      name: "Shots",
      home: 0,
      away: 0,
    },
    {
      name: "Faceoffs won",
      home: 0,
      away: 0,
    },
    {
      name: "Blocked",
      home: 0,
      away: 0,
    },
    {
      name: "Takeaways",
      home: "0/0 (0%)",
      away: "40/0 (0%)",
    },
    {
      name: "Giveaways",
      home: 0,
      away: 0,
    },
    {
      name: "Hits",
      home: 0,
      away: 0,
    },
    {
      name: "Penalty minutes",
      home: 0,
      away: 0,
    },
  ]);
  useEffect(() => {
    const getstatsData = async () => {
      if (!sportCategory || !matchId || !eventDate) {
        return;
      }
      try {
        const statistics = await getData(`sports/eventAPIData/statistics`, {
          matchId,
          sportCategory,
          eventDate,
          dataType: "Statistics",
        });
        const allStats = statistics?.data
          ?.find((stat) => stat.period === "ALL")
          .groups.find(
            (item) => item.groupName === "Attacking"
          ).statisticsItems;
        const useableStatsData = allStats.filter((largerObj) =>
          statisticsDataRef.current.some(
            (smallerObj) => smallerObj.name === largerObj.name
          )
        );
        const lineups = await getData(`sports/eventAPIData/lineups`, {
          matchId,
          sportCategory,
          eventDate,
          dataType: "Lineups",
        });
        console.log("lineups", lineups);
        console.log("stats", statistics);

        setLineupsData(lineups.data);
        setStatisticsData(useableStatsData);
      } catch (err) {
        console.log("error", err);
      }
    };
    getstatsData();
  }, [matchId, sportCategory, eventDate]);
  return (
    <div className={classes["container"]}>
      <GlobalHeader
        category={category}
        changeCategory={changeCategory}
        categories={["LINEUPS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups data={lineupsData} />
      ) : (
        <Statistics
          data={statisticsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          optionsOne={[
            "SHOTS",
            "FACEOFFS WON",
            "BLOCKED",
            "TAKEAWAYS",
            "GIVEAWAYS",
          ]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
