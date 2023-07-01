import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Lineups from "./Lineups";
import classes from "./matchSummery.module.css";
import Statistics from "../statistics/Statistics";
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
        categories={["LINEUPS", "STATISTICS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups />
      ) : (
        <Statistics
          optionsOne={[
            "TOTAL POINTS",
            "ACES",
            "DOUBLE FAULTS",
            "BREAK POINTS SAVED",
            "OFFENSIVE REBOUNDS"
          ]}
          optionsTwo={["SERVICE POINTS WON", "RECEIVER POINTS WON"]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
