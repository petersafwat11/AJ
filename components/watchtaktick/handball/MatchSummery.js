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
  const [statisticsData, setStatisticsData] = useState([]);
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

          console.log(
            statistics?.data?.find((stat) => stat.period === "ALL").groups
          );

          setLineupsData(lineups.data);
          const allStats = statistics?.data?.find(
            (stat) => stat.period === "ALL"
          ).groups;

          const useableData = [
            {
              name: "Saves",
              home: allStats
                ?.find((stat) => stat.groupName === "Saves")
                ?.statisticsItems?.find((items) => items.name === "Saves")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Saves")
                ?.statisticsItems?.find((items) => items.name === "Saves")
                ?.away,
            },
            {
              name: " 2 Min Penalty",
              home: allStats
                ?.find((stat) => stat.groupName === "Penalty")
                ?.statisticsItems?.find(
                  (items) => items.name === "2 min penalty"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Penalty")
                ?.statisticsItems?.find(
                  (items) => items.name === "2 min penalty"
                )?.away,
            },
            {
              name: "Goals in Powerplay",
              home: allStats
                ?.find((stat) => stat.groupName === "Goals extra")
                ?.statisticsItems?.find(
                  (items) => items.name === "Goals in powerplay"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Goals extra")
                ?.statisticsItems?.find(
                  (items) => items.name === "Goals in powerplay"
                )?.away,
            },
            {
              name: "7 METRES",
              home: allStats
                ?.find((stat) => stat.groupName === "Goals")
                ?.statisticsItems?.find((items) => items.name === "7 meters")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Goals")
                ?.statisticsItems?.find((items) => items.name === "7 meters")
                ?.away,
            },
            {
              name: "GOAL STREAK",
              home: allStats
                ?.find((stat) => stat.groupName === "Goals extra")
                ?.statisticsItems?.find((items) => items.name === "Goal streak")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Goals extra")
                ?.statisticsItems?.find((items) => items.name === "Goal streak")
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
        categories={["LINEUPS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups
          data={lineupsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
        />
      ) : (
        <Statistics
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          data={statisticsData}
          optionsOne={[
            "SHOOTING EFFICIENCY",
            "WING GOALS",
            "FAST BREAK GOALS",
            "7 METRES",
            "GOAL STREAKS",
          ]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
