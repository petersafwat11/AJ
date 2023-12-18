import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Summery from "../summary/Summery";
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
  const [summeryData, setSummeryData] = useState([
   
  ]);
  useEffect(() => {
    if (sportCategory && matchId) {
      (async () => {
        try {
          const statistics = await getData(`sports/eventAPIData/statistics`, {
            matchId,
            sportCategory,
            eventDate,
          });

          const useableData = statistics.data.filter((stat) => stat.period !== "ALL");
          setSummeryData(useableData);
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
        categories={["LINEUPS", "SUMMARY"]}
      />
      {category === "LINEUPS" ? (
        <Lineups
          secondTeamName={secondTeamName}
          firstTeamName={firstTeamName}
        />
      ) : (
        <Summery data={summeryData} />
      )}
    </div>
  );
};

export default MatchSummery;
