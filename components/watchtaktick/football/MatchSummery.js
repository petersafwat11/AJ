import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import { sportCategoriesTypes } from "../../../utils/sportCategoryApiDataTypes";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Statistics from "../statistics/Statistics";
import Events from "./events/Events";
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
  const [lineupsData, setLineupsData] = useState([]);
  const changeCategory = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    if (sportCategory && matchId) {
      console.log(
        sportCategoriesTypes.find((item) => item.sport === sportCategory)
          .dataTypes
      );
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
          console.log("lineups", lineups.data);
          console.log("statistics", statistics);
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
        categories={["LINEUPS", "STATS", "EVENTS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups data={lineupsData} />
      ) : category === "EVENTS" ? (
        <Events />
      ) : (
        <Statistics
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          optionsOne={[
            "FIELD GOALS",
            "3 POINTERS %",
            "FREE THROWS%",
            "TOTAL REBOUNDS",
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
