import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Statistics from "../statistics/Statistics";
import Lineups from "./Lineups";
import Subsitutes from "./Subsitutes";
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
      ) : category === "SUBSITUTES" ? (
        <Subsitutes />
      ) : (
        <Statistics
          optionsOne={[
            "SHOTS",
            "SHOTS ON TARGET",
            "POSSESSION",
            "PASSES",
            "FOULS",
            "OFFSIDE",
            "CORNER",
          ]}
          optionsTwo={[]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
