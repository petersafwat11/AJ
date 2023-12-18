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
      name: "THROWN 180",
      home: 0,
      away: 0,
    },
    {
      name: "THROWN OVER 140",
      home: 0,
      away: 0,
    },
    {
      name: "THROWN OVER 100",
      home: 0,
      away: 0,
    },
    {
      name: "HIGHEST CHECKOUT",
      home: 0,
      away: 0,
    },
    {
      name: "CHECKOUTS ACCURACY",
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
          const useableData = [
            {
              name: "THROWN 180",
              home: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find((items) => items.name === "Thrown 180")
                ?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find((items) => items.name === "Thrown 180")
                ?.away,
            },
            {
              name: "THROWN OVER 140",
              home: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Thrown over 140"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Thrown over 140"
                )?.away,
            },
            {
              name: "THROWN OVER 100",
              home: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Thrown over 100"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Thrown over 100"
                )?.away,
            },
            {
              name: "HIGHEST CHECKOUT",
              home: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Highest checkout"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Highest checkout"
                )?.away,
            },
            {
              name: "CHECKOUTS ACCURACY",
              home: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Checkouts accuracy"
                )?.home,
              away: allStats
                ?.find((stat) => stat.groupName === "Attacking")
                ?.statisticsItems?.find(
                  (items) => items.name === "Checkouts accuracy"
                )?.away,
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
        categories={["LINEUPS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : (
        <Statistics
          data={statisticsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          optionsOne={[
            "THROWN 180",
            "THROWN OVER 140",
            "THROWN OVER 100",
            "HIGHEST CHECKOUT",
            "CHECKOUTS ACCURACY",
          ]}
          optionsTwo={[]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
