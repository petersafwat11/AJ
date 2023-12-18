import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Fighters from "./Fighters";
import Venue from "./Venue";
import classes from "./matchSummery.module.css";
const MatchSummery = ({
  sportCategory,
  matchId,
  eventDate,
  secondTeamName,
  firstTeamName,
}) => {
  const [category, setCategory] = useState("VENUE");
  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className={classes["container"]}>
      <GlobalHeader
        category={category}
        changeCategory={changeCategory}
        categories={["VENUE", "FIGHTERS"]}
      />
      {category === "VENUE" ? <Venue /> : <Fighters />}
    </div>
  );
};

export default MatchSummery;
