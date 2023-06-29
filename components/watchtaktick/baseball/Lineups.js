import React from "react";
import LineupsDetails from "./LineupsDetails";
import classes from "./lineups.module.css";
const Lineups = () => {
  return (
    <div className={classes["container"]}>
      <LineupsDetails
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
