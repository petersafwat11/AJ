import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Standings from "../standings/Standings";
import Statistics from "../statistics/Statistics";
import Lineups from "./Lineups";
import classes from "./matchSummery.module.css";
const MatchSummery = () => {
  const [category, setCategory] = useState("LINEUPS");
  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className={classes["container"]}>
      <GlobalHeader
        category={category}
        changeCategory={changeCategory}
        categories={["LINEUPS", "STATS", "SUBSITUTES"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : category === "STANDINGS" ? (
        <Standings
          numOfActiveNunbers={9}
          items={["PL", "W-L", "PTS"]}
          footerElements={["Playoffs"]}
        />
      ) : (
        <Statistics
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
