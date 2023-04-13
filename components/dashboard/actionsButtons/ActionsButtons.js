import React from "react";
import classes from "./actionsButtons.module.css";
const ActionsButtons = ({ first, second }) => {
  return (
    <div className={classes["actions"]}>
      <button className={classes["first-button"]}>{first}</button>
      <button className={classes["second-button"]}>{second}</button>
    </div>
  );
};

export default ActionsButtons;
