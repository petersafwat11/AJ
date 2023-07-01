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
      ) : category === "STATISTICS" ? (
        <Statistics
          optionsOne={[
            "RUNS",
            "DOUBLES",
            "TRIPLES",
            "HOME RUNES",
            "BASE ON BALLS",
          ]}
          optionsTwo={["HITS"]}
        />
      ) : (
        <Standings
          numOfActiveNunbers={9}
          borderHeader={true}
          items={["PL", "W-L", "PTS"]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
