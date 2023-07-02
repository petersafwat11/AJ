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
            "SHOTS",
            "FACEOFFS WON",
            "BLOCKED",
            "TAKEAWAYS",
            "GIVEAWAYS",
          ]}
          optionsTwo={["HITS", "PENALTY MINUTES"]}
        />
      ) : (
        <Standings
          numOfActiveNunbers={5}
          items={["PL", "PTS"]}
          footerElements={["Playoffs"]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
