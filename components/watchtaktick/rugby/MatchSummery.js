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
        categories={["LINEUPS", "STATISTICS", "STANDINGS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : category === "STANDINGS" ? (
        <Standings
          numOfActiveNunbers={2}
          items={["PL", "PTS"]}
          footerElements={["Playoffs", "Qualification Playoffs"]}
        />
      ) : (
        <Statistics
          optionsOne={[
            "POSSESSION",
            "TRIES",
            "CONVERSIONS",
            "PENALTY GOALS",
            "SCRUMS",
          ]}
          optionsTwo={["TURNOVERS"]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
