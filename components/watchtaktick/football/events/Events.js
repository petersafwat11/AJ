import React from "react";
import Body from "./body/Body";
import Bottom from "./bottom/Bottom";
import classes from "./events.module.css";
import Top from "./top/Top";
const Events = ({ firstTeamName, secondTeamName, data, eventStadium }) => {
  return (
    <div className={classes["container"]}>
      <Top firstTeamName={firstTeamName} secondTeamName={secondTeamName} />
      <span className={classes["devider"]}></span>
      <Body
        firstTeamName={firstTeamName}
        secondTeamName={secondTeamName}
        data={data}
        eventStadium={eventStadium}
        
      />
      <span className={classes["devider"]}></span>
      <Bottom />
    </div>
  );
};

export default Events;
