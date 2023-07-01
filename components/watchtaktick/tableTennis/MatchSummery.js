import React, { useState } from "react";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Summery from "../summary/Summery";
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
        categories={["LINEUPS", "SUMMARY"]}
      />
      {category === "LINEUPS" ? <Lineups /> : <Summery />}
    </div>
  );
};

export default MatchSummery;
