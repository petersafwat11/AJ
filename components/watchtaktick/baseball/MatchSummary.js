import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import classes from "./matchSummery.module.css";
import Lineups from "./Lineups";
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
      {category === "LINEUPS" ? <Lineups /> : ""}
    </div>
  );
};

export default MatchSummery;
