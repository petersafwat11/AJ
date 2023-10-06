import React from "react";
import Body from "./body/Body";
import Bottom from "./bottom/Bottom";
import classes from "./events.module.css";
import Top from "./top/Top";
const Events = () => {
  return (
    <div className={classes["container"]}>
      <Top />
      <span className={classes["devider"]}></span>
      <Body />
      <span className={classes["devider"]}></span>
      <Bottom />
    </div>
  );
};

export default Events;
