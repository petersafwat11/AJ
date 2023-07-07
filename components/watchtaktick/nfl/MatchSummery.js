import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Statistics from "../statistics/Statistics";
import Events from "./Events";
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
        categories={["LINEUPS", "EVENTS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : category === "EVENTS" ? (
        <Events />
      ) : (
        <Statistics
          optionsOne={[
            "TOTAL YARDS",
            "PASSING YARDS",
            "RUSHING YARDS",
            "YARDS PER PLAY",
            "FIRST DOWNS",
            "3RD DOWN EFFICIENCY",
            "TOTAL PLAYS",
            "SACKS ALLOWED",
            "PUNTS",
            "PENALTIES",
            "FUMBLES LOST",
            "INTERCEPTIONS THROWN",
            "TIME OF POSSESSION",
          ]}
          optionsTwo={[]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
