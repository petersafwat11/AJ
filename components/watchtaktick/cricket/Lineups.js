import React, { useEffect, useState } from "react";
import Details from "../details/Details";
import MatchDots from "../matchDots/MatchDots";
import Temprature from "../temprature/Temprature";
import classes from "./lineups.module.css";
import Staduim from "./Staduim";
const Lineups = ({ data }) => {
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };
  console.log("data", data);
  useEffect(() => {
    console.log("option", option);
  }, [option]);
  return (
    <div className={classes["container"]}>
      <Staduim option={option} data={data} />
      <div className={classes["temp"]}>
        <Temprature />
      </div>
      <div className={classes["details-options"]}>
        <MatchDots
          options={[1, 2]}
          selectedOption={option}
          changeOptions={changeCategory}
        />
      </div>
      <Details
        matchDetails={[
          { left: "VENUE", right: "O2 Arena" },
          { left: "LOCATION", right: "New Delhi, India" },
          { left: "TEAM", right: "Pakistan" },
        ]}
      />
    </div>
  );
};

export default Lineups;
