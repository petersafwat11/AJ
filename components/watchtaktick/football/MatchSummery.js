import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Statistics from "../statistics/Statistics";
import Lineups from "./Lineups";
import Events from "./events/Events";
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
        categories={["LINEUPS", "STATS", "EVENTS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : category === "EVENTS" ? (
        <Events />
      ) : (
        <Statistics
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
